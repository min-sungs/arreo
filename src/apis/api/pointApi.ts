import FileSaver from 'file-saver';
import {instance} from './clientAxios';
// eslint-disable-next-line import/no-cycle
import {pointExcelDownload} from '../../components/hooks/customs/charge/usePointExcel';
import {useQueryClient} from "@tanstack/react-query";

export const getPointApi = async () => {
  try {
    const response = await instance.get('/userPoint');
    if (response.status === 200) {
      return response.data;
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPointHistoryAllApi = async (currentPage: any): Promise<any> => {
  try {
    const response = await instance.get(`/pointHistory?pageNumber=${currentPage}&pageSize=${10}`);
    if (response.status === 200) {
      return response.data;
    }
    if (response.data === undefined) {
      return undefined;
    }
    return response.status;
  } catch (error) {
    return error;
  }
};

// 사용내역 조회 API

export const getPointResult = async (
  currentPage: number,
  pageSize: number,
  dates?: string[] | string,
  selectedValue?: string | null,
) => {
  try {
    if (dates === undefined) return null;
    const response = await instance.get('/pointHistory', {
      params: {
        pageSize,
        pageNumber: currentPage,
        searchStartDate: dates !== '' ? dates[0] : null,
        searchEndDate: dates !== '' ? dates[1] : null,
        selectedValue: selectedValue === 'all' || selectedValue === 'null' ? null : selectedValue,
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

// export const getPayResult = async (currentPage: any): Promise<any> => {
//   try {
//     const response = await instance.get(`/payResult?pageNumber=${currentPage ?? 0}&pageSize=${10}`);
//     if (response.status === 200) {
//       return response.data;
//     }
//     return undefined;
//   } catch (error) {
//     return error;
//   }
// };

export const getPayResult = async (
  currentPage: number,
  pageSize: number,
  selectedValue?: string | null,
  dates?: string[] | string,
) => {
  try {
    if (dates === undefined) return null;
    const response = await instance.get('/payResult', {
      params: {
        pageSize,
        pageNumber: currentPage,
        selectedValue: selectedValue === 'all' || selectedValue === 'null' ? null : selectedValue,
        searchStartDate: dates !== '' ? dates[0] : null,
        searchEndDate: dates !== '' ? dates[1] : null,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const getTaxInvoiceList = async (currentPage: any): Promise<any> => {
  try {
    const response = await instance.get(`/getTaxInvoiceList?pageNumber=${currentPage ?? 0}&pageSize=${10}`);
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (error) {
    return error;
  }
};

export const getTaxBillList = async (currentPage: any): Promise<any> => {
  try {
    const response = await instance.get(`/getTaxBillList?pageNumber=${currentPage ?? 0}&pageSize=${10}`);
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (error) {
    return error;
  }
};

export const getMbrCorpList = async () => {
  try {
    const response = await instance.get('/getMbrCorpList');
    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (error) {
    return error;
  }
};

export const payResultPrintAll = async (dates?: string[] | string) => {
  try {
    if (dates === undefined) return null;
    const response = await instance.get('/payResultPrint', {
      params: {
        searchStartDate: dates !== '' ? dates[0] : null,
        searchEndDate: dates !== '' ? dates[1] : null,
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

export const cshPubDetail = async (serialnum: any) => {
  try {
    if (serialnum === undefined) return null;
    const response = await instance.get('/cshPubDetail', {
      params: {
        serialnum: serialnum !== '' ? serialnum : null,
      },
    });
    return response.data;
  } catch (error) {
    return '';
  }
};

export const pointHistoryExcelDownload = async ({searchDates, searchSelectValue}: pointExcelDownload) => {
  try {
    const response = await instance.get('/pointHistoryExcelDownload', {
      responseType: 'blob',
      params: {
        searchStartDate: searchDates !== '' ? searchDates[0] : null,
        searchEndDate: searchDates !== '' ? searchDates[1] : null,
        selectedValue: searchSelectValue,
      },
    });

    const contentDisposition = response.headers['content-disposition'];
    const filenameMatch = /filename="(.*)"/.exec(contentDisposition);
    const filename = filenameMatch ? filenameMatch[1] : '사용내역.xlsx';

    // 파일 다운로드
    FileSaver.saveAs(response.data, filename);
    return response;
  } catch (error) {
    return error;
  }
};

export const getPayList = async () => {
  try {
    const response = await instance.get('/getPayList');
    if (response.status === 200) {
      return response.data;
    }
    if (response.data === undefined) {
      return undefined;
    }
    return response.status;
  } catch (error) {
    return error;
  }
};

export const ArsJsonData = async ({say015Number}:{say015Number:string}) => {
  const response = await instance.get(`/vms/json/${say015Number}.json`); // '/json/filename'에 실제 백엔드 엔드포인트를 넣어주세요.
  return response.data;
};
