// // ? 010-1234-5678 등의 전화번호를 01012345678로 변환
// const fixPhoneNumber = (phoneNumber: string): string => {
//   return phoneNumber.replaceAll("[^0-9]", "");
// }


// ? 번호 정규식
import {getDateYYYYMMDDHHmm} from "./formats/dateFormatUtil.ts";

const isPhoneNumber = (phoneNumber: string): boolean => {
  return phoneNumber.length === 11 && phoneNumber.substring(0, 3) === '010';
}


const isNumbers = (phoneNumber: string): boolean => {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(phoneNumber);
}

// ? 날짜
const checkDateTimeFormat = (dateTime: string) => {
  const nowDate = getDateYYYYMMDDHHmm();
  return !(dateTime.length !== 12 || parseInt(dateTime, 10) < parseInt(nowDate, 10));
}


export const sendMessageValidation = (excelMessageDto: any) => {
  for (let i = 0; i < excelMessageDto.length; i++) {

    if (!excelMessageDto[i].receiver || !excelMessageDto[i].message) {
      return `${i + 1}번째 줄에 값이 없습니다.`
    }

    if (!isPhoneNumber(excelMessageDto[i].receiver)) {
      return `${i + 1}번째 줄 휴대폰 번호가 양식에 맞지 않습니다.`
    }

    // ? 만약 예약시간이 없을 경우 현재시간을 넣어줘서 즉시전송하게끔
    if (!excelMessageDto[i].sendDateTime) {
      excelMessageDto[i].sendDateTime = getDateYYYYMMDDHHmm();
    } else if (!checkDateTimeFormat(excelMessageDto[i].sendDateTime)) {
      return `${i + 1}번째 줄 예약발송일시가 올바르지 않습니다.`
    }


  }
  return true;
}