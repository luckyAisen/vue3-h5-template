export declare global {
  declare type ViteEnv = ImportMetaEnv;
  interface Response {
    /**
     * @description 响应状态码
     */
    __code?: string;
    /**
     * @description 错误提示语
     */
    __msg?: string;
  }
}
