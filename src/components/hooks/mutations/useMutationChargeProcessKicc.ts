import { instance } from '../../../apis/api/clientAxios';

export const useMutationChargeProcessKicc = async (data: any) => {
  try {
    const response = await instance.post('/charge/process-kicc', data);
    return response.data;
  } catch (error) {
    return '';
  }
};
