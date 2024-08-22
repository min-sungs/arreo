import { useQuery } from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';
import { getLongTimeStorageList } from '../../../../../apis/api/ltsContentApis';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { ResendAddressBookOff } from '../../../../../recoil/atoms/TrcMessageAtom';
import {longDetailParamsRecoil, resultDetailParamsRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";
import {throttle} from "lodash";
import {calScrollEvent} from "../../../../../apis/hooks/useScrollInfinity.ts";

interface MessageData {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
//
interface ApiResponse {
  data: MessageData[];
}


/**
 * 전송/예약 관리 => 메시지 장기보관함 페이지
 */
export const useLongTerm = () => {
  const listRef = useRef<any>(null);
  const pageSize: number = 10;
  const [totalPage, setTotalPage] = useState<number>(10);
  const [tableData, setTableData] = useState<any>([{}]);
  const [currentPage,] = useState(0);
  // 검색 내용 STATE
  const [searchInputState, setSearchInputState] = useState<string>("");
  // 검색 메시지 종류 선택 STATE
  const [searchSelectMsgState, setSearchSelectMsgState] = useState<{value:string | null, label:string}>({value:null, label: "전체조회"});
  // 검색 조건 종류 선택 STATE
  const [searchSelectTypeState,setSearchSelectTypeState] = useState<{value:string, label:string}>({value:"number", label: "연락처"});

  const [searchAllValue, setSearchAllValue] = useState<any>(
    {pageSize, currentPage, searchKeyword: null, searchSelectValue: null, searchKeywordValue: null});
  const [longDetailParamsState,setLongDetailParamsState] = useRecoilState(longDetailParamsRecoil);


  // 검색 SELECT 값 변경
  const handleSearchSelectMsg = (value: { label: string, value: string }) => {
    setSearchSelectMsgState(value);
  }
  const handleSearchSelectType = (value: { label: string, value: string }) => {
    setSearchSelectTypeState(value);
  }
  // 검색 INPUT 값 변경
  const handleSearchInput = (value: string) => {
    setSearchInputState(value);
  }
  // 검색
  const onClickSearch = (e: any) => {
    if (e.type === "keydown" && e.code !== "Enter") return;
    const searchData = {
      pageSize, currentPage: 0, searchKeyword: searchInputState, searchSelectValue: searchSelectMsgState.value, searchKeywordValue: searchSelectTypeState.value
    }
    setSearchAllValue(searchData);
  }

  // 리스트 조회 API
  const queryKey = [
    'getLongTimeStorageList',
    searchAllValue
  ];

  const { data, isLoading, isError } = useQuery(queryKey, () =>
    getLongTimeStorageList(searchAllValue),
  );

  useEffect(() => {
    if (!isLoading && !isError && data ) {
      if (searchAllValue.currentPage !== 0) {
        setTableData((prev: any) => [...prev, ...data.content]);
      } else {
        setLongDetailParamsState({msgGroupId: data?.content[0]?.msgGroupId ?? "", callback: data?.content[0]?.callback ?? ""})
        setTableData(data?.content);
      }
      setTotalPage(data?.totalPages);
    }
  }, [data, isLoading, isError]);

  // 선택 리스트 ACTIVE 클래스 추가
  const handleActiveList = (msgGroupId: string, callback: string) => {
    setLongDetailParamsState({msgGroupId, callback})
  }

  // SCROLL INFINITY 함수
  const onScrollHandler = throttle((e: any) => {
    const container = listRef.current;
    if (container && totalPage !== searchAllValue.currentPage && !isLoading) {
      const {scrollTop, scrollHeight, clientHeight} = container;
      if (calScrollEvent({scrollHeight,clientHeight,scrollTop})) {
        setSearchAllValue((prev:any) => {
          const updatedData = {...prev};
          updatedData.currentPage = prev.currentPage + 1;
          return updatedData;
        })
      }
    }
  }, 500);

  const messageSelect = [
    { value: 'all', label: '전체조회' },
    { value: 's', label: '문자전송' },
    { value: 'f', label: '포토전송' },
    { value: 'e', label: '1000자전송' },
  ];

  const typeSelect = [
    {
      value: 'number',
      label: '연락처',
    },
  ];

  return {
    onClickSearch,
    handleSearchSelectMsg,
    handleSearchSelectType,
    handleSearchInput,
    searchSelectMsgState,
    searchSelectTypeState,
    listRef,
    onScrollHandler,
    longDetailParamsState,
    handleActiveList,
    messageSelect,
    typeSelect,
    totalPage,
    isLoading,
    tableData,
  };
};
