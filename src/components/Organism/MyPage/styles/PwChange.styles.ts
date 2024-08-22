import styled from 'styled-components';

// 테이블을 감싸는 컨테이너
export const AWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const AContents = styled.table`
  display: flex;
  flex-direction: row;
  border-top: 2px solid #a1a1a1;
  background-color: transparent;
`;
// 테이블 헤더
export const AContentsHead = styled.thead`
  width: 20%;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const AContentsBody = styled.tbody`
  width: 80%;
`;
// 테이블 행
export const AContentsRow = styled.tr`
  display: flex;
  flex-direction: column;
`;
// 테이블 헤더 셀
export const AContentsHeadCell = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.4rem;
`;
// 테이블 바디 셀
export const AContentsBodyCell = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.25rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 테이블을 감싸는 컨테이너
export const BWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const BContents = styled.table`
  display: flex;
  flex-direction: row;
  border-top: 2px solid #a1a1a1;
  background-color: transparent;
`;
// 테이블 헤더
export const BContentsHead = styled.thead`
  width: 20%;
  display: flex;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const BContentsBody = styled.tbody`
  width: 80%;
`;
// 테이블 행
export const BContentsRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// 테이블 헤더 셀
export const BContentsHeadCell = styled.td`
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
// 테이블 바디 셀
export const BContentsBodyCell = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 버튼 컨테이너
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  & > span {
    font-size: 1.2rem;
  }
`;

// error
export const ValidationError = styled.span`
  font-size: 1.2rem;
  color: red;
  margin-left: 10px;
`;

export const ValidationMessage = styled.span`
  font-size: 1.2rem;
  color: gray;
  margin-left: 10px;
`;
