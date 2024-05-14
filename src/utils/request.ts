import type { RequestOptionsInit, ResponseError } from 'umi-request';
import { extend } from 'umi-request';
import { showDialog, showLoadingToast } from 'vant';
import type { ComponentPublicInstance } from 'vue';

import { FETCH_CODE_ENUM, FETCH_TIMEOUT, isVoid } from './';

// https://github.com/youzan/vant/blob/HEAD/packages/vant/src/utils/basic.ts#L12
// eslint-disable-next-line @typescript-eslint/ban-types
let toast: ComponentPublicInstance<{}, any>;

const requestInterceptor = (url: string, options: RequestOptionsInit) => {
  options.prefix = options.prefix || import.meta.env.VITE_APP_BASE_API;
  options.loading = options.loading || false;
  options.errorTips = isVoid(options.errorTips) ? true : options.errorTips;
  if (options.loading) {
    toast = showLoadingToast({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    });
  }
  return {
    url,
    options: { ...options, interceptors: true }
  };
};

const responseInterceptor = async (response: Response, options: RequestOptionsInit) => {
  if (response.ok) {
    options.loading && toast.close();
    return await response.clone().json();

    // const { code, msg } = await response.clone().json();
    // if (String(code) !== '0') {
    //   response.__code = code;
    //   response.__msg = msg;
    //   return Promise.reject({ response });
    // } else {
    //   return response;
    // }
  } else {
    response.__code = String(response.status);
    response.__msg = FETCH_CODE_ENUM[response.status];
    return Promise.reject({ response });
  }
};

const errorHandler = (error: ResponseError) => {
  const { response, request, type } = error;
  request.options?.loading && toast.close();

  if (request.options.errorTips) {
    let tipMsg: string;

    if (response && response.__code) {
      tipMsg = `<p style="text-align: left;">错误信息：${response.__msg}</p><p style="text-align: left;padding-top: 10px;">错误码：${response.__code}</p>`;
    } else if (type === 'AbortError') {
      tipMsg = '用户取消请求';
    } else {
      tipMsg = '您的网络异常，无法连接到服务器';
    }

    showDialog({
      title: '提示',
      allowHtml: true,
      theme: 'round-button',
      message: tipMsg
    });
  }

  return Promise.reject(error);
};

const request = extend({
  prefix: import.meta.env.VITE_APP_BASE_API,
  timeout: FETCH_TIMEOUT,
  errorHandler
});

request.interceptors.request.use(requestInterceptor);

request.interceptors.response.use(responseInterceptor);

export default request;
