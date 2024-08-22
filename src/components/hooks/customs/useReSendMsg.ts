import {useMutationReSend} from "../mutations/sendResult/useMutationReSend.ts";
import {useRecoilState, useSetRecoilState} from "recoil";
import {messageSendDataRecoil, messageSendViewListRecoil, reSendMsgToggleRecoil} from "../../../recoil/atoms/messageSend/messageSend.ts";
import {useEffect} from "react";
import {callbackNumberState, selectNumberState} from "../../../recoil/atoms/addressList.ts";

export const useReSendMsg = () => {
  // 전송 리스트 RECOIL
  const [, setMessageSendViewList] = useRecoilState(messageSendViewListRecoil);
  const [, setMessageSendData] = useRecoilState(messageSendDataRecoil);
  // 재전송 토글 RECOIL
  const [reSendMsgToggleState, setReSendMsgToggleState] = useRecoilState(reSendMsgToggleRecoil);
  // 발신인 RECOIL
  const setSelectNumber = useSetRecoilState(selectNumberState);
  // 재전송 데이터 요청 Mutation
  const {reSendMutate, reSendData, reSendLoading} = useMutationReSend();

  // 재전송 버튼 핸들러
  const handleReSendMsg = (detailInfo: any) => {
    setReSendMsgToggleState((prevState: boolean) => !prevState); // 재전송 버튼 토글
    if (!reSendMsgToggleState) { // 재전송 버튼이 true 로 변할 때
      reSendMutate({prepayPayNo: detailInfo.prepayPayNo ? detailInfo.prepayPayNo : detailInfo.msgGroupId, callback: detailInfo.callback});
    }
  }
  // 재전송 리스트 표출 핸들러
  useEffect(() => {
    if (reSendData && !reSendLoading) {
      setSelectNumber(reSendData.callback);// 발신인
      setMessageSendViewList((prevState: any) => { // 재전송 수신인 표출 데이터
        const reSendDataFormat = reSendData.sendList.map((list: any) => {
          return {buddyNm: list.buddyNm, keyCommNo: list.phoneNumber}
        })
        return {
          ...prevState,
          etcViewList: {
            buddyGroupName: prevState.etcViewList.buddyGroupName,
            buddyList: reSendDataFormat
          }
        };
      });
      setMessageSendData((prevState: any) => { // 재전송 데이터
        const reSendDataFormat = reSendData.sendList.map((list: any) => {
          return list.phoneNumber
        })
        return {
          ...prevState,
          etcPhoneNumberList: reSendDataFormat
        };
      })
    }

  }, [reSendData, reSendLoading]);
  return {
    reSendMsgToggleState,
    handleReSendMsg,
  }
}