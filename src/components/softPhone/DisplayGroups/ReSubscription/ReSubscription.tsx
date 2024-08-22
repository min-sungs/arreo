import React from 'react';
import * as S from './ReSubscription.styles';
import * as SH from '../styles/fixedStyle/height.styles';
import * as SB from '../styles/fixedStyle/button.styles';
import * as SA from '../ServiceSignUp/AmountHelp/AmountHelp.styles';
import SubscriptionGuide from '../ServiceSignUp/SubscriptionGuide/SubscriptionGuide';
import { formatPhoneNumber } from 'apis/utils/formats/phoneNumberFormatUtil';
import { usePOBox015Resub } from 'components/hooks/customs/say015/pobox015/usePOBox015Resub';

const ReSubscription = ({ authorityData, setOpen015SubPage, initial015SubPage, authorityDataRefetch }: any) => {
  const { resub015OnClickHandle, postResub015State } = usePOBox015Resub({
    setOpen015SubPage,
    initial015SubPage,
    authorityDataRefetch,
  });

  return (
    <S.ReSubscriptionWrap>
      {/* 구독 안내 */}
      <SubscriptionGuide />

      <SH.GroupWrap className="amountGroup">
        {/* 안내 */}
        <S.ReSubscriptionGroup>
          <div className="phoneGroup">
            <h2>구독 정보</h2>
            <p className="phone">{formatPhoneNumber(authorityData?.number015)}</p>
          </div>
          <p className="comment">
            발급 번호 변경 불가, 이전 구독 정보에 대한 안내 문구 추가하기 <br /> 발급 번호 변경 불가, 이전 구독 정보에
            대한 안내 문구 추가하기
          </p>
        </S.ReSubscriptionGroup>

        {/* 구독료 */}
        <SA.AmountGroup>
          <div className="top">
            <p>Say 015 베타 서비스 기간동안 무료로 </p>
            <h3>월 구독료 0원</h3>
          </div>
          <p className="arrowRow">
            <span className="arrowRowSpan" />
          </p>
          <div className="bottom">
            <p>
              베타 서비스 이후 <b>월 {authorityData?.monthlyPrice}원</b>의 구독료가
              <br />
              Arreo 충전캐쉬에서 자동 결제됩니다.
            </p>
          </div>
        </SA.AmountGroup>
      </SH.GroupWrap>

      <SB.Btn100>
        <button className="startBtn" onClick={() => resub015OnClickHandle(authorityData)} disabled={postResub015State}>
          Say 015 구독하기
        </button>
      </SB.Btn100>
    </S.ReSubscriptionWrap>
  );
};

export default ReSubscription;
