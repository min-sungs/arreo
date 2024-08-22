import React from 'react';
import styled from 'styled-components';
// 테이블 헤더
const BContentsHead = styled.thead`
  width: 20%;
  display: flex;
  border-right: 1px solid #a1a1a1;
`;

// 테이블 행
const BContentsRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// 테이블 헤더 셀
const BContentsHeadCell = styled.td`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.4rem;
`;
const CallingNumberTableHead = ({ radioValue }: { radioValue: String }) => {
  return (
    <BContentsHead>
      <BContentsRow>
        <BContentsHeadCell>등록할 발신번호</BContentsHeadCell>
        <BContentsHeadCell>결과통지번호</BContentsHeadCell>
        <BContentsHeadCell>등록할 서류</BContentsHeadCell>
        <BContentsHeadCell>메모</BContentsHeadCell>
      </BContentsRow>
    </BContentsHead>
  );
};

export default CallingNumberTableHead;
