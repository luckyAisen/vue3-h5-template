import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { PluginOption } from "vite";

import { configComponentsPlugin } from "./components";
import { configCompressPlugin } from "./compress";
import { configHtmlPlugin } from "./html";
import { configLegacyPlugin } from "./legacy";
import { configMarkdownPlugin } from "./markdown";
import { configSetupExtendsPlugin } from "./setup-extend";
import { configVConsolePlugin } from "./v-console";

export const createVitePlugins = (env: ViteEnv, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
  ];
  /**
   * vite-plugin-html
   */
  vitePlugins.push(configHtmlPlugin(env, isBuild));
  /**
   * unplugin-vue-components
   */
  vitePlugins.push(configComponentsPlugin());
  /**
   * vite-plugin-vconsole
   */
  vitePlugins.push(configVConsolePlugin(env, isBuild));
  /**
   * vite-plugin-md
   */
  vitePlugins.push(configMarkdownPlugin());
  /**
   * unplugin-vue-setup-extend-plus
   */
  vitePlugins.push(configSetupExtendsPlugin());

  if (isBuild) {
    /**
     * @vitejs/plugin-legacy
     */
    vitePlugins.push(configLegacyPlugin(isBuild));
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
