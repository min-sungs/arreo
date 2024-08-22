import React from 'react';
import ATitle from '../../Atom/ATitle';
import styled from 'styled-components';
import BaseButton from '../../Atom/BaseButton';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const WhiteDomainPost = () => {
  /** 함수 커스텀 훅 파일분리 */
  const onApprove = () => { };
  /** 스타일 컴포넌트 파일분리 */
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
    flex-direction: row;
    border-top: 2px solid #a1a1a1;
    background-color: transparent;
  `;
  // 테이블 헤더
  const AContentsHead = styled.thead`
    width: 20%;
    display: flex;
    border-right: 1px solid #a1a1a1;
  `;
  // 테이블 바디
  const AContentsBody = styled.tbody`
    width: 80%;
  `;
  // 테이블 행
  const AContentsRow = styled.tr`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;
  // 테이블 헤더 셀
  const AContentsHeadCell = styled.td`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100% - 0.5rem;
    padding: 1.2rem;
    font-weight: 600;
    border-bottom: 1px solid #d1d1d1;
    font-size:1.4rem;
    
  `;
  // 테이블 바디 셀
  const AContentsBodyCell = styled.td`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100% - 0.5rem;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #d1d1d1;
    font-size:1.3rem;
  `;
  // 버튼 컨테이너
  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const WhiteDomainInput = styled.input`
    width: 50%;
    padding: 0.5rem;
    border: 1px solid #d1d1d1;
    font-size: 1.3rem;
    ::placeholder {
      font-size: 1.3rem;
      color: #a1a1a1;
    }
  `;

  const BackPageButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 800;
  `;

  return (
    <>
      <AWrapper>
        <ATitle type="sub" text="화이트 도메인 등록" color="#0D42E5" />
        <BackPageButton>
          <BsChevronDoubleLeft size="12" color="#141414" />
          <Link to="/whitedomain" style={{ fontSize: '1.2rem' }}>화이트 도메인 바로가기</Link>
        </BackPageButton>
        <AContents>
          <AContentsHead>
            <AContentsRow>
              <AContentsHeadCell>사이트명</AContentsHeadCell>
              <AContentsHeadCell>도메인</AContentsHeadCell>
              <AContentsHeadCell>설명</AContentsHeadCell>
            </AContentsRow>
          </AContentsHead>
          <AContentsBody>
            <AContentsRow>
              <AContentsBodyCell>
                <WhiteDomainInput
                  id="sitename"
                  name="sitename"
                  type="text"
                  onChange={() => { }}
                  placeholder="사이트명을 입력해주세요."
                />
              </AContentsBodyCell>
              <AContentsBodyCell>
                <WhiteDomainInput
                  id="domain"
                  name="domain"
                  type="text"
                  onChange={() => { }}
                  placeholder="도메인을 입력해주세요."
                />
              </AContentsBodyCell>
              <AContentsBodyCell>
                <WhiteDomainInput
                  id="instruction"
                  name="instruction"
                  type="text"
                  onChange={() => { }}
                  placeholder="페이지 설명을 입력해주세요."
                />
              </AContentsBodyCell>
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
          onClick={onApprove}
        >
          승인요청
        </BaseButton>
      </ButtonWrapper>
    </>
  );
};

export default WhiteDomainPost;
