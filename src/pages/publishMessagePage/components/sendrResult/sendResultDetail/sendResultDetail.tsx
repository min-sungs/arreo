import React, { useState } from "react";
import * as S from "./sendResultDetail.styles"
import {useTrcContentDetail} from "../../../../../components/hooks/customs/messgeManagement/trContent/detail/useTrContentDetailIndex.ts";
import SendResultLeftDataView from "./components/SendResultLeftDataView.tsx";
import SendResultTable from "./components/SendResultTable.tsx";

const SendResultDetail = () => {
  const {setSearchAllValue,pageSize, startPage, activePage, setStartPage,
    setActivePage,handlePageChange,totalElements,detailInfo,tableData,listNumber,setTableData } = useTrcContentDetail();
  return (
  <S.SendResultDetail>
    <h2>전송결과 상세페이지</h2>
    {/* 전송결과 상세내용 구역 Wrap */}
    <SendResultLeftDataView detailInfo={detailInfo}/>
    {/* 전송결과 테이블 Wrap */}
    <SendResultTable
      setTableData={setTableData}
      detailInfo={detailInfo}
      listNumber={listNumber}
      tableData={tableData}
      pageSize={pageSize}
      setSearchAllValue={setSearchAllValue}
      startPage={startPage}
      setStartPage={setStartPage}
      activePage={activePage}
      setActivePage={setActivePage}
      eventHook={handlePageChange}
      count={totalElements}
    />
  </S.SendResultDetail>
    )
}

export default SendResultDetail;