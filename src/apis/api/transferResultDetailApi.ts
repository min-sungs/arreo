import { instance } from './clientAxios';

type  SearchData = {
  prepayPayNo: string;
  pageSize: number;
  pageNumber: number;
  keywordValue:  string | null;
  keyword: string | null;
  rsltVal: string | null;
}

export const getDataTransferDetailList = async (searchAllValue:SearchData) => {
  try {
    const response = await instance.get('/resultDetail', {
      params:searchAllValue
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) return error.message;
    return '';
  }
};
