import AutoImport from 'unplugin-auto-import/vite';

/**
 * AutoImport 配置
 * https://github.com/unplugin/unplugin-auto-import
 */
export const configAutoImport = () => {
  return AutoImport({
    dts: './types/auto-imports.d.ts',
    imports: ['vue', 'vue-router'],
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/ // .vue
    ],
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  });
};
