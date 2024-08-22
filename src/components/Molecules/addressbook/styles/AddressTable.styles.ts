import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 17rem);
  overflow: auto;
`;

export const TableSheet = styled.table`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-collapse: collapse;
`;

export const TableHeadWrap = styled.thead`
  width: 100%;
  height: 32px;
  border-bottom: 1px solid #000;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const TableBodyDiv = styled.tbody`
  width: 100%;
`;
export const TableBodyWrap = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableHeader = styled.th`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const SortMenuWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #141414;
  & :hover {
    cursor: pointer;
    color: #6d6c6d;
  }
`;

export const CheckBoxWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TableHeaderRow = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableRow = styled.td`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  font-size: 1.3rem;

  &:hover {
    background-color: #eeeeee !important;
  }
`;

export const TableCell = styled.div`
  width: 100%;
  height: 1.53em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0rem;
  color: #141414;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  && span {
    padding: 0rem 1rem;
  }
  &:last-child {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

// 테이블 개별 추가 수정 삭제 워랩
export const TableButtonWrap = styled.tr`
  position: absolute;
  right: 0;
  display: flex;
  gap: 1rem;
`;

// 개별 추가 워랩
export const ItemAddWrap = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
`;

// 개별 추가 폼
export const ItemAddForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

// 개별 추가 셀렉트
export const GroupSelect = styled.select`
  width: 20%;
  padding: 0.5rem;
  margin-left: 2rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
`;

// 개별 추가 인풋
export const ItemAddInput = styled.input`
  width: 24%;
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

// 휴대폰번호 추가 인풋
export const ItemAddPhoneInput = styled.input`
  width: 17%;
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

// 이메일 추가 인풋
export const ItemAddEmailInput = styled.input`
  width: 23%;
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

// 베이스버튼 워랩
export const BaseButtonWrap = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

// 수정 버튼 폼
export const ItemEditForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// 수정 워랩
export const ItemEditWrap = styled.td`
  width: 100%;
`;

// 수정 아이템Select
export const ItemEditGroupSelected = styled.select`
  width: 20%;
  padding: 0rem 0.5rem;
  margin-right: 1rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
`;

// 수정 아이템Input
export const ItemEditInput = styled.input`
  width: 24%;
  padding: 0rem 0.5rem;
  margin-right: 1rem;
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

// 페이지네이션
export const PainationInner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
