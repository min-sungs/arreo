/**
 * 전송/예약 관리 -> 메시지 장기보관함 API
 */

import FileSaver from 'file-saver';
import { instance } from './clientAxios';
// eslint-disable-next-line import/no-cycle
import { IUseMutationLTSExcelDown } from '../../components/hooks/mutations/useMutationLTSCExcelDown';

export const getLongTimeStorageList = async (
  searchAllValue:any
) => {
  try {
    const response = await instance.get('/resultStorage', {
      params: {
        pageSize: searchAllValue.pageSize,
        pageNumber: searchAllValue.currentPage,
        keywordValue: searchAllValue.searchKeywordValue === 'null' ? null : searchAllValue.searchKeywordValue,
        keyword: searchAllValue.searchKeyword === 'null' ? null : searchAllValue.searchKeyword,
        selectValue: searchAllValue.searchSelectValue === 'all' || searchAllValue.searchSelectValue === 'null' ? null : searchAllValue.searchSelectValue,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * 장기보함삭제 API: POST
 */
export const deleteMsgStorage = async ({msgGroupId}: { msgGroupId:string }) => {
  try {
    const response = await instance.post(`/deleteMsgStorage?msgGroupId=${msgGroupId}`);
    return response;
  } catch (error) {
    return '';
  }
};

/**
 * 엑셀 다운 API : GET
 */

export const ltsExcelDownload = async ({
  searchKeywordValue,
  searchSelectValue,
  searchKeyword,
}: IUseMutationLTSExcelDown) => {
  try {
    const response = await instance.get('/storageboxExcelDownload', {
      responseType: 'blob',
      params: {
        keywordValue: searchKeywordValue === 'null' ? null : searchKeywordValue,
        keyword: searchKeyword === 'null' ? null : searchKeyword,
        selectValue: searchSelectValue === 'all' || searchSelectValue === 'null' ? null : searchSelectValue,
      },
    });

    const contentDisposition = response.headers['content-disposition'];
    const filenameMatch = /filename="(.*)"/.exec(contentDisposition);
    const filename = filenameMatch ? filenameMatch[1] : '장기보관함.xlsx';

    // 파일 다운로드
    FileSaver.saveAs(response.data, filename);
    return response;
  } catch (error) {
    return error;
  }
};
