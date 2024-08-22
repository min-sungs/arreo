import styled from 'styled-components';

// 테이블을 감싸는 컨테이너
export const AWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const AContents = styled.table`
  /* display: flex;
  flex-direction: row; */
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
  width: 100%;
`;
// 테이블 행
export const AContentsRow = styled.tr`
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
`;
// 테이블 헤더 셀
export const AContentsHeadCell = styled.th`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 20%;
  padding: 1.2rem;
  font-weight: 600;
  border-right: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.4rem;
  vertical-align: middle;
`;
// 테이블 바디 셀
export const AContentsBodyCell = styled.td`
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  border-bottom: 1px solid #d1d1d1;
  width: 80%;
  padding: 1.25rem;
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
  /* display: flex;
  flex-direction: row; */
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
  width: 100%;
`;
// 테이블 행
export const BContentsRow = styled.tr`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
`;
// 테이블 헤더 셀
export const BContentsHeadCell = styled.th`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* flex: 1; */
  width: 20%;
  padding: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  font-size: 1.4rem;
  vertical-align: middle;
`;
// 테이블 바디 셀
export const BContentsBodyCell = styled.td`
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  width: 80%;
  padding: 1.2rem 1.2rem 1.2rem 2rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 테이블을 감싸는 컨테이너
export const CWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 4rem 0;
  gap: 2rem;
`;
// 테이블 요소
export const CContents = styled.table`
  /* display: flex;
  flex-direction: row; */
  border-top: 2px solid #a1a1a1;
  background-color: transparent;
`;
// 테이블 헤더
export const CContentsHead = styled.thead`
  width: 20%;
  display: flex;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디
export const CContentsBody = styled.tbody`
  width: 100%;
`;
// 테이블 행
export const CContentsRow = styled.tr`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
`;
// 테이블 헤더 셀
export const CContentsHeadCell = styled.th`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 20%;
  padding: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  font-size: 1.4rem;
  vertical-align: middle;
`;
// 테이블 바디 셀
export const CContentsBodyCell = styled.td`
  /* height: 100%; */
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  width: 80%;
  padding: 1.25rem 1rem 1.25rem 2rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
  vertical-align: middle;
`;
// 버튼 컨테이너

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
// 이메일박스 폼
export const EmailBoxForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

// 아레오 이메일 지정 체크박스
export const AgreeCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
// 이메일 입력인풋
export const EmailInput = styled.input`
  height: 100%;
  width: 15%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
  ::placeholder {
    color: #a1a1a1;
  }
`;
// 주소창 컨테이너
export const AddressContainer = styled.div`
  width: 100%;
`;
// 주소창 이름, 인풋 워랩
export const AddressWrap = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
`;
// 주소창 이름 디브
export const InputName = styled.div`
  width: 6%;
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
// 닉네임 입력 디브
export const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > span {
    line-height: 20px;
  }
`;
// 닉네임 입력 인풋
export const NicknameInput = styled.input`
  height: 100%;
  width: 50%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
  ::placeholder {
    color: #a1a1a1;
  }
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
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
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
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
  ::placeholder {
    color: #a1a1a1;
  }
`;
// 체크박스 워랩
export const CCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & > fieldset {
    display: flex;
    align-items: center;
  }

  & label {
    display: flex;
    align-items: center;
  }
  & label:nth-child(2) {
    margin-left: 5px;
  }

  & input {
    margin-top: 2px;
  }
`;
// 광고문자 전체 워랩
export const AdsmsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > fieldset {
    display: flex;
    align-items: center;
  }

  & label {
    display: flex;
    align-items: center;
  }
  & label:nth-child(2) {
    margin-left: 5px;
  }

  & input {
    margin-top: 2px;
  }
`;
// 광고문자 수신제한 워랩
export const LimitedWrap = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
// 광고문자 수신제한 인풋
export const LimitedInput = styled.input`
  width: 15%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
  ::placeholder {
    color: #a1a1a1;
  }
`;
//
export const AgreeCheckbox = styled.input``;

// 통합 셀렉트
export const Selected = styled.select`
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 1.4rem;
  color: #000000;
  /* font-weight: lighter; */
`;

export const BirthDateWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;
