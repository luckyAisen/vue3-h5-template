import request from '@/utils/request';

import type { FecthRequestOptions } from '../types';

export const normalRequest = (options: FecthRequestOptions) => {
  return request('https://httpbin.org/get', {
    prefix: '',
    method: 'get',
    loading: false,
    errorTips: true,
    ...options
  });
};

export const notFoundRequest = (options: FecthRequestOptions) => {
  return request('https://httpbin.org/status/404', {
    prefix: '',
    method: 'get',
    loading: false,
    errorTips: true,
    ...options
  });
};

export const errorRequest = (options: FecthRequestOptions) => {
  return request('https://httpbin.org/status/500', {
    prefix: '',
    method: 'get',
    loading: true,
    errorTips: true,
    ...options
  });
};
