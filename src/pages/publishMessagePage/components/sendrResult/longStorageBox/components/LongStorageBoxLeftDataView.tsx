import * as S from "../LongStorageBox.styles.ts";
import React, {useEffect} from "react";
import {calMsglen} from "../../../../../../apis/utils/translateEncode.ts";
import {formatDateBase} from "../../../../../../apis/utils/formats/dateFormatUtil.ts";
import {formatPhoneNumber} from "../../../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {reSendFileRecoil, reSendMsgRecoil, reSendMsgToggleRecoil} from "../../../../../../recoil/atoms/messageSend/messageSend.ts";

interface ILongStorageBoxLeftDataView {
  detailInfo: any
}

const LongStorageBoxLeftDataView = ({detailInfo}: ILongStorageBoxLeftDataView) => {
  const setReSendMsgState = useSetRecoilState(reSendMsgRecoil);
  const setReSendFileState = useSetRecoilState(reSendFileRecoil);
  const reSendMsgToggleState = useRecoilValue(reSendMsgToggleRecoil);
  useEffect(() => {
    setReSendMsgState(detailInfo.sndMsg);
    setReSendFileState(detailInfo.imageData);
  }, [detailInfo,reSendMsgToggleState]);
  return (
    <S.LongStorageBoxLeftDataView>
      {/* 메시지 데이터 출력 */}
      <div>
        <div className="messageContent">
          {detailInfo.imageData && (
            <img src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="이미지"/>
          )}
          <p>
            {detailInfo?.sndMsg ?? ""}
          </p>
          {/* MMS Byte */}
          {/* Byte */}
          <span className="byteWrap">{detailInfo.msgGb ?? "SMS"} {calMsglen(detailInfo.sndMsg ?? "0")}Byte</span>
        </div>
      </div>
      {/* 전송 데이터 출력 */}
      <dl>
        <div>
          <dt>전송 일자</dt>
          <dd>{detailInfo?.sndDttm ? formatDateBase(detailInfo?.sndDttm) : "ㅡ"}</dd>
        </div>
        <div>
          <dt>회신 번호</dt>
          <dd>{detailInfo?.callback ? formatPhoneNumber(detailInfo.callback) :  "ㅡ"}</dd>
        </div>
      </dl>
    </S.LongStorageBoxLeftDataView>
  )
}

export default LongStorageBoxLeftDataView