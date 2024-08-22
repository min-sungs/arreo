import {useRecoilState, useSetRecoilState} from "recoil";
import {checkGroupListState} from "../../../recoil/atoms/addressList.ts";
import {addressOpenToggleRecoil, messageSendDataRecoil, messageSendViewListRecoil, reSendFileRecoil, reSendMsgRecoil, reSendMsgToggleRecoil} from "../../../recoil/atoms/messageSend/messageSend.ts";
import React from "react";

interface IUseMsgRecoilReset{
  gridRef?: React.MutableRefObject<any>;
}

export const useMsgRecoilReset = ({gridRef}:IUseMsgRecoilReset) => {
  // 그룹 리스트 Recoil
  const setCheckedGroupList = useSetRecoilState(checkGroupListState);
  // 메세지 전송 API 요청에 필요한 Group, Buddy Seq list and EtcPhoneNumber list
  const setMessageSendDataState = useSetRecoilState(messageSendDataRecoil);
  // 메세지 전송 수신인 표출에 필요한 Group , buddy, etc array list
  const setMessageSendViewState = useSetRecoilState(messageSendViewListRecoil);
  // 메세지 재전송 toggle Recoil
  const [reSendMsgToggleState,setReSendMsgToggleRecoil] = useRecoilState(reSendMsgToggleRecoil);
  // 주소록 열기 toggle Recoil
  const [addressOpenToggleState,setAddressOpenToggleState]= useRecoilState(addressOpenToggleRecoil);
  // 메세지 재전송 - 보낼 메세지
  const setReSendMsgState = useSetRecoilState(reSendMsgRecoil);
  // 메세지 재전송 - 보낼 파일
  const setReSendFileState = useSetRecoilState(reSendFileRecoil);
  const resetMsgInfo = () => {
    // 주소록 메인 테이블
    if (gridRef?.current.getInstance().getCheckedRows().length > 0) {
      gridRef?.current?.getInstance().uncheckAll();
    }
    setReSendMsgState("");
    setReSendFileState(null);
    setAddressOpenToggleState(false); // 재전송 - 주소록 토글
    setReSendMsgToggleRecoil(false); // 재전송 - 재전송 토글
    setCheckedGroupList([]); // 그룹 체크 리스트
    setMessageSendDataState({ // 전송 데이터
      groupSeqList: [],
      buddySeqList: [],
      etcPhoneNumberList: [],
    });
    setMessageSendViewState({ // 전송 리스트 표출 데이터
      groupViewList: [{buddyGroupName: "그룹", buddyList: [], groupSeqNo: ""}],
      buddyViewList: {buddyGroupName: "개별 추가 수신인 목록", buddyList: []},
      etcViewList: {buddyGroupName: "재전송 수신인 목록", buddyList: []},
    })
  }

  return {
    resetMsgInfo,
    reSendMsgToggleState,
  }
}