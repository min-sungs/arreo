import { client, instance, instanceFile } from './clientAxios';

export const api = {
  get: <T>(url: string, params?: object) =>
    instance.get<T>(url, {
      ...params,
    }),
  post: <T>(url: string, data: any) => instance.post<T>(url, data),
  postNoCert: <T>(url: string, data: any) => client.post<T>(url, data),
  // 파일 처리시
  postFile: <T>(url: string, data: any) => {
    const formData = new FormData();
    const json = JSON.stringify(data.dto);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('file', data?.file?.file);
    formData.append('dto', blob);
    return instanceFile.post<T>(url, formData);
  },
  // postFile: <T>(url: string, data: any) => instanceFile.post<T>(url, data),
  patch: <T>(url: string, data: any) => instance.patch<T>(url, data),
  delete: <T>(url: string, data?: any) => instance.delete<T>(url, data),
};
