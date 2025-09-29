import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { SEOHead } from './components/SEOHead';
import { SEO_CONFIG } from './config/seo';

export function render(url: string) {
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <SEOHead
          title={SEO_CONFIG.defaultMeta.title}
          description={SEO_CONFIG.defaultMeta.description}
          keywords={SEO_CONFIG.defaultMeta.keywords}
          canonicalUrl={`${SEO_CONFIG.baseUrl}${url}`}
          ogImage={`${SEO_CONFIG.baseUrl}/dubai-luxury-hero.webp`}
          ogType="website"
        >
          <App />
        </SEOHead>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as any;
  
  return {
    appHtml,
    head: `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `,
  };
}
