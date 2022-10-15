import { fileURLToPath, URL } from "url";
import type { UserConfigExport } from "vite";
import { defineConfig, loadEnv } from "vite";

import { createVitePlugins } from "./build/vite/plugins";

export default defineConfig(async ({ command, mode }) => {
  const isBuild = command === "build";

  const env = loadEnv(
    mode,
    fileURLToPath(new URL("./", import.meta.url))
  ) as ViteEnv;

  const config: UserConfigExport = {
    base: env.VITE_BASE,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#": fileURLToPath(new URL("/types", import.meta.url)),
      },
    },
    server: {
      host: true,
      port: env.VITE_PORT,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: createVitePlugins(env, isBuild),
  };

  return config;
});
