/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

import {getDataTransferDetailList} from '../../../../../../apis/api/transferResultDetailApi';
import {useRecoilState, useRecoilValue} from "recoil";
import {resultDetailParamsRecoil} from "../../../../../../recoil/atoms/sendResult/sendResult.ts";

type  SearchData = {
  prepayPayNo: string;
  pageSize: number;
  pageNumber: number;
  keywordValue:  string | null;
  keyword: string | null;
  callback: string;
  rsltVal: string | null;
}


/**
 * 전송/예약 관리 => 전송결과 조회 상세 페이지
 */
export const useTrcContentDetail = () => {
  const [pageSize,] = useState<number>(10);
  const [listNumber, setListNumber] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(1);
  const [tableData, setTableData] = useState<any>([{}]);
  const [detailInfo, setDetailInfo] = useState<any>([{}]);
  const [startPage, setStartPage] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);


  const resultDetailParamsState = useRecoilValue(resultDetailParamsRecoil);
  const [searchAllValue, setSearchAllValue] = useState<SearchData>(
    {pageSize, pageNumber: currentPage, keywordValue: null, keyword: null, prepayPayNo:resultDetailParamsState.prepayPayNo, callback: resultDetailParamsState.callback,rsltVal: null}
  );
  useEffect(() => {
    setActivePage(1);
    setStartPage(1);
    setCurrentPage(0);
    setTotalElements(1)
    setListNumber(0);
  }, [searchAllValue.prepayPayNo,searchAllValue.keywordValue,searchAllValue.keyword, searchAllValue.rsltVal ]);


  // 리스트 클릭 대상 변경
  useEffect(() => {
    const changeListApi = {pageSize, pageNumber: 0, keywordValue: null, keyword: null,
      prepayPayNo:resultDetailParamsState.prepayPayNo,callback: resultDetailParamsState.callback, rsltVal: null}
    setSearchAllValue(changeListApi);
  },[resultDetailParamsState])

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

  const queryKey = ['getResultDetail', searchAllValue];
  const {
    data: trContentDataList,
    isLoading,
    isError,
  } = useQuery(queryKey, () => getDataTransferDetailList(searchAllValue), {
    staleTime: 6000,
    refetchInterval: 6000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!isLoading && !isError && !(typeof trContentDataList === 'string') ) {
      const detailData = {...trContentDataList};
      setTableData(detailData?.phnList?.content);
      setDetailInfo(detailData);
      detailData.failCnt = detailData.totalCount - (detailData.sendingCount + detailData.successCount);
      setActivePage((detailData?.phnList?.pageable?.pageNumber as number) + 1);
      setTotalElements(detailData?.phnList?.totalElements as number);
      // }else if(status === 'error'){
    }else {
      setTableData([]);
      setDetailInfo([]);
    }
  }, [trContentDataList, isLoading, isError]);

  return {
    setTableData,
    setSearchAllValue,
    pageSize,
    startPage,
    activePage,
    setStartPage,
    setActivePage,
    handlePageChange,
    totalElements,
    detailInfo,
    tableData,
    listNumber,
    resultDetailParamsState
  };
};
