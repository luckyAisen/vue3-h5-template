import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import type { PluginOption } from 'vite';

import { configAutoImport } from './auto-import';
import { configComponentsPlugin } from './components';
import { createSvgIconsPlugin } from './svg-icons';
import { configVConsolePlugin } from './v-console';
import { configVueDevToolsPlugin } from './vue-devtools';
import { configHtmlPlugin } from './html';
import { configCompressPlugin } from './compress';

export const createVitePlugins = (env: ViteEnv, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx()
  ];
  /**
   * unplugin-auto-import/vite'
   */
  vitePlugins.push(configAutoImport());
  /**
   * unplugin-vue-components/vite
   */
  vitePlugins.push(configComponentsPlugin());
  /**
   * vite-plugin-svg-icons
   */
  vitePlugins.push(createSvgIconsPlugin());
  /**
   * vite-plugin-vconsole
   */
  vitePlugins.push(configVConsolePlugin(env));
  /**
   * vite-plugin-vue-devtools
   */
  vitePlugins.push(configVueDevToolsPlugin());
  /**
   * vite-plugin-html
   */
  vitePlugins.push(configHtmlPlugin(env, isBuild));

  if (isBuild) {
    /**
     * vite-plugin-compression
     */
    vitePlugins.push(
      configCompressPlugin(
        env.VITE_APP_BUILD_COMPRESS,
        env.VITE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      )
    );
  }

  return vitePlugins;
};
