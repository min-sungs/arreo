import React from 'react';
import ATitle from '../../Atom/ATitle';
import BaseGuide from '../../Atom/BaseGuide';
import styled from 'styled-components';

const UserNameChange = () => {
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
    justify-content: center;
    align-items: center;
    border-top: 2px solid #a1a1a1;
    border-bottom: 1px solid #d1d1d1;
    background-color: transparent;
    gap: 12rem;
  `;
  // 테이블 헤더
  const AContentsHead = styled.thead``;
  // 테이블 바디
  const AContentsBody = styled.tbody``;
  // 테이블 행
  const AContentsRow = styled.tr`
    display: flex;
    flex-direction: column;
  `;
  // 테이블 헤더 셀
  const AContentsHeadCell = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    font-weight: 600;
    font-size:1.4rem;
  `;
  // 테이블 바디 셀
  const AContentsBodyCell = styled.td`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.25rem;
    font-size:1.3rem;
  `;

  return (
    <>
      <AWrapper>
        <ATitle type="sub" text="명의 변경" color="#0D42E5" />
        <AContents>
          <AContentsHead>
            <AContentsRow>
              <AContentsHeadCell>전화</AContentsHeadCell>
              <AContentsHeadCell>팩스</AContentsHeadCell>
              <AContentsHeadCell>전자메일</AContentsHeadCell>
            </AContentsRow>
          </AContentsHead>
          <AContentsBody>
            <AContentsRow>
              <AContentsBodyCell>015-8504-0006</AContentsBodyCell>
              <AContentsBodyCell>02-3485-6710</AContentsBodyCell>
              <AContentsBodyCell>help@arreo.com</AContentsBodyCell>
            </AContentsRow>
          </AContentsBody>
        </AContents>
      </AWrapper>
      <BaseGuide
        text="본인(현재 아이디 소유자)의 신분증과 명의를 이전 받고자 하시는 분의 신분증 사본을 고객상담실로 보내주셔야 합니다.
                <br />신분증 사본에 본인의 이름과 아이디(휴대폰번호)를 기재하시고, `명의 변경 요청`이라 적어주시기 바랍니다.
                <br />팩스 발송 후 고객상담실에서 내용 확인하여 회원님의 휴대폰으로 연락드린 후 바로 처리해 드리겠습니다. 
                <br />요청하는 개인정보는 고객의 업무처리 요청 및 동의에 따라 해당 업무처리를 위하여만 수집·이용하며, 업무처리 종료시에는 관계법령에 의거, 
                즉시 파기하며 이와 별도로 서비스 처리에 관한 단순 이력은 6개월간 보관 후 파기하오니, 서비스 이용에 참고하시기 바랍니다."
      />
    </>
  );
};
export default UserNameChange;
