/* eslint-disable */
import React, {useState} from 'react'
import * as S from './MessageManagement.styles'
import TransmissionResult from './TransmissionResult/TransmissionResult';
import SendReservation from './SendReservation/SendReservation';
import LongTermStorageBox from './LongTermStorageBox/LongTermStorageBox';
import {sendHistoryComponentRecoil} from "../../../../recoil/atoms/sendResult/sendResult.ts";
import {useRecoilState, useRecoilValue} from "recoil";
import {addressOpenToggleRecoil, messageSendDataRecoil, reSendMsgToggleRecoil} from "../../../../recoil/atoms/messageSend/messageSend.ts";


// 소프트폰 전송결과조회 탭
const MessageManagement = () => {
  // 컴포넌트 Handler Recoil
  const [sendHistoryComponent,setSendHistoryComponent] = useRecoilState(sendHistoryComponentRecoil);

  const handleChangeComponent = (componentNm: string) => {
    setSendHistoryComponent(componentNm);
  }
  const components:any = {
    send: <TransmissionResult handleChangeComponent={handleChangeComponent} />,
    schedule: <SendReservation handleChangeComponent={handleChangeComponent} />,
    long: <LongTermStorageBox handleChangeComponent={handleChangeComponent} />,
  };

  const messageSendDataState = useRecoilValue(messageSendDataRecoil);
  const reSendMsgToggleState = useRecoilValue(reSendMsgToggleRecoil);
  const addressOpenToggleState = useRecoilValue(addressOpenToggleRecoil);
  const groupSeqList = messageSendDataState.groupSeqList;
  const buddySeqList = messageSendDataState.buddySeqList;
  const etcPhoneNumberList = messageSendDataState.etcPhoneNumberList;
  return (
    <S.MessageManagementWrap
      style={
        {
          opacity: (groupSeqList.length > 0 || buddySeqList.length > 0 || etcPhoneNumberList.length > 0 || reSendMsgToggleState || addressOpenToggleState) ? "0" : '1',
          position: (groupSeqList.length > 0 || buddySeqList.length > 0 || etcPhoneNumberList.length > 0 || reSendMsgToggleState || addressOpenToggleState) ? 'absolute' : "inherit",
          // right: (groupSeqList.length > 0 || buddySeqList.length > 0 || etcPhoneNumberList.length > 0 || reSendMsgToggleState || addressOpenToggleState) ? '100%' : '',
          zIndex:  (groupSeqList.length > 0 || buddySeqList.length > 0 || etcPhoneNumberList.length > 0 || reSendMsgToggleState || addressOpenToggleState) ? '-1' : 'inherit',
        }
      }
    >
      {components[sendHistoryComponent] || null}
    </S.MessageManagementWrap>
  );
};

export default MessageManagement;
