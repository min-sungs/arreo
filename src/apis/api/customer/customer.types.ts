/** 
 * @title : 공지사항/이벤트 
 * 
 * @params {
 *  pageNumber : 페이지 번호
 *  pageSize : 페이지 크기
 *  type : 공지사항/이벤트 구분	: 공지사항: "notice", 이벤트: "event"
 *  keyword : 검색 입력한 내용
 *  keywordValue : 검색조건	제목: "title", 내용: "content"
 *  category : 0 = 미분류 // 1 = 전체공지 // 2 = 문자전송 // 7 = 충전소 // 20 = 015
 * }
 * */

/* 공지사항 리스트 조회 Params */
export interface ICustomerListParams{
  pageNumber: number // Y
  pageSize: number // Y
  type: string // Y
  keyword: string // N
  keywordValue: string // N
  category:string | null // N
}

/* 공지사항 리스트 조회 Response */
interface ICustomerListContent {
  artId: number;
  category: string;
  title: string;
  content: string;
  regDttm: string;
  newYn: string;
  mainYn: string;
}

interface ICustomerListSort {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  ascending: boolean;
  descending: boolean;
}

interface ICustomerListPageable {
  sort: ICustomerListSort[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ICustomerListResponse {
  content: ICustomerListContent[];
  pageable: ICustomerListPageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: ICustomerListSort[];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}