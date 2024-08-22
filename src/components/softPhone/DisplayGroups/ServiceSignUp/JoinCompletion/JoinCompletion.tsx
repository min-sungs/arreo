import React from 'react';
import * as SB from '../../styles/fixedStyle/button.styles';
import * as S from './JoinCompletion.styles';

interface IJoinCompletion {
  setOpen015SubPage?: any;
  initial015SubPage?: any;
  say015SubHandle?: any;
  pickNumber?: any;
  authorityData?: any;
  authorityDataRefetch: any;
  authorityDataState: any;
}

const JoinCompletion = ({
  setOpen015SubPage,
  initial015SubPage,
  say015SubHandle,
  pickNumber,
  authorityData,
  authorityDataRefetch,
  authorityDataState,
}: IJoinCompletion) => {
  const user = localStorage?.getItem('user');
  return (
    <S.JoinCompletionWrap>
      <div className="completionGroup">
        <div className="completionTextBox">
          <h4>
            <span className="user">{user}</span> 님
          </h4>
          <div className="phoneGroup">
            <h3>
              <span className="number">{`015-${pickNumber.firstPart}-${pickNumber.secondPart}`}</span>으로
              <br />
              서비스 가입이 완료되었습니다.
            </h3>
          </div>
          <div className="description">
            <p>
              베타 서비스 기간 이후 월 구독료 {authorityDataState.monthlyPrice}원이 Arreo 충전 캐쉬로 청구될 예정입니다.{' '}
              <span className="gray">
                (서비스 구독 취소는 마이페이지 에서 가능하며, 베타서비스 종료 14일 전 공지될 예정입니다.)
              </span>
            </p>
          </div>
        </div>
        <SB.Btn100>
          <button className="startBtn" onClick={() => authorityDataRefetch()}>
            확인
          </button>
        </SB.Btn100>
      </div>
    </S.JoinCompletionWrap>
  );
};

export default JoinCompletion;
