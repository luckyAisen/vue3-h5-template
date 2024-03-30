// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { RequestOptionsInit, Response, ResponseError } from 'umi-request';

declare module 'umi-request' {
  export interface RequestOptionsInit {
    /**
     * @description 是否在请求时加载 loading
     */
    loading?: boolean;
    /**
     * @description 请求失败时是否弹框提示
     */
    errorTips?: boolean;
    [key: string]: any;
  }
}
