import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const SERVER_URL = 'http://121.125.79.124:4000';

type Config = AxiosRequestConfig & { [key: string]: any };
type Response = AxiosResponse & { [key: string]: any };

interface Request {
  get: (url: string, config?: Config) => Promise<Response>;
  post: (url: string, data?: any, config?: Config) => Promise<Response>;
  put: (url: string, data?: any, config?: Config) => Promise<Response>;
  delete: (url: string, data?: any, config?: Config) => Promise<Response>;
  patch: (url: string, data?: any, config?: Config) => Promise<Response>;
  isSuccess: (response: Response) => boolean;
}

const request: Request = {
  get: (url, config) => {
    return axios.get(`${SERVER_URL}${url}`, config);
  },
  post: (url, config, data = {}) => {
    return axios.post(`${SERVER_URL}${url}`, data, { ...config });
  },
  put: (url, config, data = {}) => {
    return axios.put(`${SERVER_URL}${url}`, data, config);
  },
  delete: (url, config, data = {}) => {
    return axios.delete(`${SERVER_URL}${url}`, { ...config, data });
  },
  patch: (url, config, data = {}) => {
    return axios.patch(`${SERVER_URL}${url}`, data, config);
  },
  isSuccess: (response) => {
    return response.status >= 200 && response.status < 300;
  },
};

export default request;
export const SUCCESS = 'success';
export const FAIL = 'fail';
