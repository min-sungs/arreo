/* eslint-disable */
import React from "react";
import * as S from "./LongStorageBox.styles"
// import * as S from "../sendResultDetail/sendResultDetail.styles.ts"
import LongStorageBoxLeftDataView from "./components/LongStorageBoxLeftDataView.tsx";
import LongStorageBoxTable from "./components/LongStorageBoxTable.tsx";
import {useLtsContentDetail} from "../../../../../components/hooks/customs/sendResult/long/useLongDetail.ts";

const LongStorageBox = () => {

  const longHooks = useLtsContentDetail();


  return (
    <S.LongStorageBox>
      <h2>메시지 장기보관함</h2>
      <LongStorageBoxLeftDataView detailInfo={longHooks.detailInfo}/>
      <LongStorageBoxTable
            listNumber={longHooks.listNumber}
            tableData={longHooks.tableData}
            pageSize={longHooks.pageSize}
            setSearchAllValue={longHooks.setSearchAllValue}
            startPage={longHooks.startPage}
            setStartPage={longHooks.setStartPage}
            activePage={longHooks.activePage}
            setActivePage={longHooks.setActivePage}
            eventHook={longHooks.handlePageChange}
            count={longHooks.totalElements}
            detailInfo={longHooks.detailInfo}
      />
    </S.LongStorageBox>


  // <S.LongStorageBox>
  //   <h2>메세지 장기보관함</h2>
  //   {/* 전송결과 상세내용 구역 Wrap */}
  //   <SendResultLeftDataView detailInfo={longHooks.detailInfo}/>
  //    {/*전송결과 테이블 Wrap */}
  //   <SendResultTable
  //     listNumber={longHooks.listNumber}
  //     tableData={longHooks.tableData}
  //     pageSize={longHooks.pageSize}
  //     setSearchAllValue={longHooks.setSearchAllValue}
  //     startPage={longHooks.startPage}
  //     setStartPage={longHooks.setStartPage}
  //     activePage={longHooks.activePage}
  //     setActivePage={longHooks.setActivePage}
  //     eventHook={longHooks.handlePageChange}
  //     count={longHooks.totalElements}
  //   />
  // </S.LongStorageBox>
  )
}

export default LongStorageBox;