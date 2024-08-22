import React from 'react';
import ATitle from '../../../../Atom/ATitle';
import * as S from './ChargeBottom.styles';
import { v4 as uuidv4 } from 'uuid';

const ChageBottomComponent = () => {
  const splitedContentFun = (content: string | undefined) => {
    const splitedContent = <div>{content?.split('</br>').map((el: any) => <p key={uuidv4()}>{el}</p>)}</div>;
    return splitedContent;
  };
  const data = [
    {
      type: '신용카드',
      value: `신용카드 결제시에는 공인인증서가 반드시 필요합니다.</br>결제 후 익월 카드요금 청구서에 합산 청구됩니다.`,
    },
    {
      type: '계좌이체',
      value:
        '계좌이체 결제시에는 공인인증서가 반드시 필요합니다.</br>국민은행 계좌는 결제시, OTP/보안카드가 적용됩니다.',
    },
    {
      type: '무통장입금(수동처리)',
      value:
        '입금자명이 가입자와 다를 경우, 입금시에 실제 입금자명을 기재합니다.</br>입금 내역에 대한 고객센터 확인후 충전 처리됩니다. 입금 30분 후 충전 확인이 되지 않을 경우 고객센터로 연락주시기 바랍니다.</br>고객센터 운영시간 : 평일 9시~18시',
    },
    {
      type: '휴대폰',
      value:
        '결제한도액: SK텔레콤, LG텔레콤 최대 20만원 / KT 최대 15만원</br>결제불가 휴대폰 안내: 법인 및 미성년자(또는 미성년자 요금사용) 명의 휴대폰, 선불요금, 선불폰 또는 임대폰',
    },
  ];

  return (
    <>
      <S.Div>
        <ATitle type="sub" text="결제이용안내" color="#0D42E5" />
        <S.Ul>
          {data.map((el) => (
            <S.Li key={uuidv4()}>
              <S.TypeDiv style={{}}>{el.type}</S.TypeDiv>
              <S.ValueDiv>{splitedContentFun(el.value)}</S.ValueDiv>
            </S.Li>
          ))}
        </S.Ul>
      </S.Div>
      <S.Div>
        <ATitle type="sub" text="아레오 캐쉬, 포인트의 차이가 무엇인가요?" color="#000" />
        <S.TextWrapper>
          <S.TextCard>
            <S.PointSpane><span>&copy;</span> 캐쉬</S.PointSpane><span>:</span> 아레오 유료 서비스, 컨테츠, 유료상품(일부상품제외) 구매에 사용할
            수 있는 선불 충전식 전자화폐
          </S.TextCard>
          <S.TextCard>
            <S.PointSpane>ⓟ 포인트</S.PointSpane><span>:</span> 아레오 서비스 이용한 실적에 따라 자동으로 적립되는 마일리지
          </S.TextCard>
        </S.TextWrapper>
      </S.Div>
    </>
  );
};

export default ChageBottomComponent;
