/* eslint-disable no-nested-ternary */
import React, {Dispatch, SetStateAction, useMemo, useState} from "react";
import * as S from '../../../../styles/sendresult/SendResult.styles.ts'
import BaseButton from "../../../../../../components/Atom/BaseButton";
import AddressCheckBox from '../../../../../AddressPage/components/common/CheckBox';
import {v4 as uuidv4} from 'uuid';
import Pagination03Index from "../../../../../../components/common/paginations/Pagination03/Pagination03.index.tsx";
import {useSendResultTable} from "../../../../../../components/hooks/customs/addressBook/useSendResultTable.ts";
import {formatPhoneNumber} from "../../../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import Loader from "../../../../../../components/common/Loader.tsx";
import {useRecoilState} from "recoil";
import {reSendMsgToggleRecoil} from "../../../../../../recoil/atoms/messageSend/messageSend.ts";
import {useReSendMsg} from "../../../../../../components/hooks/customs/useReSendMsg.ts";
import {formatDateBase} from "../../../../../../apis/utils/formats/dateFormatUtil.ts";

type SearchData = {
  prepayPayNo: string;
  pageSize: number;
  pageNumber: number;
  keywordValue: string | null;
  keyword: string | null;
  rsltVal: string | null;
  callback: string;
}

interface ISendResultTable {
  setSearchAllValue: React.Dispatch<React.SetStateAction<SearchData>>
  count: number;
  pageSize: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  eventHook: (pageNumber: any) => void;
  tableData: any
  listNumber: number
  detailInfo: any
  setTableData: React.Dispatch<any>
}


