import { instance } from './clientAxios';

/**
 * 예약전송 리스트 조회 API GET 방식
 */
interface IGetReserveSendList {
  pageNumber: number;
  pageSize: number;
  keyword?: string | null;
  searchCondition?: string;
}
export const getReserveSendList = async (searchAllValue:any) => {
  try {
    const response = await instance.get('/reserveSendList', {
      params: {
        pageNumber: searchAllValue.currentPage,
        pageSize: searchAllValue.pageSize,
        searchCondition: searchAllValue.searchCondition,
        keyword: searchAllValue.keyword,
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

/**
 * 예약전송 예약 취소 API POST 방식
 */
interface ICancelReserveXms {
  deleteRequests: {prepayPayNo:string, callback: string}[];
}
export const cancelReserveXms = async ({ deleteRequests }: ICancelReserveXms) => {
  try {
    const response = await instance.post(`/cancelReserveXms`, deleteRequests);
    return response.data;
  } catch (error) {
    return '';
  }
};
