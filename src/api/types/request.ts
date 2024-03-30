import type { RequestOptionsInit, ResponseError } from 'umi-request';

export interface FecthRequestOptions extends RequestOptionsInit {
  loading?: boolean;
  errorTips?: boolean;
  [key: string]: any;
}

export interface FetchResponse extends Response {
  __code?: string;
  __msg?: string;
  __prompt?: string;
}

export type FetchRequestInterceptor = (
  url: string,
  options: FecthRequestOptions
) => {
  url?: string;
  options?: FecthRequestOptions;
};

export type FetchResponseInterceptor = (
  response: FetchResponse,
  options: FecthRequestOptions
) => Response | Promise<Response>;

export interface FetchResponseError extends ResponseError {
  response: FetchResponse;
}
