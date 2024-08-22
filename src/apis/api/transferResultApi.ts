// eslint-disable-next-line import/no-cycle
import { IUseMutationTRCExcelDown } from '../../components/hooks/mutations/useMutationTRCExcelDown';
import { instance } from './clientAxios';
import FileSaver from 'file-saver';

/**
 *  전송결과 조회 API
 *
 * @param currentPage : 클릭된 페이지네이션 번호
 * @param pageSize : 한 페이지에 표출될 데이터양
 * @param dates : 검색 조건 - 날짜
 * @param selectedValue : 검색 조건 - 구분 선택 ( s: 문자전송, e: 1000자 전송, f: 포토전송 )
 * @returns : 전송결과 데이터 리턴
 */
type SearchData = {
  pageSize: number;
  pageNumber: number;
  searchStartDate: string | null;
  searchEndDate: string | null;
  selectedValue: string | null;
};
export const getDateTransferListAll = async (
  searchAllValue:SearchData
) => {
  try {
    if (searchAllValue.searchStartDate === undefined && searchAllValue.searchEndDate === undefined) return null;
    const response = await instance.get('/resultList', {
      params: {
        pageSize: searchAllValue.pageSize,
        pageNumber: searchAllValue.pageNumber,
        searchStartDate: searchAllValue.searchStartDate,
        searchEndDate: searchAllValue.searchEndDate,
        selectedValue: searchAllValue.selectedValue,
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

/**
 * 장기보관함 API : POST
 */
export const saveMsgStorage = async (prepayPayNo: string, callback: string) => {
  try {
    if (prepayPayNo === undefined) return null;
    const data = [{
      prepayPayNo,
      callback,
    }]
    const response = await instance.post(`/saveMsgStorage`,data);
    return response.data;
  } catch (error) {
    return '';
  }
};

/**
 * 엑셀 다운 API : GET
 */

export const trcExcelDownload = async ({ searchDates, searchSelectValue }: IUseMutationTRCExcelDown) => {
  try {
    const response = await instance.get('/resultExcelDownload', {
      responseType: 'blob',
      params: {
        selectedValue: searchSelectValue,
        searchStartDate: searchDates !== '' ? searchDates[0] : null,
        searchEndDate: searchDates !== '' ? searchDates[1] : null,
      },
    });

    const contentDisposition = response.headers['content-disposition'];
    const filenameMatch = /filename="(.*)"/.exec(contentDisposition);
    const filename = filenameMatch ? filenameMatch[1] : '전송결과.xlsx';

    // 파일 다운로드
    FileSaver.saveAs(response.data, filename);
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * 전송결과 삭제 API: POST
 */
interface IDeleteTransferMsg{
  prepayPayNo: string
  callback: string
}
export const deleteTransferMsg = async ({prepayPayNo,callback}:IDeleteTransferMsg) => {
  const params = [{prepayPayNo, callback}];
  try {
    // const response = await instance.post(`/deleteResult?prepayPayNo=${prepayPayNo}`);
    const response = await instance.post(`/deleteResult`, params);
    return response.data;
  } catch (error) {
    return '';
  }
};
