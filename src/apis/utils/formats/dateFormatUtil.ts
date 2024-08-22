/**
 * ex) 2023-10-02T01:23:37.316Z => 20231002
 */
export const formatDateYYYYMMDD = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 맞춘다
  const day = String(date.getDate()).padStart(2, '0'); // 날짜도 2자리로 맞춘다
  return `${year}${month}${day}`;
};

export const formatDateYYYYMMDDHHmmss = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 맞춘다
  const day = String(date.getDate()).padStart(2, '0'); // 날짜도 2자리로 맞춘다
  const hour = String(date.getHours()).padStart(2,'0');
  const min = String(date.getMinutes()).padStart(2,'0');
  const s = String(date.getSeconds()).padStart(2,'0');
  return `${year}${month}${day}${hour}${min}${s}`;
};

export const getDateYYYYMMDDHHmm = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 맞춘다
  const day = String(date.getDate()).padStart(2, '0'); // 날짜도 2자리로 맞춘다
  const hour = String(date.getHours()).padStart(2,'0');
  const min = String(date.getMinutes()).padStart(2,'0')
  return `${year}${month}${day}${hour}${min}`;
};

/**
 * Ant 날짜 라이브러리로 들어온 값 변환
 * ex) rangePickerDate => ['2023-10-02T02:07:19.762Z', '2023-10-28T02:07:19.762Z']
 */

export const formatDateRangePickerDate = (pickerDate: any) => {
  const dateArray = JSON.parse(JSON.stringify(pickerDate));
  return dateArray;
};

/**
 * ex ) 20230101 => 2023.01.01  // 202301010000 => 2023.01.01 00:00
 */
export const formatDateBase = (date: any): string => {
  const YYYY = date?.slice(0, 4);
  const MM = date?.slice(4, 6);
  const dd = date?.slice(6, 8);
  if (!YYYY) return '';
  if (date?.slice(8, 10)) {
    const HH = date?.slice(8, 10);
    const mm = date?.slice(10, 12);
    return `${YYYY}.${MM}.${dd} ${HH}:${mm}`;
  }
  return `${YYYY}.${MM}.${dd}`;
};

/**
 * ex ) 20240205120000 => 24-02-05
 */
export const formatDateDate = (date: any): string => {
  const YYYY = date?.slice(0, 4);
  const MM = date?.slice(4, 6);
  const dd = date?.slice(6, 8);
  if (!YYYY) return '';

  return `${YYYY}-${MM}-${dd}`;
};

/**
 * ex ) 20240205120000 => 24-02-05
 */
export const formatDateTime = (date: any): string => {
  const HH = date?.slice(8, 10);
  const mm = date?.slice(10, 12);
  const ss = date?.slice(12, 14);
  if (!HH) return '';

  return `${HH}:${mm}:${ss}`;
};

/**
 * ex ) 2023.01.01 => 20230101
 */

// export const formatDateTime = (inputDateTime: string) => {
//   // Replace all non-digit characters with an empty string
//   return inputDateTime.replace(/\D/g, '');
// };
