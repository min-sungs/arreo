import * as S from "../Schedule.styles.ts";
import DatePickerDateTime from "../../../../../../components/common/date/DatePickerDateTime.tsx";
import React, { useEffect } from "react";
import { calMsgByte } from "../../../../../../components/hooks/utils/byteCalculatorUtil.ts";
import { formatPhoneNumber } from "../../../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import { useScheduleTop } from "../../../../../../components/hooks/customs/sendResult/sendReservation/useScheduleTop.ts";

interface IScheduleLeftDataView {
  detailInfo: any;
  sndMsg: string;
  datePicker: string;
  setSndMsg: React.Dispatch<React.SetStateAction<string>>;
  setDatePicker: React.Dispatch<React.SetStateAction<string>>
}

const ScheduleLeftDataView = ({ detailInfo, setSndMsg, setDatePicker, sndMsg, datePicker }: IScheduleLeftDataView) => {


  const scheduleTopHooks = useScheduleTop({ setDatePicker, setSndMsg, detailInfo });

  return (
    <S.ScheduleLeftDataView>
      {/* 메시지 데이터 출력 */}
      {/* dataContent */}
      <div>
        <div className="messageContent">
          {detailInfo?.imageData && (
            <img src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="이미지" />
          )}
          <textarea value={sndMsg ?? ""} onChange={scheduleTopHooks.onChangeSndMsg} />
          {/* MMS Byte */}
          {/* Byte */}
          <span className="byteWrap">{detailInfo?.msgGb ?? "SMS"} {calMsgByte(sndMsg ?? "0")}Byte</span>
        </div>
      </div>
      {/* 전송 데이터 출력 */}

      {/* Data schedule Box */}
      <S.DataScheduleBox>
        {/* 전송 구분 */}
        <S.DataScheduleBoxWrap>
          {/* 데이터명 제목 */}
          <div className="scheduleDataTitle">
            <span>전송구분</span>
          </div>
          {/* 데이터 표시 내용 */}
          <div className="scheduleDataContent">
            <span>국내 전송&#40;예약&#41;</span>
          </div>
        </S.DataScheduleBoxWrap>
        {/* 예약 일시 */}
        <S.DataScheduleBoxWrap>
          <div className="scheduleDataTitle">
            <span>예약일시</span>
          </div>
          <div className="scheduleDataContent scheduleSelectWrap">
            <DatePickerDateTime onChange={(e: any, dateString: any) => scheduleTopHooks.onChangeDate(dateString)} sndDttm={datePicker ? datePicker : "20240101000000"} />
          </div>
        </S.DataScheduleBoxWrap>
        {/* 회신 번호 */}
        <S.DataScheduleBoxWrap>
          <div className="scheduleDataTitle">회신 번호</div>
          <div className="scheduleDataContent">{formatPhoneNumber(detailInfo?.callback) ?? "010-0000-0000"}</div>
        </S.DataScheduleBoxWrap>
        {/* 받는 사람 */}
        <S.DataScheduleBoxWrap>
          <div className="scheduleDataTitle">받는 사람</div>
          <div className="scheduleDataContent">{detailInfo?.totalCount ?? "0"}명</div>
        </S.DataScheduleBoxWrap>
        {/* 사용 금액 */}
        <S.DataScheduleBoxWrap>
          <div className="scheduleDataTitle">사용 금액</div>
          <div className="scheduleDataContent">{detailInfo?.usedMoney ?? "0"} C</div>
        </S.DataScheduleBoxWrap>
      </S.DataScheduleBox>
      <p className="scheduleAlertText">* 예약내역 수정 및 예약취소는 예약시간 <strong>10분전 </strong>까지만 가능합니다.</p>
    </S.ScheduleLeftDataView>
  )
}

export default ScheduleLeftDataView;