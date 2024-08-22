import React from 'react';
import * as S from './ChargeMid.styles';

const ChargeMidComponent = () => {
  return (
    <S.Div>
      <S.Title>적립 포인트 안내</S.Title>
      <S.P>
        - 신용카드 결제시 5,000원 이상 결제하면 <S.PointSpan>1%</S.PointSpan> 적립
        <br />- 1만원 미만 결제시 금액의 <S.PointSpan>0%</S.PointSpan> 적립
        <br />
        <br />* 건당 발송단가는 적립포인트가 적용된 단가입니다. 문자 발송 시에는 25원으로 차감됩니다.
      </S.P>
    </S.Div>
  );
};

export default ChargeMidComponent;
