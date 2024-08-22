export interface BuddyData {
  buddyNm: string; // 이름
  groupNm: string; // 그룹이름
  keyCommNo: string; // 휴대폰번호
  groupSeqNo: number; // 그룹고유번호
  buddySeqNo: number; // 고유번호
  siteId: string; // 서비스이용 사이트 이름(아레오, 네티앙)
  usrId: string; // ?
  usrKey: string; // ?
  regDt: string; // 등록일
  emailId: string; // 이메일
  birthday: string | null; // 생일
  coNm: string | null; // 회사이름
  genderFlag: string | null; // 성별
  homeAddr: string | null; // 집주소
  homeNumber: string; // 집전화
  homeZipCd: string; // 집우편번호
  coNumber: string; // 회사전화
  coZipCd: string; // 회사우편번호
  coAddr: string | null; // 회사주소
  faxNumber: string; // 팩스
  homepageUrl: string | null; // 홈페이지
  accountNo: string; // 계좌번호
  marriageDay: string | null; // 결혼기념일
  messenger: string | null; // 메신저
  coDept: string | null; // 부서
  coHandle: string | null; // 직함
  etcInfo: string | null; // 메모
  natCd: string | null; // 국가번호
  residentNo: string; // 주민번호
  updDt: string | null; // 수정일
  number015: string; // 015번호
}

export interface BinData {
  buddyNm: string;
  emailId: string;
  keyCommNo: string;
  coNm: string | null;
  buddySeqNo: number;
  groupNm: string;
  usrKey: string;
  usrId: string;
  groupSeqNo: number;
  siteId: string;
}

export interface DuplicationData {
  groupNm: string; // 그룹이름
  buddyNm: string; // 버디이름
  keyCommNo: string; // 버디전화번호
  regDt: string; // 등록일
  buddySeqNo: number; // 버디시퀀스
}
