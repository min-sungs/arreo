/* eslint-disable react/button-has-type */
import React from 'react';
import { UseFormGetValues } from 'react-hook-form';
import ATitle from '../../../../Atom/ATitle';
import { v4 as uuidv4 } from 'uuid';
import * as S from './ChargeOnlienPopup.styles';
import BaseButton from '../../../../Atom/BaseButton';
import { useChargeOnlienPopup } from '../../../../hooks/customs/charge/chargeStation/useChargeOnlienPopup';
import Loader from '../../../../common/Loader';

interface IChargeOnlienPopupProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: number;
  yupGetValues: UseFormGetValues<{
    phoneNumber?: string | undefined;
    name: string;
  }>;
}

const ChargeOnlienPopup = ({ yupGetValues, amount, setIsFormOpen }: IChargeOnlienPopupProps) => {
  const { data, onClosePopup, onClickAccountPayment, isLoading } = useChargeOnlienPopup({
    yupGetValues,
    amount,
    setIsFormOpen,
  });

  return (
    <S.Content>
      {isLoading && (
        <S.LoadingDiv>
          <Loader />
        </S.LoadingDiv>
      )}
      <ATitle color="rgb(76, 54, 178)" text="무통장 입금 요청서" type="main" />
      <S.Ul>
        {data.map((el) => (
          <S.Li key={uuidv4()}>
            <S.TypeDiv style={{}}>{el.type}</S.TypeDiv>
            <S.ValueDiv>{el.value}</S.ValueDiv>
          </S.Li>
        ))}
      </S.Ul>
      <S.TextP>
        <S.TextTitle>유의사항</S.TextTitle>
        입금자명이 가입자와 다를 경우 입금 시 실제 입금자명을 기재바랍니다.
        <br />
        수동충전이므로 고객센터 운영시간에만 충전처리가 가능합니다.
        <br />
        따라서, 법정공유일 및 토요일 오후부터 일요일까지는 충전처리가되지 않으니 참고 바랍니다.
        <br />
        <S.TextSpecifics>(고객센터 운영시간 : 평일 9시 ~ 18시 / 점심시간 : 12시 ~ 1시)</S.TextSpecifics>
        <br />
        <br />
        <S.TextTitle>결제 방법 안내</S.TextTitle>
        1. &#39;무통장입금요청서&#39; 작성 후, 서울이동통신 통장계좌로 입금합니다.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <S.TextSpecifics>(텔레뱅킹, 인터넷뱅킹, 등과 같은 방법으로도 입금가능합니다.)</S.TextSpecifics>
        <br />
        2. 고객센터에서 통장을 조회하여 확인 후, 충전처리가 완료됩니다.
        <br />
        3. 충전이 완료되면, 회원님의 휴대폰으로 문자메시지가 발송됩니다.
        <br />
        <S.TextImportantSentence>
          * 현금영수증을 원하실 경우, 우측 상단 충전소 메뉴 하단의 현금영수증신청을 이용바랍니다.
        </S.TextImportantSentence>
      </S.TextP>
      <S.Bottom>
        <S.BottomSubWrapper>
          <S.BottomInput type="checkbox" />
          <S.BottomText>
            <S.BottomImpoertansSentence>[필수]</S.BottomImpoertansSentence> 입금자 정보를 모두 확인하였습니다.
          </S.BottomText>
        </S.BottomSubWrapper>
        <S.ButtonWrapper>
          <BaseButton
            backgroundColor="#0D42E5"
            color="#fff"
            fontWeight="bold"
            width="80px"
            height="31px"
            onClick={onClickAccountPayment}
          >
            확인
          </BaseButton>
          <BaseButton
            backgroundColor="#000"
            color="#fff"
            fontWeight="bold"
            width="80px"
            height="31px"
            onClick={onClosePopup}
          >
            취소
          </BaseButton>
        </S.ButtonWrapper>
      </S.Bottom>
    </S.Content>
  );
};

export default ChargeOnlienPopup;
