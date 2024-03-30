/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  /**
   * @description 公共基础路径
   */
  readonly VITE_BASE: string;
  /**
   * @description 开发环境下的端口号
   */
  readonly VITE_PORT: number;
  /**
   * @description APP 运行环境
   */
  readonly VITE_APP_ENV: string;
  /**
   * @description APP 标题
   */
  readonly VITE_APP_TITLE: string;
  /**
   * @description APP 请求前缀
   */
  readonly VITE_APP_BASE_API: string;
  /**
   * @description 线上是否开启 vconsole
   */
  readonly VITE_APP_VCONSOLE_ENABLED: string;
  /**
   * @description 是否启用 gzip 或 brotli 压缩
   */
  readonly VITE_APP_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  /**
   * @description 使用压缩时是否删除源文件
   */
  readonly VITE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
