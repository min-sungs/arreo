import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

import {getStorageDetailApi} from "../../../../../apis/api/ltsContentDetailApis.ts";
import {useRecoilValue} from "recoil";
import {longDetailParamsRecoil, resultDetailParamsRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";

type  SearchData = {
  pageSize:number;
  msgGroupId: string;
  pageNumber: number;
  keywordValue: string | null;
  keyword: string | null;
  callback: string;
}

/**
 * 전송/예약 관리 => 메시지 장기보관함 상세 페이지
 */
export const useLtsContentDetail = () => {
  const pageSize: number = 10;
  const [listNumber, setListNumber] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(1);
  const [tableData, setTableData] = useState<any>([{}]);
  const [detailInfo, setDetailInfo] = useState<any>([{}]);
  const [startPage, setStartPage] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);

  // 이름, 번호 중 선택 state
  const [searchKeywordValue, setSearchKeywordValue] = useState<string | null>(null);
  // 검색 내용 state
  const [searchKeyword, setSearchKeyword] = useState<string | null>(null);

  const longDetailParamsState = useRecoilValue(longDetailParamsRecoil);

  const [searchAllValue, setSearchAllValue] = useState<SearchData>(
    {pageSize,pageNumber:currentPage, keywordValue: null, keyword: null, msgGroupId: longDetailParamsState.msgGroupId, callback: longDetailParamsState.callback}
  );
  useEffect(() => {
    setActivePage(1);
    setStartPage(1);
    setCurrentPage(0);
    setTotalElements(1)
    setListNumber(0);
  }, [searchAllValue.msgGroupId,searchAllValue.keywordValue,searchAllValue.keyword]);

  // 리스트 클릭 대상 변경
  useEffect(() => {
    const changeListApi = {pageSize:10,pageNumber: 0, keywordValue: null, keyword: null, msgGroupId:longDetailParamsState.msgGroupId,callback: longDetailParamsState.callback}
    setSearchAllValue(changeListApi);
  },[longDetailParamsState])

  // 페이징 네이션 동작 함수
  const handlePageChange = (pageNumber: number) => {
    setListNumber(pageNumber * 10 - 10);
    setCurrentPage(pageNumber-1);
    setSearchAllValue((prev:SearchData) => {
      const updatedData = {...prev};
      updatedData.pageNumber = pageNumber - 1;
      return updatedData;
    })
  };

  // 전체리스트
  const queryKey = ['getResultDetail', searchAllValue];
  const {data, isLoading, isError,status} = useQuery(queryKey,() => getStorageDetailApi(searchAllValue),
    {
      refetchOnWindowFocus: false,
      // enabled: longDetailParamsState.msgGroupId !== ""
    });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const detailData = {...data};
      setTableData(detailData?.rcvPhnIds?.content);
      setDetailInfo(detailData);
      setTotalElements(detailData?.rcvPhnIds?.totalElements as number);
      setActivePage((detailData?.rcvPhnIds?.pageable?.pageNumber as number) + 1);
    }else if(status === 'error'){
      setTableData([]);
      setDetailInfo([]);
    }
  }, [data, isLoading, isError]);

  return {
    handlePageChange,
    tableData,
    totalElements,
    startPage,
    setStartPage,
    activePage,
    setActivePage,
    setSearchKeywordValue,
    setSearchKeyword,
    setCurrentPage,
    detailInfo,
    isLoading,
    isError,
    pageSize,
    listNumber,
    setSearchAllValue
  };
};
