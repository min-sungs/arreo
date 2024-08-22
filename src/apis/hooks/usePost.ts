import { api } from '../api/api';
import { useGenericMutation } from '../utils/reactQuery';

export const usePost = <T, S>(url: string, params?: object, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => api.post<S>(url, data), url, params, updater);
};

// 토큰 없이 인증
export const useNoTokenPost = <T, S>(url: string, params?: object, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => api.postNoCert<S>(url, data), url, params, updater);
};

export const useNoGenericPost = <T, S>(url: string, params?: object, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => api.postNoCert<S>(url, data), url, params, updater);
};

// 파일첨부 post
export const useFilePost = <T, S>(url: string, params?: object, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => api.postFile<S>(url, data), url, params, updater);
};
