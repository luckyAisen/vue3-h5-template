import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';

import { createVitePlugins } from './build/vite/plugins';

import type { UserConfigExport } from 'vite';

export default defineConfig(async ({ command, mode }) => {
  const isBuild = command === 'build';

  const env = loadEnv(mode, fileURLToPath(new URL('./', import.meta.url))) as ViteEnv;

  const config: UserConfigExport = {
    base: env.VITE_BASE,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('/types', import.meta.url))
      }
    },
    server: {
      host: true,
      port: env.VITE_PORT
    },
    plugins: createVitePlugins(env, isBuild),
    esbuild: {
      drop: isBuild ? ['console', 'debugger'] : []
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/main-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: (info) => {
            const imgExt = [
              '.jpg',
              '.jpeg',
              '.png',
              '.svg',
              '.gif',
              '.bmp',
              '.tiff',
              '.tif',
              '.webp',
              '.heif'
            ];
            if (info.name?.endsWith('.css')) {
              return 'css/[name]-[hash].css';
            }
            if (info.name && imgExt.some((it) => info.name?.endsWith(it))) {
              return 'img/[name]-[hash].[ext]';
            }
            return 'assets/[name]-[hash].[ext]';
          },
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  };

  return config;
});
