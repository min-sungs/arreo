import { instance } from './clientAxios';

/**
 *
 * @param msgGroupId: 그룹아이디
 * @param pageNumber: 페이징네이션 현재 페이지
 * @param pageSize: 페이징네이션 한 페이지에 표출될 데이터 수
 *
 * @returns 메시지 장기보관함 상세페이지 데이터
 */
interface QueryKeyData {
  pageSize:number;
  msgGroupId: string;
  pageNumber: number;
  keywordValue: string | null;
  keyword: string | null;
  callback: string;
}


export const getStorageDetailApi = async (searchAllValue:QueryKeyData) => {
  const response = await instance.get('/storageDetail', {
    params: searchAllValue
    ,
  });
  return response.data;
};
