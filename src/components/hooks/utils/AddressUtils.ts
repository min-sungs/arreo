/** 주소록 validation
 * 사용하는 곳에서 해당 validate함수 import받아서
 * 검증할 벨류만 보내주면 됩니다.
 * ex) validatePhoneNumber(keyCommNo);
 * return 값은 boolean 값 입니다.
 * */

// 숫자, 하이픈만 입력 가능
export const validatePhoneNumber = (
  value: string,
  inputRef?: React.RefObject<HTMLInputElement> | undefined | null,
): boolean => {
  const trimmedValue = value?.trim() || '';
  return /^(01[0156789]|02|0[3-9][0-9])[- ]?[0-9]{3,4}[- ]?[0-9]{4}$/.test(trimmedValue);
};

// 이메일 형식 ( @ . )
export const validateEmail = (value: string, inputRef?: React.RefObject<HTMLInputElement>): boolean => {
  if (value === null || value === '') return true;
  const trimmedValue = value?.trim() || '';
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedValue);
};

// 015로 시작하며 숫자 및 하이픈만 입력 가능
export const validateNumber015 = (value: string, inputRef?: React.RefObject<HTMLInputElement>): boolean => {
  if (value === null || value === '') return true;
  const trimmedValue = value?.trim() || '';
  return /^015[- ]?\d{4}[- ]?\d{4}$/.test(trimmedValue);
};

// 문자열, 하이픈만 입력 가능
export const validateStringHyphen = (value: string, inputRef?: React.RefObject<HTMLInputElement>): boolean => {
  const trimmedValue = value?.trim() || '';
  return /^[\d -]+$/.test(trimmedValue);
};

// 빈칸이면 안되는 필수값
export const validateRequired = (value: string, inputRef?: React.RefObject<HTMLInputElement>): boolean => {
  const trimmedValue = value?.trim() || '';
  return Boolean(trimmedValue);
};

export const validateAddressRow = (row: any) => {
  // 필수값 ( 이름, 번호, 그룹 )
  if (!validateRequired(row.buddyNm) || !validateRequired(row.groupNm) || !validateRequired(row.keyCommNo)) {
    return false;
  }

  if (!validateEmail(row.emailId) || !validateNumber015(row.number015) || !validatePhoneNumber(row.keyCommNo)) {
    return false;
  }

  return true;
};
