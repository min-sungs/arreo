import axios from 'axios';
import * as FileSaver from 'file-saver';

import { instance } from './clientAxios';

export const getDateMessageListAll = async (currentPage: number, pageSize: number) => {
  try {
    const response = await instance.get('/resultList', {
      params: {
        pageSize,
        pageNumber: currentPage,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOptionMessageResult = async (selectMessageCate: any) => {
  try {
    const response = await instance.get('/selectResult', {
      params: {
        value: `${selectMessageCate}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDateMessageList = async ({ newStartValue, newEndValue }: any) => {
  try {
    const response = await instance.get('/selectDateResult', {
      params: {
        pageNumber: 1,
        pageSize: 6,
        searchStartDate: newStartValue,
        searchEndDate: newEndValue,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

// 엑셀 다운로드
export const getMessageListExel = async () => {
  const auth = localStorage.getItem('authorizationToken');
  try {
    const response = await axios.get('http://localhost:8088/resultExcelDownload', {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${auth}`,
      },
      responseType: 'blob',
    });

    // 서버 응답 헤더에서 파일 이름 추출(버튼 클릭하면 다운되는거라 사실 구현할 필요 없음)
    const contentDisposition = response.headers['content-disposition'];
    const filenameMatch = /filename="(.*)"/.exec(contentDisposition);
    const filename = filenameMatch ? filenameMatch[1] : '파일.xlsx';

    // 파일 다운로드
    FileSaver.saveAs(response.data, filename);
    return response;
  } catch (error) {
    return error;
  }
};

// // 예약 전송 리스트 전체
// export const getReserveListAll = async () => {
//   try {
//     const response = await instance.get('/reserveSendList');
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// 예약 전송 전체 및 리스트 검색
export const getReserveListSearch = async ({ search, contentOrPhn, currentPage, pageNum }: any) => {
  try {
    const response = await instance.get('/reserveSendList', {
      params: {
        pageNumber: currentPage,
        pageSize: pageNum,
        keyword: search,
        searchCondition: contentOrPhn,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
