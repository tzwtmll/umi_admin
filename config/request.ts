/**
 * @description 请求相关配置
 */
import type { RequestConfig, AxiosResponse, RequestError } from "@umijs/max";
export const request: RequestConfig = {
  baseURL: "/proxy",
  //   请求超时时间
  timeout: 20000,
  //   请求头
  headers: {},
  //   请求拦截器
  requestInterceptors: [
    (config: AxiosResponse) => {
      return config;
    },
  ],
  //   响应拦截器
  responseInterceptors: [
    (response: AxiosResponse) => {
      return response;
    },
  ],
  errorConfig: {
    errorHandler: (error: RequestError) => {
      console.log(error);
    },
  },
};
