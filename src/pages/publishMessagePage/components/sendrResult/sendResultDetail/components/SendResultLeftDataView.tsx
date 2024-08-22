import React, { useEffect } from "react";
import * as S from '../../../../styles/sendresult/SendResult.styles.ts'
import { calMsglen } from "../../../../../../apis/utils/translateEncode.ts";
import { formatDateBase } from "../../../../../../apis/utils/formats/dateFormatUtil.ts";
import { formatPhoneNumber } from "../../../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { reSendFileRecoil, reSendMsgRecoil, reSendMsgToggleRecoil } from "../../../../../../recoil/atoms/messageSend/messageSend.ts";
import { softPhoneTopTap } from "../../../../../../recoil/atoms/common/commonRecoil.ts";

interface ISendResultLeftDataView {
  detailInfo: any
}

const SendResultLeftDataView = ({ detailInfo }: ISendResultLeftDataView) => {
  const setReSendMsgState = useSetRecoilState(reSendMsgRecoil);
  const setReSendFileState = useSetRecoilState(reSendFileRecoil);
  const reSendMsgToggleState = useRecoilValue(reSendMsgToggleRecoil);
  const softPhoneTopTapState = useRecoilValue(softPhoneTopTap);
  useEffect(() => {
    if (softPhoneTopTapState === "2") {
      setReSendMsgState(detailInfo.sndMsg);
      setReSendFileState(detailInfo.imageData);
    }
  }, [detailInfo, reSendMsgToggleState, softPhoneTopTapState]);
  return (
    <S.SendResultLeftDataView>
      {/* 메시지 데이터 출력 */}
      {/* dataContent */}
      <div>
        <div className="messageContent">
          {detailInfo.imageData && (
            <img src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="이미지"/>
          )}
          <p>
            {detailInfo?.sndMsg ?? ""}
          </p>
          {/* MMS Byte */}
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
          <dd>{detailInfo?.callback ? formatPhoneNumber(detailInfo.callback) : "ㅡ"}</dd>
        </div>
        <div>
          <dt>전송 건수</dt>
          <dd>{detailInfo?.totalCount ? detailInfo?.totalCount : "0"}</dd>
        </div>
        <div>
          <dt>성공 건수</dt>
          <dd>{detailInfo?.successCount ? detailInfo?.successCount : "0"}</dd>
        </div>
        <div>
          <dt>실패 건수</dt>
          <dd>{detailInfo?.failCnt ? detailInfo?.failCnt : "0"}</dd>
        </div>
        <div>
          <dt>전송중 건</dt>
          <dd>{detailInfo?.sendingCount ? detailInfo?.sendingCount : "0"}</dd>
        </div>
        <div>
          <dt>사용 금액</dt>
          <dd>
            <span>{detailInfo?.usedCash ?? "0"} C</span>&ensp;
            <span>{detailInfo?.usedPoint ?? "0"} P</span>
          </dd>
        </div>
      </dl>
    </S.SendResultLeftDataView>
  )
}

export default SendResultLeftDataView;