import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite({ autoCodeSplitting: true }), react(), tailwindcss(), tsconfigPaths()],
    define: {
        'import.meta.env.version': JSON.stringify(pkg.version)
    }
});
