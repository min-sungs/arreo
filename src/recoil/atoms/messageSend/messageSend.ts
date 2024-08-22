import {atom} from "recoil";


// 메세지 전송에 필요한 수신인 SEQ 넘버랑 수신인 번호 Recoil
export const messageSendDataRecoil = atom({
  key: "messageSendDataRecoil",
  default: {
    groupSeqList: [],
    buddySeqList: [],
    etcPhoneNumberList:[],
    // reSendPhoneNumberList:[]
  }
})

// 메세지 전송 수신인 리스트 표출에 필요한 Recoil
export const messageSendViewListRecoil = atom({
  key: "messageSendViewListRecoil",
  default: {
    groupViewList: [{buddyGroupName: "그룹", buddyList: [], groupSeqNo:""}],
    buddyViewList: {buddyGroupName: "개별 수신인 목록", buddyList: []},
    etcViewList: {buddyGroupName: "재전송 수신인 목록", buddyList: []},
    // reSendViewList: {buddyGroupName: "재전송 수신인 목록", buddyList: []}
  }
})

// 메세지 재전송 토글
export const reSendMsgToggleRecoil = atom({
  key: 'reSendMsgToggleRecoil',
  default: false
})
// 메세지 재전송 주소록 표출 토글
export const addressOpenToggleRecoil = atom({
  key: 'addressOpenToggleRecoil',
  default: false
})

// 메세지 재전송 - 전송 내용
export const reSendMsgRecoil = atom<string>({
  key: "reSendMsgRecoil",
  default: ""
})
// 메세지 재전송 - 전송 파일
export const reSendFileRecoil = atom<any>({
  key: 'reSendMsgFileRecoil',
  default: null
})



// 나의 최근 이력 params
export const recentHistoryRecoil = atom<{ number: string,  pageSize: number, name: null | string }>({
  key:"recentHistoryRecoil",
  default: {number: "all",  pageSize: 10, name: null}
})