/* 공지사항 */
import {ChangeEvent, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {IQAListParams} from "../../../../../apis/api/customer/Qa.types.ts";
import {QaApis} from "../../../../../apis/api/customer/QaApis.ts";

export const useQA = () => {
  /* 검색 조건 ITEMS */
  const keywordValueItems = [{label: "제목", value: "title"}, {label: "내용", value: "content"}];
  /* 카테고리 ITEMS */
  const categoryItems
    = [{label: "전체", value: null}, {label: "주소록", value: "5"}, {label: "메세지", value: "3"}, {label: "015", value: "16"}, {label: "충전소", value: "14"}, {label: "내정보", value: "2"}]

  /* 페이지 네이션 STATE */
  const [totalElements, setTotalElements] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(1);
  /* 검색 조건 STATE */
  const [keywordValue, setKeywordValue] = useState<{ label: string, value: string }>({label: "제목", value: "title"});
  /* 분류 STATE */
  const [categoryState, setCategoryState] = useState<{ label: string, value: string | null }>({label: "전체", value: null});
  /* 검색 입력한 내용 STATE */
  const [keyword, setKeyword] = useState<string>("");
  /* API STATE */
  const [qaListParams, setQaListParams] =
    useState<IQAListParams>({pageNumber: 0, pageSize: 10, keyword: "", keywordValue: "title", category: null});

  /**
   * API Area
   **/

  /* 자주 묻는 질문 리스트 조회 API */
  const {data: qaListData} = useQuery(['/qa/faq', qaListParams], () => QaApis(qaListParams))

  /**
   * Hooks Area
   **/

  /* 공지사항 리스트 조회시 리스트 전체 개수 setState */
  useEffect(() => {
    if (qaListData?.totalElements) {
      setTotalElements(qaListData?.totalElements);
    } else if (qaListData?.totalElements === 0) {
      setTotalElements(1);
    }
  }, [qaListData?.totalElements]);

  /* 페이지네이션 핸들러 Hook */
  const handlePagination = (pageNumber: number) => {
    setQaListParams((prevState: IQAListParams) => {
      return {...prevState, pageNumber: pageNumber - 1}
    })
  }
  /* 페이지네이션 초기화 Hook */
  const paginationReset = () => {
    setActivePage(1);
    setStartPage(1);
  }
  /* 검색 핸들러 Hook*/
  const handleSearch = (e: any) => {
    e.preventDefault();
    paginationReset();
    setQaListParams((prevState: IQAListParams) => {
      const updatedState = {...prevState};
      updatedState.keyword = keyword;
      updatedState.keywordValue = keywordValue.value;
      updatedState.category = categoryState.value;
      updatedState.pageNumber = 0;
      return updatedState;
    });
  }
  /* 검색 내용 핸들러 Hook*/
  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  }
  /* 검색 조건 핸들러 Hook */
  const handleKeywordValue = (value: { label: string, value: string }) => {
    setKeywordValue(value);
  }
  /* 분류 핸들러 Hook */
  const handleCategoryValue = (value: { label: string, value: string | null }) => {
    setCategoryState(value);
    paginationReset();
    setQaListParams((prevState: IQAListParams) => {
      const updatedState = {...prevState};
      updatedState.category = value.value
      updatedState.pageNumber = 0
      return updatedState;
    })
  }

  return {
    activePage, setActivePage,
    startPage, setStartPage,
    handlePagination,
    qaListData,
    keywordValue,
    keywordValueItems,
    handleKeywordValue,
    categoryItems,
    categoryState,
    handleCategoryValue,
    handleKeyword,
    handleSearch,
    totalElements
  }
};