export const formatPhoneNumberTest = (number: string | undefined) => {
  // 정규 표현식을 사용하여 숫자만 추출
  //   const cleanedNumber = number.replace(/\D/g, '');

  // 11자리인 경우 포맷 적용
  if (number?.length === 11) {
    const formattedNumber = `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7)}`;
    return formattedNumber;
    // eslint-disable-next-line no-else-return
  } else if (number?.length === 10) {
    const formattedNumber = `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
    return formattedNumber;
  } else {
    return '유효한 전화번호가 아닙니다.';
  }
};


export const formatPhoneNumber = (phoneNumber: string | undefined) => {
  if(!phoneNumber) return ""
  const cleaned = phoneNumber.replace(/\D/g, '');
  let match;

  if (cleaned.length === 8) {
    match = cleaned.match(/^(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}`;
    }
  } else if (cleaned.length === 9 && cleaned.startsWith('2')) {
    match = cleaned.match(/^(\d{2})(\d{3,4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  } else {
    match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  }

  return "";
}

// 모든 하이픈을 제거하고 숫자만 남김
export const removeHyphens = (inputString: string) => {
  return inputString.replace(/-/g, '');
};
