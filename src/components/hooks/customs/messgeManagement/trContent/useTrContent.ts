import {useQuery} from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';
import {getDateTransferListAll} from '../../../../../apis/api/transferResultApi';
import {throttle} from "lodash";
import {formatDateRangePickerDate, formatDateYYYYMMDD} from "../../../../../apis/utils/formats/dateFormatUtil.ts";
import {useRecoilState, useSetRecoilState} from "recoil";
import {resultDetailParamsRecoil, transTableDataRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";
import {instance} from "../../../../../apis/api/clientAxios.ts";
import {calScrollEvent} from "../../../../../apis/hooks/useScrollInfinity.ts";

type SearchData = {
  pageSize: number;
  pageNumber: number;
  searchStartDate: string | null;
  searchEndDate: string | null;
  selectedValue: string | null;
};

export const useTrcContent = () => {
  // ? 퍼블리싱 영역

  // 버튼 클릭시 width 값 따라오게 하는 코드 start
  const searchBtnRef = useRef<HTMLButtonElement>(null);
  const searchBoxRef = useRef<HTMLUListElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const adjustButtonWidth = () => {
    if (searchBtnRef.current && searchBoxRef.current) {
      const boxWidth = searchBoxRef.current.offsetWidth;
      searchBtnRef.current.style.width = `${boxWidth}px`;
    }
  };
  useEffect(() => {
    adjustButtonWidth();
  }, [isActive]);
  // ?

  const listRef = useRef<any>(null);
  const pageSize: number = 10;
  const [totalPage, setTotalPage] = useState<number>(10);
  // const [tableData, setTableData] = useState<any>([{}]);
  const [tableData, setTableData] = useRecoilState(transTableDataRecoil)
  const [currentPage,] = useState(0);
  const [searchSelectValue, setSearchSelectValue] = useState<{ value: string | null, label: string }>({value: null, label: '전체조회'});
  const [searchDates, setSearchDates] = useState<string[] | null>(null);
  const [searchAllValue, setSearchAllValue] = useState<SearchData>({pageSize, pageNumber: currentPage, searchStartDate: null, searchEndDate: null, selectedValue: null});
  const [resultDetailParamsState,setResultDetailParamsState] = useRecoilState(resultDetailParamsRecoil);

  // 검색 조건 선택 리스트
  const messageSelect = [
    {value: null, label: '전체조회'},
    {value: 's', label: '문자전송'},
    {value: 'f', label: '포토전송'},
    {value: 'e', label: '1000자전송'},
  ];
  // 전송결과 조회페이지 리스트 조회 Query
  const queryKey = ['getMessageDataResultAll', searchAllValue];
  const {data, isLoading, isError} = useQuery(queryKey, () =>
    getDateTransferListAll(searchAllValue),{
    staleTime:6000,
    refetchInterval: 6000,
    refetchIntervalInBackground: true,
    }
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      if (searchAllValue.pageNumber !== 0) {
        setTableData((prev: any) => [...prev, ...data.content]);
      } else {
        setResultDetailParamsState({prepayPayNo:data.content[0]?.prepayPayNo ?? "",callback:data.content[0]?.callback ?? ""})
        setTableData(data.content);
      }
      setTotalPage(data.totalPages);
    }
  }, [data, isLoading, isError]);

  // 전송결과 조회 리스트 클릭 함수
  const onClickList = (index:number,prepayPayNo:string, callback:string) => {
    setResultDetailParamsState({prepayPayNo,callback})

    const groups = document.getElementsByClassName('groups');
    for (let i = 0; i < groups.length; i++) {
      groups[i].classList.remove('active');
    }
    groups[index].classList.add('active');
  }


  // SCROLL INFINITY 함수
  const onScrollHandler = throttle((e: any) => {
    const container = listRef.current;
    if (container && totalPage !== searchAllValue.pageNumber && !isLoading) {
      const {scrollTop, scrollHeight, clientHeight} = container;
      if (calScrollEvent({scrollHeight,clientHeight,scrollTop})) {
        setSearchAllValue((prev: SearchData) => {
          const updatedData = {...prev};
          updatedData.pageNumber = prev.pageNumber + 1;
          return updatedData;
        })
      }
    }
  }, 500);

  // 검색 조건 선택 함수
  const onSelectKeywordValue = (keywordValue: { value: string, label: string }) => {
    setSearchSelectValue(keywordValue);
  }
  const onChangeRangePickerDate = (val: any) => {
    if (val === null) {
      setSearchDates(null);
    } else {
      const dateArray = formatDateRangePickerDate(val);
      const formatDates = dateArray.map(formatDateYYYYMMDD);
      setSearchDates(formatDates);
    }
  };

  // 검색 버튼 클릭 함수
  const onSearchButton = () => {
    const searchData = {
      pageSize, pageNumber: currentPage, searchStartDate: searchDates?.[0] ?? null, searchEndDate: searchDates?.[1] ?? null, selectedValue: searchSelectValue.value
    }
    setSearchAllValue(searchData);
  }



  return {
    onSearchButton,
    onChangeRangePickerDate,
    onSelectKeywordValue,
    listRef,
    onScrollHandler,
    tableData,
    messageSelect,
    searchSelectValue,
    isActive,
    setIsActive,
    searchBtnRef,
    searchBoxRef,
    onClickList,
    isLoading,
    resultDetailParamsState,
  };
};
