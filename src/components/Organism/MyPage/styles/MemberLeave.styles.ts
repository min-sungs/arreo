import styled from 'styled-components';

// 테이블을 감싸는 컨테이너
export const AWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;
// 타이틀 + 텍스트 컨테이너
export const ATitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
// 타이틀 컨테이너
export const ATitleBox = styled.div`
  width: 22%;
`;
// 텍스트 컨테이너
export const TextWrapper = styled.div``;
// 텍스트 타이틀
export const TextBox = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
// 텍스트 요소
export const LiStyle = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  &:nth-child(2) {
    text-indent: -18px;
    margin-left: 18px;
    line-height: 18px;
  }
`;
// 테이블을 감싸는 컨테이너
export const BWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
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
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const BContentsBody = styled.tbody`
  width: 80%;
`;
// 테이블 행
export const BContentsRow = styled.tr`
  display: flex;
  flex-direction: column;
`;
// 테이블 헤더 셀
export const BContentsHeadCell = styled.td`
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
export const BContentsBodyCell = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.25rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 테이블을 감싸는 컨테이너
export const CWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const CContents = styled.table`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 2rem;
`;
export const AgreeList = styled.ol`
  list-style-type: decimal;
`;
export const AgreeItem = styled.li`
  margin-left: 1.3rem;
  margin-bottom: 8px;
  font-size: 1.2rem;
`;
export const AgreeCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & > label {
    font-size: 1.3rem;
    margin-top: -2px;
  }
`;
// 테이블을 감싸는 컨테이너
export const DWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const DContents = styled.table`
  display: flex;
  flex-direction: row;
  border-top: 2px solid #a1a1a1;
  background-color: transparent;
`;
// 테이블 헤더
export const DContentsHead = styled.thead`
  width: 20%;
  display: flex;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const DContentsBody = styled.tbody`
  width: 80%;
`;
// 테이블 행
export const DContentsRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// 테이블 헤더 셀
export const DContentsHeadCell = styled.td`
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
export const DContentsBodyCell = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
export const DTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  & > span {
    font-size: 1.2rem;
  }
`;
// 버튼 컨테이너
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
// 캐쉬,포인트 워랩
export const CashWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
// 잔여캐쉬 디브
export const CashDiv = styled.div``;
// 잔여포인트 디브
export const PointDiv = styled.div``;

// 유효성 검사
export const ValidSpan = styled.span`
  color: red;
`;
