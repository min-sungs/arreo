import {useRecoilState, useSetRecoilState} from "recoil";
import {softPhoneTopTap} from "../../../../recoil/atoms/common/commonRecoil.ts";
import {checkGroupListState} from "../../../../recoil/atoms/addressList.ts";
import {addressOpenToggleRecoil, messageSendDataRecoil, messageSendViewListRecoil, reSendFileRecoil, reSendMsgRecoil, reSendMsgToggleRecoil} from "../../../../recoil/atoms/messageSend/messageSend.ts";
import React, {useEffect} from "react";
import {useMsgRecoilReset} from "../useMsgRecoilReset.ts";

interface IUseDisplay {
  gridRef?: React.MutableRefObject<any>;
}

export const useDisplay = ({gridRef}:IUseDisplay) => {
  const [softPhoneTopTapState,setSoftPhoneTopTapState] = useRecoilState(softPhoneTopTap);
  const {resetMsgInfo,reSendMsgToggleState} = useMsgRecoilReset({gridRef});

  // 수신인 관련 데이터 초기화
  useEffect(() => {
    resetMsgInfo()
  }, [softPhoneTopTapState, gridRef]);

  useEffect(() => {
    if(!reSendMsgToggleState) resetMsgInfo();
  }, [reSendMsgToggleState]);
}