const SendResultTable = ({setTableData,setSearchAllValue, count, setActivePage, setStartPage, startPage, pageSize, activePage, eventHook, tableData, listNumber, detailInfo}: ISendResultTable) => {
  const lastPage = useMemo(() => Math.ceil((count === 0 ? pageSize : count ?? pageSize) / pageSize), [count, pageSize]);
  const sendResultTableHooks = useSendResultTable({setTableData,setSearchAllValue, activePage, lastPage, tableData, count, pageSize});
  const reSendMsgHooks = useReSendMsg();

  return (
    <S.SendResultTable>
      <form onSubmit={sendResultTableHooks.onClickSearchButton}>
        {sendResultTableHooks.isSaveLoading && (<Loader/>)}

        {/* Select, input, select Wrap */}
        <div className="headFunWrap">
          {/* 연락처, 검색바 Box */}
          <div>
            {/* 연락처 Select */}
            <S.SelectWrapper style={{width: '112px'}}>
              <button className={`${sendResultTableHooks.leftSelectSwitch ? 'active' : null}`} type='button' onClick={(e) => {
                e.preventDefault()
                sendResultTableHooks.setLeftSelectSwitch(!sendResultTableHooks.leftSelectSwitch)
              }}>
                {sendResultTableHooks.keywordValueState.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="6" viewBox="0 0 207 104" fill="none">
                  <path
                    d="M190.949 2.72003L110.137 82.6499C108.373 84.4029 105.993 85.3862 103.513 85.3862C101.033 85.3862 98.6524 84.4029 96.8891 82.6499L16.0595 2.73736C14.281 0.993478 11.8947 0.0173416 9.4099 0.0173416C6.92513 0.0173416 4.53879 0.993478 2.76034 2.73736C1.88669 3.5933 1.19238 4.61631 0.718306 5.74613C0.244234 6.87594 0 8.08969 0 9.31585C0 10.542 0.244234 11.7558 0.718306 12.8856C1.19238 14.0154 1.88669 15.0384 2.76034 15.8943L83.5555 95.8069C88.8773 101.058 96.0374 104 103.496 104C110.954 104 118.114 101.058 123.436 95.8069L204.231 15.8943C205.107 15.0381 205.804 14.014 206.279 12.8826C206.755 11.7512 207 10.5354 207 9.30718C207 8.07894 206.755 6.86315 206.279 5.73174C205.804 4.60032 205.107 3.57623 204.231 2.72003C202.452 0.976145 200.066 0 197.581 0C195.096 0 192.71 0.976145 190.932 2.72003"
                    fill="black"/>
                </svg>
              </button>
              {
                sendResultTableHooks.leftSelectSwitch ?
                  <S.SelectOptions>
                    {
                      sendResultTableHooks.keywordValueArr.map((item, index) => {
                        return (
                          <li key={uuidv4()}>
                            <button type='button' onClick={() => {
                              sendResultTableHooks.onChangeKeywordValue(item)
                              sendResultTableHooks.setLeftSelectSwitch(false)
                            }}>
                              {item.label}
                            </button>
                          </li>
                        )
                      })
                    }
                  </S.SelectOptions>
                  : null
              }
            </S.SelectWrapper>
            {/* 검색 input */}
            <S.InputBox>
              <S.SearchInput
                type="text"
                placeholder="해당 검색어를 입력해주세요."
                value={sendResultTableHooks.keywordState}
                onChange={(e: any) => {
                  sendResultTableHooks.setKeywordState(e.currentTarget.value)
                }}
              />
              <BaseButton type={'submit'} backgroundColor="transition" onClick={sendResultTableHooks.onClickSearchButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 178 178" fill="none">
                  <path
                    d="M71.2438 17.8018C57.0725 17.8018 43.4817 23.4316 33.4611 33.4528C23.4405 43.474 17.8109 57.0656 17.8109 71.2377C17.8109 85.4097 23.4405 99.0014 33.4611 109.023C43.4817 119.044 57.0725 124.674 71.2438 124.674C85.415 124.674 99.0059 119.044 109.026 109.023C119.047 99.0014 124.677 85.4097 124.677 71.2377C124.677 57.0656 119.047 43.474 109.026 33.4528C99.0059 23.4316 85.415 17.8018 71.2438 17.8018ZM4.40075e-07 71.2377C0.0016237 59.8991 2.70921 48.7247 7.89772 38.643C13.0862 28.5614 20.6058 19.8638 29.8316 13.2729C39.0573 6.68213 49.7228 2.38849 60.9415 0.74887C72.1603 -0.890749 83.6083 0.171002 94.3342 3.84588C105.06 7.52077 114.754 13.7026 122.611 21.8777C130.467 30.0529 136.259 39.9851 139.505 50.849C142.751 61.7129 143.358 73.1947 141.274 84.3402C139.191 95.4857 134.478 105.973 127.526 114.93L175.5 162.907C177.122 164.587 178.02 166.836 178 169.171C177.979 171.507 177.043 173.74 175.392 175.391C173.74 177.043 171.507 177.979 169.172 178C166.837 178.02 164.587 177.122 162.908 175.5L114.934 127.523C104.403 135.7 91.7889 140.757 78.5264 142.12C65.2638 143.483 51.885 141.097 39.9112 135.233C27.9374 129.369 17.8492 120.263 10.7937 108.95C3.73815 97.6368 -0.00148116 84.5708 4.40075e-07 71.2377Z"
                    fill="rgb(171 171 173)"/>
                </svg>
              </BaseButton>
            </S.InputBox>
          </div>
          {/* 전송상태 Select */}
          {/* 연락처 Select */}
          <S.SelectWrapper style={{width: '230px'}}>
            <button className={`${sendResultTableHooks.rightSelectSwitch ? 'active' : null}`} type='button' onClick={(e) => {
              e.preventDefault()
              sendResultTableHooks.setRightSelectSwitch(!sendResultTableHooks.rightSelectSwitch)
            }}>
              {sendResultTableHooks.rsltValState.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="6" viewBox="0 0 207 104" fill="none">
                <path
                  d="M190.949 2.72003L110.137 82.6499C108.373 84.4029 105.993 85.3862 103.513 85.3862C101.033 85.3862 98.6524 84.4029 96.8891 82.6499L16.0595 2.73736C14.281 0.993478 11.8947 0.0173416 9.4099 0.0173416C6.92513 0.0173416 4.53879 0.993478 2.76034 2.73736C1.88669 3.5933 1.19238 4.61631 0.718306 5.74613C0.244234 6.87594 0 8.08969 0 9.31585C0 10.542 0.244234 11.7558 0.718306 12.8856C1.19238 14.0154 1.88669 15.0384 2.76034 15.8943L83.5555 95.8069C88.8773 101.058 96.0374 104 103.496 104C110.954 104 118.114 101.058 123.436 95.8069L204.231 15.8943C205.107 15.0381 205.804 14.014 206.279 12.8826C206.755 11.7512 207 10.5354 207 9.30718C207 8.07894 206.755 6.86315 206.279 5.73174C205.804 4.60032 205.107 3.57623 204.231 2.72003C202.452 0.976145 200.066 0 197.581 0C195.096 0 192.71 0.976145 190.932 2.72003"
                  fill="black"/>
              </svg>
            </button>
            {
              sendResultTableHooks.rightSelectSwitch ?
                <S.SelectOptions>
                  {
                    sendResultTableHooks.rsltValArr.map((item, index) => {
                      return (
                        <li key={uuidv4()}>
                          <button type='button' onClick={() => {
                            sendResultTableHooks.onChangeRsltValue(item)
                            sendResultTableHooks.setRightSelectSwitch(false)
                          }}>
                            {item.label}
                          </button>
                        </li>
                      )
                    })
                  }
                </S.SelectOptions>
                : null
            }
          </S.SelectWrapper>
        </div>
        <div className="sendListWrap">
          <ul className="sendHeadList">
            {/* All CheckBox */}
            {/*<li className="w10 checkBoxAll"><AddressCheckBox onChange={() => sendResultTableHooks.onCheckBoxAll(activePage)} checked={sendResultTableHooks.checkBoxAllState}/></li>*/}
            <li className="w10"><strong>번호</strong></li>
            <li className="w30"><strong>수신인</strong></li>
            <li className="w30"><strong>수신시간</strong></li>
            <li className="w20"><strong>전송상태</strong></li>
          </ul>
          <div className="sendBodyListWrap">
            {/*{tableData[0]?.rcvPhnId && (*/}
            {tableData[0]?.userKey && (
              tableData?.map((item: any, index: number) => (
                <ul className="sendBodyList" key={uuidv4()}>
                  {/*<li className="w10 checkBox" data-value={JSON.stringify(item as any)}>*/}
                  {/*  <AddressCheckBox onChange={() => sendResultTableHooks.onCheckBox(item,index)}*/}
                  {/*                   checked={sendResultTableHooks.checkBoxState?.[activePage - 1]?.checked[index]}*/}
                  {/*  />*/}
                  {/*</li>*/}
                  <li className="w10">{listNumber + index + 1}</li>
                  <li className="w30 myDataText">
                    <span>{item?.rcvPhnId ? formatPhoneNumber(item?.rcvPhnId) : "ㅡ"}</span>
                    {item?.buddyName && (
                      <span>{item?.buddyName}</span>
                    )}
                  </li>
                  <li className="w30 dateText">{formatDateBase(item?.regRcvDttm) ?? "ㅡ"}</li>
                  <li className="w20">{
                    String(item?.rsltVal) === '-100' ? '성공' : String(item?.rsltVal) === '99' ? '전송중' : '실패'
                  }</li>
                </ul>
              ))
            )}
          </div>

        </div>

        {/*{tableData[0]?.rcvPhnId && (*/}
        {tableData[0]?.userKey && (
          <div className="footFunWrap">
            <Pagination03Index
              pageSize={pageSize}
              count={count}
              activePage={activePage}
              setActivePage={setActivePage}
              eventHook={eventHook}
              setStartPage={setStartPage}
              startPage={startPage}
            />
            {/* 장기보관함, 재전송 */}
            <div className="reuseFunBtnWrap">
              <BaseButton onClick={!sendResultTableHooks.isSaveLoading ? sendResultTableHooks.saveMsgStorage : () => {
              }} width="112px" height="30px" fontSize="12px" fontWeight="600" backgroundColor="#0D42E5" borderRadius="50px" color="#fff">장기보관함</BaseButton>

              <BaseButton width="112px" height="30px" fontSize="12px" fontWeight="600" backgroundColor={reSendMsgHooks.reSendMsgToggleState ? "#2D2D2F" : "#0D42E5"} borderRadius="50px" color="#fff"
                          onClick={() => reSendMsgHooks.handleReSendMsg(detailInfo)}
              >{reSendMsgHooks.reSendMsgToggleState ? "재전송 취소" : "재전송"}</BaseButton>

              <BaseButton onClick={!sendResultTableHooks.isSaveLoading ? sendResultTableHooks.deleteMsg : () => {
              }} width="112px" height="30px" fontSize="12px" fontWeight="600" backgroundColor="rgba(0, 0, 0, 0.8);" borderRadius="50px" color="#fff">삭제</BaseButton>
            </div>
          </div>

        )}
      </form>
    </S.SendResultTable>
  )
}

export default SendResultTable;