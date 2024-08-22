import {atom} from "recoil";

// 전송내역관리 컴포넌트 표출 Recoil
export const sendHistoryComponentRecoil = atom({
  key: "sendHistoryComponentRecoil",
  default: "send"
})

// 전송 결과 상세페이지 API 요청에 필요한 Recoil
export const resultDetailParamsRecoil = atom({
  key: 'resultDetailParamsRecoil',
  default : {prepayPayNo: "", callback: ""}
})

// 예약전송 관리 상세페이지 API 요청에 필요한 Recoil
export const scheduleDetailParamsRecoil = atom({
  key: 'scheduleDetailParamsRecoil',
  default : {prepayPayNo: "", callback: ""}
})

// 장기보관함 관리 상세페이지 API 요청에 필요한 Recoil
export const longDetailParamsRecoil = atom({
  key: 'longDetailParamsRecoil',
  default : {msgGroupId: "", callback: ""}
})

// 전송 결과 소프트폰 리스트 표출 데이터 Recoil
export const transTableDataRecoil = atom({
  key: 'transTableDataRecoil',
  default: [{}]
})