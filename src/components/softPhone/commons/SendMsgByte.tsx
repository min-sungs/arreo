/* eslint-disable */
import {calMsgByte} from "../../hooks/utils/byteCalculatorUtil.ts";
import React from "react";

interface ISendMsgByte {
  file:any
  sndMsg:string
  type: string // 전송 : "LMS", 예약 수정 : SMS, LMS
}
const SendMsgByte = ({sndMsg,file,type}:ISendMsgByte) => {
  return (
    <p className="ByteCount">{
      file ? "MMS " : calMsgByte(sndMsg) > 90 ? "LMS " : "SMS "}
      <span>{calMsgByte(sndMsg)} / {type === "LMS" || type === "MMS" ? '2,000' : '90'}</span> Byte
    </p>
  )
}

export default SendMsgByte;