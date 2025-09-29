import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        ssr: 'src/entry-server.tsx',
        rollupOptions: {
            // Overwrite the default input
            input: 'src/entry-server.tsx',
        },
    },
});
