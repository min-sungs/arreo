import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import { DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import {assertMsglen, calMsglen} from "../../../../../apis/utils/translateEncode.ts";
import {formatDateYYYYMMDDHHmmss} from "../../../../../apis/utils/formats/dateFormatUtil.ts";


interface IUseStContentDetailTopProps {
  detailInfo: any;
  setSndMsg: React.Dispatch<React.SetStateAction<string>>;
  setDatePicker:  React.Dispatch<React.SetStateAction<string>>
}

export const useScheduleTop = ({ detailInfo, setDatePicker, setSndMsg }: IUseStContentDetailTopProps) => {
  const [sendMsg, setSendMsg] = useState<string>("");

  useEffect(() => {
    setSendMsg(detailInfo?.sndMsg)
  }, [detailInfo]);

  // ? 예약 문자 메시지 수정
  const onChangeSndMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 작성 메시지
    const msg = e.currentTarget.value;
    // 작성 메시지 바이트
    const msgLength = calMsglen(msg);
    // 최대 바이트
    const maxByte =
      // eslint-disable-next-line no-nested-ternary
      detailInfo?.msgGb === 'SMS' ? 90 : detailInfo?.msgGb === 'LMS' ? 2000 : detailInfo?.msgGb === 'MMS' ? 2000 : 0;

    if (msgLength > maxByte) {
      setSndMsg(assertMsglen(msg,maxByte));
    } else {
      setSndMsg(msg);
    }
  };

  // ant - datePicker 함수
  // ? 예약일시 수정
  const onChangeDate = (
dateString:string
  ) => {
    setDatePicker(dateString as string);
  };

  return {
    onChangeSndMsg,
    onChangeDate,
    sendMsg
  };
};
