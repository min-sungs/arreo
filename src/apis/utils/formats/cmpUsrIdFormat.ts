interface ICmpUsrIdFormat {
  cmpUsrId: string;
}

/**
 * 메세지 구분 코드 => 한글화
 */
export const cmpUsrIdFormat = ({ cmpUsrId }: ICmpUsrIdFormat) => {
  if (cmpUsrId === undefined) return '';
  switch (cmpUsrId) {
    case '00000':
      return '문자전송';
    case 'MMS01':
      return '포토전송';
    case 'LMS01':
      return '1000자전송';
    default:
      return '문자전송';
  }
};
