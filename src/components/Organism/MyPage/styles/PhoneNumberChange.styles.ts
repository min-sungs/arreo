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
  display: flex;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const AContentsBody = styled.tbody`
  width: 80%;
`;
// 테이블 행
export const AContentsRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// 테이블 헤더 셀
export const AContentsHeadCell = styled.td`
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
export const AContentsBodyCell = styled.td`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.25rem 1rem 1.25rem 2rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 버튼 컨테이너
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
// 연락처 인풋 워랩
export const PhonenumberWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
// 연락처 입력인풋
export const FirstPhoneumberInput = styled.input`
  height: 100%;
  width: 5%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 1.3rem;
  color: #000000;
  font-weight: lighter;
  ::placeholder {
    color: #a1a1a1;
  }
`;
export const SecondPhoneumberInput = styled.input`
  height: 100%;
  width: 5%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
  ::placeholder {
    color: #a1a1a1;
  }
`;
// 통합 셀렉트
export const Selected = styled.select`
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
`;
