import { QueryFunction } from '@tanstack/query-core';
import { instance } from './clientAxios';

interface QueryKeyData {
  prepayPayNo: string;
  pageNumber: number;
  pageSize: number;
  keyword: string;
  keywordValue: string;
  callback:string;
}

type QueryKey = [string, QueryKeyData];

export const getReserveSendDetail = async (searchAllValue:any) => {
  try {
    const response = await instance.get('/reserveSendDetail', {
      params: {
        prepayPayNo: searchAllValue.prepayPayNo,
        pageNumber: searchAllValue.currentPage,
        pageSize: searchAllValue.pageSize,
        keyword: searchAllValue.keyword,
        keywordValue: searchAllValue.keywordValue,
        callback: searchAllValue.callback
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

interface IUpdateStcMsgApi {
  sndMsg: string;
  sndDttm: string;
  prepayPayNo: string;
  callback: string;
}
export const updateStcMsgApi = async ({ sndMsg, sndDttm, prepayPayNo , callback}: IUpdateStcMsgApi) => {
  // const response = await instance.post(`/updateReserveXms?prepayPayNo=${prepayPayNo}`, {
  const response = await instance.post(`/updateReserveXms`,{
    sndMsg, sndDttm, prepayPayNo , callback
  });
  return response.data;
};
