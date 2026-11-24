import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const LEGACY_HTML_REDIRECTS: Record<string, string> = {
  '/index.html': '/',
  '/about.html': '/about-us/',
  '/aboutus.html': '/about-us/',
  '/about-us.html': '/about-us/',
  '/services.html': '/services/',
  '/industries.html': '/industries/',
  '/projects.html': '/projects/',
  '/contact.html': '/contact-us/',
  '/contact-us.html': '/contact-us/',
};

const CLEAN_ROUTE_DIRS = new Set([
  '/about-us',
  '/services',
  '/industries',
  '/projects',
  '/contact-us',
]);

function createCleanUrlMiddleware() {
  return (
    req: {url?: string; method?: string},
    res: {statusCode: number; setHeader: (k: string, v: string) => void; end: () => void},
    next: () => void,
  ) => {
    if (!req.url || (req.method && req.method !== 'GET' && req.method !== 'HEAD')) {
      next();
      return;
    }

    const qIdx = req.url.indexOf('?');
    const pathname = qIdx >= 0 ? req.url.slice(0, qIdx) : req.url;
    const query = qIdx >= 0 ? req.url.slice(qIdx) : '';

    if (LEGACY_HTML_REDIRECTS[pathname]) {
      res.statusCode = 302;
      res.setHeader('Location', `${LEGACY_HTML_REDIRECTS[pathname]}${query}`);
      res.end();
      return;
    }

    if (CLEAN_ROUTE_DIRS.has(pathname)) {
      res.statusCode = 302;
      res.setHeader('Location', `${pathname}/${query}`);
      res.end();
      return;
    }

    const trimmed = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : '';
    if (trimmed && CLEAN_ROUTE_DIRS.has(trimmed)) {
      req.url = `${trimmed}/index.html${query}`;
    }

    next();
  };
}

export default defineConfig(() => {
  return {
    appType: 'mpa',
    plugins: [
      {
        name: 'clean-mpa-urls',
        configureServer(server) {
          server.middlewares.use(createCleanUrlMiddleware());
        },
        configurePreviewServer(server) {
          server.middlewares.use(createCleanUrlMiddleware());
        },
      },
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about-us/index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          industries: path.resolve(__dirname, 'industries/index.html'),
          projects: path.resolve(__dirname, 'projects/index.html'),
          contact: path.resolve(__dirname, 'contact-us/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
