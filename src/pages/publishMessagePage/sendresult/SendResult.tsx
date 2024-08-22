/* eslint-disable */

import React from "react";
import * as S from "../styles/sendresult/SendResult.styles.ts"
import Schedule from "../components/sendrResult/schedule/Schedule.tsx";
import {useRecoilValue} from "recoil";
import {sendHistoryComponentRecoil} from "../../../recoil/atoms/sendResult/sendResult.ts";
import SendResultDetail from "../components/sendrResult/sendResultDetail/sendResultDetail.tsx";
import LongStorageBox from "../components/sendrResult/longStorageBox/LongStorageBox.tsx";

interface ISendResult {
  addressOpenToggleState: boolean
  softPhoneTopTapState: string
}

const SendResult = ({softPhoneTopTapState, addressOpenToggleState}: ISendResult) => {

  const sendHistoryComponent = useRecoilValue(sendHistoryComponentRecoil);

  const components: any = {
    send: <SendResultDetail/>,
    schedule: <Schedule/>,
    long: <LongStorageBox/>,
  }

  return (
    <>
      <S.SendResultLeftZone style={
        {
          opacity: softPhoneTopTapState === "2" && !addressOpenToggleState ? '1' : '0',
          position: softPhoneTopTapState === "2" && !addressOpenToggleState ? 'inherit' : 'absolute',
          top: softPhoneTopTapState === "2" && !addressOpenToggleState ? '' : '-100%',
          zIndex: softPhoneTopTapState === "2" && !addressOpenToggleState ? '9001' : '9000'
        }
      }>
        {components[sendHistoryComponent] || null}
      </S.SendResultLeftZone>
    </>
  )
}
/* 2024.02.02 18:10 기준 */
export default SendResult;