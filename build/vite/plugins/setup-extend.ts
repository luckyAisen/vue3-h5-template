// https://github.com/chenxch/unplugin-vue-setup-extend-plus

import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";

export const configSetupExtendsPlugin = () => {
  const configComponentsPlugin = vueSetupExtend();
  return configComponentsPlugin;
};
