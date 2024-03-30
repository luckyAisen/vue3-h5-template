import path from 'path';
import { createSvgIconsPlugin as svgIconsPlugin } from 'vite-plugin-svg-icons';

/**
 * createSvgIconsPlugin 配置
 * https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
 */
export const createSvgIconsPlugin = () => {
  return svgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]'
  });
};
