import { extend } from "umi-request";
import { showDialog, showLoadingToast } from "vant";
import type { ComponentPublicInstance } from "vue";

import type {
  FetchRequestInterceptor,
  FetchResponseError,
  FetchResponseInterceptor,
} from "@/api";

import { FETCH_CODE_ENUM, FETCH_TIMEOUT } from "./";

// https://github.com/youzan/vant/blob/HEAD/packages/vant/src/utils/basic.ts#L12
// eslint-disable-next-line @typescript-eslint/ban-types
let toast: ComponentPublicInstance<{}, any>;

const requestInterceptor: FetchRequestInterceptor = (url, options) => {
  options.prefix = options.prefix || import.meta.env.VITE_APP_BASE_API;
  options.loading = options.loading || false;
  // TODO: 待优化
  options.errorTips = options.errorTips || true;
  if (options.loading) {
    toast = showLoadingToast({
      message: "加载中...",
      forbidClick: true,
      duration: 0,
    });
  }
  return {
    url,
    options: { ...options, interceptors: true },
  };
};

const responseInterceptor: FetchResponseInterceptor = async (
  response,
  options
) => {
  if (response.ok) {
    options.loading && toast.close();
    const { code, msg } = await response.clone().json();
    if (parseInt(code) !== 0) {
      response.__code = parseInt(code);
      response.__msg = msg;
      response.__prompt = response.__msg;
      return Promise.reject({ response });
    } else {
      return response;
    }
  } else {
    response.__code = response.status;
    response.__msg = FETCH_CODE_ENUM[response.status];
    response.__prompt = response.__msg;
    return Promise.reject({ response });
  }
};

const errorHandler = (error: FetchResponseError) => {
  const { response, request } = error;
  request.options?.loading && toast.close();

  if (request.options.errorTips) {
    let tipMsg: string;

    if (response && response.__code) {
      tipMsg = `<p>错误信息：${response.__prompt}</p><p>错误码：${response.__code}</p>`;
    } else {
      tipMsg = "您的网络异常，无法连接到服务器";
    }

    showDialog({
      title: "提示",
      allowHtml: true,
      theme: "round-button",
      message: tipMsg,
    });
  }

  return Promise.reject(error);
};

const request = extend({
  prefix: import.meta.env.VITE_APP_BASE_API,
  timeout: FETCH_TIMEOUT,
  errorHandler,
});

request.interceptors.request.use(requestInterceptor);

request.interceptors.response.use(responseInterceptor);

export default request;
