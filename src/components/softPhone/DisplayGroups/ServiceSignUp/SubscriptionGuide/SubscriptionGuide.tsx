import React from 'react';
import * as S from './SubscriptionGuide.styles';

interface ISubscriptionGuide {
  setOpen015SubPage: any;
  initial015SubPage: any;
  say015SubHandle: any;
}

// const SubscriptionGuide = ({ setOpen015SubPage, initial015SubPage, say015SubHandle }: ISubscriptionGuide) => {
const SubscriptionGuide = () => {
  return (
    <S.SubscriptionGuideWrap>
      <div className="subGuide">
        <h2>
          스마트폰을 더 스마트하게
          <br />
          SAY 015
          <br />
          서비스 시작하기
        </h2>
        <p>
          베타 기간동안 0원으로
          <br />
          아래의 모든 015 서비스를 편리하게 사용해보세요
        </p>
      </div>
      <span className="rowSpan" />
      {/* <div>
        <button onClick={() => say015SubHandle(setOpen015SubPage, initial015SubPage.third)}>
          Say 015 서비스 가입하기
        </button>
      </div> */}
    </S.SubscriptionGuideWrap>
  );
};

export default SubscriptionGuide;
