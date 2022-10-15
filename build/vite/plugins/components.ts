// https://github.com/antfu/unplugin-vue-components

import { VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export const configComponentsPlugin = () => {
  const configComponentsPlugin = Components({
    dts: "types/components.d.ts",
    resolvers: [VantResolver({})],
  });
  return configComponentsPlugin;
};
