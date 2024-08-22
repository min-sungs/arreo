import { instance } from '../../../apis/api/clientAxios';

export const useMutationChargeKicc = async (data: any) => {
  const response = await instance.post('/charge/kicc', data);
  return response;
};
