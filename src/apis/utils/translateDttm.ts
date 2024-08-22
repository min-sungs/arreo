// ResultMessage
export function formatDate(inputDateString: string) {
  // 입력 형식 검증
  if (inputDateString.length !== 12) {
    console.log('잘못된 날짜 형식');
    return inputDateString;
  }

  const year = `20${inputDateString.slice(0, 2)}`; // 먼저 "20"을 추가하여 완전한 년도를 얻습니다.
  const month = inputDateString.slice(2, 4);
  const day = inputDateString.slice(4, 6);
  const hour = inputDateString.slice(6, 8);
  const minute = inputDateString.slice(8, 10);
  const second = inputDateString.slice(10, 12);

  return `${year} ${month}/${day} ${hour}:${minute}:${second}`;
}

// DateMessageResult
export const formatDateTime = (date: any): string => {
  const yy = date.getFullYear().toString().substr(-2);
  const mm = `0${date.getMonth() + 1}`.slice(-2);
  const dd = `0${date.getDate()}`.slice(-2);
  const hh = `0${date.getHours()}`.slice(-2);
  const min = `0${date.getMinutes()}`.slice(-2);
  const sec = `0${date.getSeconds()}`.slice(-2);

  return yy + mm + dd + hh + min + sec;
};
