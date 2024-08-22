interface PhoneNumber {
  buddyNm: null | string;
  groupNm: null | string;
  phoneNumber: string;
}

interface Pageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface SendList {
  content: PhoneNumber[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface QueryData {
  prepayPayNo: string;
  userKey: string;
  subject: string;
  sndMsg: string;
  msgGb: string;
  sndDttm: string;
  callback: string;
  totalCount: number;
  usedMoney: number;
  imageData: string;
  sendList: SendList;
}
interface QueryResult {
  data: QueryData | undefined; // Replace with the actual data type
  isLoading: boolean;
  isError: boolean;
}

export default QueryResult;
