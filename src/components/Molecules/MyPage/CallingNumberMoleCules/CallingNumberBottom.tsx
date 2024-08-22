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
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 10px;
`;

const LiStyle = styled.li`
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
  list-style: none;
  line-height: 15px;
`;
const CallingNumberBottom = () => {
  return (
    <AWrapper>
      <TitleWrapper>
        <TextWrapper>
          <TextBox>
            - 서류 인증 절차 안내 -
          </TextBox>
          <LiStyle>1. 인증수단에서 서류인증을 선택합니다.</LiStyle>
          <LiStyle>2. 등록하고자 하는 발신번호를 입력합니다.</LiStyle>
          <LiStyle>3. 서류 인증 심사 후 안내 받으 실 휴대폰 번호를 입력합니다.</LiStyle>
          <LiStyle>4. 인증 받으실번호에 대한 필요 서류를 첨부파일에 등록합니다.</LiStyle>
          <LiStyle>5. 서류심사 관련 사항, 요청사항을 비고란에 기재해 주시기 바랍니다.</LiStyle>
          <LiStyle>6. 신청하기 버튼을 누르시면 서류인증 심사가 접수되고 1~2일 정도 소요됩니다.</LiStyle>
          <br />
          <TextBox style={{ color: '#0D42E5' }}>* 필요서류</TextBox>
          <LiStyle style={{ color: '#0D42E5' }}>1) 발신번호에 대한 통신사 가입 증명원</LiStyle>
          <LiStyle style={{ color: '#0D42E5' }}>2) 발신번호 등록 신청자의 재직증명서 또는 건강보험 가입사실확인서</LiStyle>
          <LiStyle style={{ color: '#0D42E5' }}>3) 발신번호 등록 신청자의 사업자등록증</LiStyle>
        </TextWrapper>
      </TitleWrapper>
    </AWrapper>
  );
};

export default CallingNumberBottom;
