export interface IGetDataTransferDetailListData {
  userKey: string;
  subject: string;
  sndMsg: string; // 보낸 메시지
  sndDttm: string; // 보낸 날짜
  callback: string; // 회신번호
  totalCount: number; // 전체 건수
  successCount: number; // 성공 건수
  sendingCount: number; // 전송중 건수
  usedCash: number; // 사용된 금액
  usedPoint: number; // 사용된 포인트
  imageData: string; // 이미지 데이터
  phnList: {
    content: [
      {
        userKey: string;
        cmpMsgId: string;
        callback: string;
        msgGroupId: string;
        sndDttm: string;
        rsltVal: number; // 전송상태
        rcvPhnId: string; // 받는사람 번호
        regRcvDttm: string; // 받은 시간
        buddyName: string; //  받는 사람 이름
      },
    ];
    pageable: {
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      pageNumber: number;
      pageSize: number;
      unpaged: boolean;
      paged: boolean;
    };
    totalElements: number;
    last: boolean;
    totalPages: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };
  failCnt?: number; // api 통신으로 가져오는 건수 종류는 전체, 성공, 전송중 뿐이기 때문에 직접 만들어줘야함
}
export interface QueryResult {
  data: IGetDataTransferDetailListData | undefined; // Replace with the actual data type
  isLoading: boolean;
  isError: boolean;
}
