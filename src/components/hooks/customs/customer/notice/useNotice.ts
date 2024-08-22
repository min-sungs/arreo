/* 공지사항 */
import {ChangeEvent, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {ICustomerListParams} from "../../../../../apis/api/customer/customer.types.ts";
import {customerListApi} from "../../../../../apis/api/customer/customerApis.ts";
import {IUseNotice} from "./notice.types.ts";

export const useNotice = (props:IUseNotice) => {
  /* 검색 조건 ITEMS */
  const keywordValueItems = [{label: "제목", value: "title"}, {label: "내용", value: "content"}];
  /* 카테고리 ITEMS */
  const categoryItems
    = [{label: "전체", value: null}, {label: "미분류", value: "0"}, {label: "전체공지", value: "1"}, {label: "문자전송", value: "2"}, {label: "충전소", value: "7"}, {label: "015", value: "20"}]

  /* 페이지 네이션 STATE */
  const [totalElements, setTotalElements] = useState<number>(100);
  const [activePage, setActivePage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(1);
  /* 검색 조건 STATE */
  const [keywordValue, setKeywordValue] = useState<{ label: string, value: string }>({label: "제목", value: "title"});
  /* 분류 STATE */
  const [categoryState, setCategoryState] = useState<{ label: string, value: string | null }>({label: "전체", value: null});
  /* 검색 입력한 내용 STATE */
  const [keyword, setKeyword] = useState<string>("");
  /* API STATE */
  const [customerListParams, setCustomerListParams] =
    useState<ICustomerListParams>({pageNumber: 0, pageSize: 10, type: props.type, keyword: "", keywordValue: "title", category: null});

  /**
   * API Area
   **/

  /* 공지사항 리스트 조회 API */
  const {data: customerListData} = useQuery(['/customer/list', customerListParams], () => customerListApi(customerListParams))

  /**
   * Hooks Area
   **/

  /* 공지사항 리스트 조회시 리스트 전체 개수 setState */
  useEffect(() => {
    if (customerListData?.totalElements) {
      setTotalElements(customerListData?.totalElements);
    }else if (customerListData?.totalElements === 0){
      setTotalElements(1);
    }
  }, [customerListData?.totalElements]);

  /* 페이지네이션 핸들러 Hook */
  const handlePagination = (pageNumber: number) => {
    setCustomerListParams((prevState: ICustomerListParams) => {
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
    setCustomerListParams((prevState: ICustomerListParams) => {
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
    setCustomerListParams((prevState: ICustomerListParams) => {
      const updatedState = {...prevState};
      updatedState.category = value.value
      updatedState.pageNumber = 0
      return updatedState;
    })
    paginationReset();
  }

  return {
    activePage, setActivePage,
    startPage, setStartPage,
    handlePagination,
    customerListData,
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