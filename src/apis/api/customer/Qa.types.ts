export interface IQAListParams {
  pageNumber: number	// Y	페이지 번호
  pageSize: number	// Y	페이지 크기
  keyword: string //	N	검색 입력 내용
  keywordValue: string	// N	검색 조건
  category: string | null // N	분류(분류상세 참고)
}

interface IQAListArticle {
  artId: number;
  category: string;
  title: string;
  content: string;
}

interface IQAListPageable {
  sort: {
    direction: string;
    property: string;
    ignoreCase: boolean;
    nullHandling: string;
    ascending: boolean;
    descending: boolean;
  }[];
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export interface IQAListApiResponse {
  content: IQAListArticle[];
  pageable: IQAListPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    direction: string;
    property: string;
    ignoreCase: boolean;
    nullHandling: string;
    ascending: boolean;
    descending: boolean;
  }[];
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}