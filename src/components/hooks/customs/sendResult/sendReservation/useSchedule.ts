import {useEffect, useState} from "react";
import {QueryFunction, QueryKey, useQuery} from "@tanstack/react-query";
import {getReserveSendDetail} from "../../../../../apis/api/stContentDetailApis.ts";
import {formatDateBase} from "../../../../../apis/utils/formats/dateFormatUtil.ts";
import {useRecoilValue} from "recoil";
import {scheduleDetailParamsRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";

export const useSchedule = () => {
  const pageSize: number = 10;
  const [listNumber, setListNumber] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [tableData, setTableData] = useState<any>([{}]);
  const [detailInfo, setDetailInfo] = useState<any>([{}]);
  const [startPage, setStartPage] = useState<number>(1);
  const [activePage, setActivePage] = useState<number>(1);
  const [datePicker, setDatePicker] = useState<string>('');
  const [sndMsg, setSndMsg] = useState<string>('');

  const scheduleDetailParamsState = useRecoilValue(scheduleDetailParamsRecoil);

  const [searchAllValue, setSearchAllValue] = useState<any>(
    {pageSize,currentPage: 0, keywordValue: null, keyword: null, prepayPayNo: scheduleDetailParamsState.prepayPayNo, callback: scheduleDetailParamsState.callback}
  );

  useEffect(() => {
    setActivePage(1);
    setStartPage(1);
    setCurrentPage(0);
    setTotalElements(0)
  }, [searchAllValue.prepayPayNo, searchAllValue.callback, searchAllValue.keyword, searchAllValue.keywordValue]);


  // 리스트 클릭 대상 변경
  useEffect(() => {
    const changeListApi = {pageSize:10,currentPage: 0, keywordValue: null, keyword: null, prepayPayNo:scheduleDetailParamsState.prepayPayNo,callback: scheduleDetailParamsState.callback}
    setSearchAllValue(changeListApi);
  },[scheduleDetailParamsState.prepayPayNo,scheduleDetailParamsState.callback])

  // 페이징 네이션 동작 함수
  const handlePageChange = (pageNumber: number) => {
    setListNumber(pageNumber * 10 - 10);
    setCurrentPage(pageNumber-1);
    setSearchAllValue((prev:any) => {
      const updatedData = {...prev};
      updatedData.currentPage = pageNumber - 1;
      return updatedData;
    })
  };
  // ? 예약전송 리스트 조회 Query
  const queryKey = ['getReserveSendDetail', searchAllValue];
  const {data, isLoading, isError,status}: any = useQuery(queryKey,() => getReserveSendDetail(searchAllValue),
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    console.log(data);
    if (!isLoading && !isError && data) {
      setDatePicker(formatDateBase(data?.sndDttm));
      setTableData(data?.sendList?.content);
      setDetailInfo(data);
      setTotalElements(data.sendList.totalElements as number);
      setActivePage((data?.sendList?.pageable?.pageNumber as number) + 1);
      setSndMsg(data?.sndMsg);
    }
    else if (!isLoading && !isError && !data){
      setTableData([]);
      setDetailInfo([])
      setSndMsg("");
    }
  }, [data, isLoading, isError]);

  return {
    pageSize,
    listNumber,
    currentPage,
    isLoading,
    totalElements,
    startPage,
    setStartPage,
    activePage,
    setActivePage,
    setCurrentPage,
    detailInfo,
    datePicker,
    sndMsg,
    setDatePicker,
    setSndMsg,
    tableData,
    setSearchAllValue,
    handlePageChange
  };
};
