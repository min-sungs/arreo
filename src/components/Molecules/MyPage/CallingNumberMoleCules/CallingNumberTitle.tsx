import React from 'react';
import styled from 'styled-components';
import ATitle from '../../../Atom/ATitle';

const AWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
// 타이틀 컨테이너
const ATitleBox = styled.div`
  width: 40%;
`;
// 텍스트 컨테이너
const TextWrapper = styled.div``;
// 텍스트 타이틀
const TextBox = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 20px;
`;

const LiStyle = styled.li`
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
`;
const CallingNumberTitle = () => {
  return (
    <AWrapper>
      <TitleWrapper>
        <ATitleBox>
          <ATitle type="sub" text="발신번호 사전등록" color="#0D42E5" />
        </ATitleBox>
        <TextWrapper>
          <TextBox>
            전기통신사업법 제 82조의 2(전화번호의 거짓 표시 금지 및 이용자 보호)에 의거하여 2015년 10월 16일부터
            발신번호 임의 변경 후 발송을 차단토록 규제하고 있으며 발신번호 변경 서비스는 정해진 인증 절차를 통해서만
            등록 후, 사용이 가능합니다.
          </TextBox>
          <LiStyle>등록 가능한 발신번호는 <span style={{ color: '#0D42E5' }}>최대 10개</span> 입니다.</LiStyle>
          <LiStyle>
            사용하실 <span style={{ color: '#0D42E5' }}>발신 번호</span>를 입력하신 후, 하단의 인증수단에서 휴대폰일 경우 휴대폰 인증/일반 전화일 경우
            서류인증을선택한 후 [인증하기] 버튼을 클릭하여 등록하실 수 있습니다.
          </LiStyle>
          <LiStyle>서류인증시 통신사가입확인증명서를 첨부하셔야 합니다.</LiStyle>
          <LiStyle>
            핸드폰 발신번호는 여러 아이디에서 등록해서 사용할수 없습니다. 핸드폰 번호는 가장 최근에 인증한 아이디에서만
            발신번호로 사용할 수 있습니다.
          </LiStyle>
          <LiStyle>회사 대표 번호등의 일반 전화번호는 여러 아이디에서 등록해서 사용할수 있습니다.</LiStyle>
        </TextWrapper>
      </TitleWrapper>
    </AWrapper>
  );
};

export default CallingNumberTitle;
