import fs from 'node:fs/promises';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

process.env.MY_CUSTOM_SECRET = '42'; // replace with your own secret

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort?: number, // Explicitly type hmrPort
) {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? await fs.readFile(resolve('dist/client/index.html'), 'utf-8')
    : '';

  const app = express();

  let vite: any;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we don't want to catch file save events that would trigger
          // a hot update. (on server side the client is not actually connected so
          // it would crash with an error)
          ignored: '!**/*',
        },
        hmr: { port: hmrPort },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    );
  }

  app.use('*', async (req: express.Request, res: express.Response) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        // always read fresh html in dev
        template = await fs.readFile(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        // The path is relative to the compiled server.js in dist-server/
        render = (await import(path.join(__dirname, '../dist/entry-server.js'))).render;
      }

      const { appHtml, head } = await render(url);

      const html = template
        .replace('<!--app-head-->', head)
        .replace('<!--app-html-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer(undefined, true).then(({ app }) => // Pass true for isProd in production environment
    app.listen(6173, () => {
      console.log('http://localhost:6173');
    }),
  );
}
