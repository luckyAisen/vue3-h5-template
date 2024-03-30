import Components from 'unplugin-vue-components/vite';
// import { VantResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from '@vant/auto-import-resolver';

/**
 * Components 配置，https://github.com/antfu/unplugin-vue-components
 *
 * VantResolver 配置，https://github.com/youzan/vant/blob/main/packages/vant-auto-import-resolver/README.zh-CN.md
 */
export const configComponentsPlugin = () => {
  const configComponentsPlugin = Components({
    dts: 'types/components.d.ts',
    resolvers: [
      VantResolver({
        // importStyle: false
      })
    ]
  });
  return configComponentsPlugin;
};
