import React from 'react';
import ATitle from '../../Atom/ATitle';
import BaseGuide from '../../Atom/BaseGuide';
import styled from 'styled-components';
import BaseButton from '../../Atom/BaseButton';
import { useNavigate } from 'react-router-dom';

const WhiteDomain = () => {
  /** 함수 커스텀 훅 파일분리 */
  const navigate = useNavigate();
  const onPostDomain = () => {
    navigate('/whitedomainpost');
  };
  /** 스타일 컴포넌트 파일분리 */
  // 테이블을 감싸는 컨테이너
  // 테이블을 감싸는 컨테이너
  const AWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 4rem 0;
    gap: 2rem;
  `;
  // 테이블 요소
  const AContents = styled.table`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border-top: 2px solid #a1a1a1;
  `;
  // 테이블 헤더
  const AContentsHead = styled.thead`
    width: 100%;
  `;
  // 테이블 바디
  const AContentsBody = styled.tbody`
    width: 100%;
  `;
  // 테이블 행
  const AContentsRow = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  `;
  // 테이블 헤더 셀
  const AContentsHeadCell = styled.td`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    width: 100% - 0.5rem;
    padding: 1.2rem;
    font-weight: 600;
    border-bottom: 1px solid #d1d1d1;
    font-size: 1.4rem;
  `;
  // 테이블 바디 셀
  const AContentsBodyCell = styled.td`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding: 1.25rem;
    border-bottom: 1px solid #d1d1d1;
    font-size: 1.3rem;
  `;
  // 버튼 컨테이너
  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <>
      <AWrapper>
        <ATitle type="sub" text="화이트 도메인 (안전 URL 검사)" color="#0D42E5" />
        <AContents>
          <AContentsHead>
            <AContentsRow>
              <AContentsHeadCell>사이트명</AContentsHeadCell>
              <AContentsHeadCell>등록URL</AContentsHeadCell>
              <AContentsHeadCell>승인여부</AContentsHeadCell>
              <AContentsHeadCell>등록불가사유</AContentsHeadCell>
              <AContentsHeadCell>요청취소</AContentsHeadCell>
            </AContentsRow>
          </AContentsHead>
          <AContentsBody>
            <AContentsRow>
              <AContentsBodyCell>서비스 준비중입니다.</AContentsBodyCell>
              <AContentsBodyCell>서비스 준비중입니다.</AContentsBodyCell>
              <AContentsBodyCell>서비스 준비중입니다.</AContentsBodyCell>
              <AContentsBodyCell>서비스 준비중입니다.</AContentsBodyCell>
              <AContentsBodyCell>서비스 준비중입니다.</AContentsBodyCell>
            </AContentsRow>
          </AContentsBody>
        </AContents>
      </AWrapper>
      <ButtonWrapper>
        <BaseButton
          width="200px"
          height="30px"
          fontSize="14px"
          fontWeight="bold"
          color="#FFFFFF"
          backgroundColor="#0D42E5"
          onClick={onPostDomain}
        >
          화이트도메인 등록
        </BaseButton>
      </ButtonWrapper>
      <BaseGuide
        text="단축 URL의 경우, 해킹 또는 스미싱의 위험성이 있어 도메인신청 시 승인이 불가능하오니 양해부탁드립니다. 
                <br />화이트도메인 신청 후 고객센터 또는 문자상담을 통해 연락주시면 더욱 빠른 확인이 가능합니다."
      />
    </>
  );
};

export default WhiteDomain;
