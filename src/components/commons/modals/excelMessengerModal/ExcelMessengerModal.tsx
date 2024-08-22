import React from 'react'
import BlackButton from "../../buttons/BlackButton";
import BlueButton from "../../buttons/BlueButton";
import * as S from './ExcelMessengerModal.styles'
import {IExcelMessengerModal} from "./ExcelMessengerModal.types";
import {formatPhoneNumber} from "../../../../apis/utils/formats/phoneNumberFormatUtil.ts";

const ExcelMessengerModal = ({sendEventFnc, cancelEventFnc, estimateData}: IExcelMessengerModal) => {

  return (
    <S.PopupWrapper>
      <S.PopupUl>
        <S.PopupLi>
          <S.LiWrapper>
            <S.LiSubject>전송 알림</S.LiSubject>
            {estimateData?.pointEnough ? (
              <>
                <p>- 발신번호 : {formatPhoneNumber(estimateData?.callback)}</p>
                <p>- 전송을 진행하시겠습니까?</p>
                <p>- 진행된 전송은 취소가 불가능합니다.</p>
              </>
            ) : (
              <p>- 포인트가 부족합니다.</p>
            )

            }
          </S.LiWrapper>
        </S.PopupLi>
        <S.PopupLi>
          <S.LiWrapper>
            <S.LiSubject>전송메시지 건수</S.LiSubject>
            <p>- SMS 건수 : {estimateData?.smsCount}건 ( {estimateData?.smsUnitCost || ""}원/건 )</p>
            <p>- LMS 건수 : {estimateData?.lmsCount}건 ( {estimateData?.lmsUnitCost || ""}원/건 )</p>
          </S.LiWrapper>
        </S.PopupLi>
        <S.PopupLi>
          <S.LiWrapper>
            <S.LiSubject>캐쉬 이용내역</S.LiSubject>
            <p>- 사용 가능한 캐쉬 : {estimateData?.remainingCash}원</p>
            <p>- 사용될 캐쉬 : {estimateData?.chargedCash}원</p>
            <p>- 전송후 남는 캐쉬 : {estimateData?.cashAfterCharge}원</p>
          </S.LiWrapper>
        </S.PopupLi>
        <S.PopupLi>
          <S.LiWrapper>
            <S.LiSubject>포인트 이용내역</S.LiSubject>
            <p>- 사용 가능한 포인트 : {estimateData?.remainingPoint}원</p>
            <p>- 사용될 포인트 : {estimateData?.chargedPoint}원</p>
            <p>- 전송후 남는 포인트 : {estimateData?.pointAfterCharge}원</p>
          </S.LiWrapper>
        </S.PopupLi>
      </S.PopupUl>

      <S.ButtonWrapper>
        {estimateData?.pointEnough && (<BlueButton text={'전송'} eventFun={sendEventFnc}/>)}
        <BlackButton text={'취소'} eventFun={cancelEventFnc} marginLeft={'10px'}/>
      </S.ButtonWrapper>
    </S.PopupWrapper>
  )
}

export default ExcelMessengerModal;