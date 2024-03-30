import path from 'path';
import { viteVConsole } from 'vite-plugin-vconsole';

/**
 * vConsole 配置
 * https://github.com/vadxq/vite-plugin-vconsole
 */
export const configVConsolePlugin = (env: ViteEnv) => {
  return viteVConsole({
    /**
     * entry：入口文件
     */
    entry: path.resolve('src/main.ts'),
    /**
     * enabled： 是否启用插件
     */
    enabled: env.VITE_APP_VCONSOLE_ENABLED === 'true',
    /**
     * vconsole 配置
     */
    config: {
      maxLogNumber: 1000,
      theme: 'light'
    }
  });
};
