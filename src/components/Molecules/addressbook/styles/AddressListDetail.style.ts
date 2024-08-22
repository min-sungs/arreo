import styled from 'styled-components';

export const DetailButtonWrap = styled.div``;
// 테이블
export const AddressListItemTable = styled.table`
  width: 500px;
  height: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;
export const AddressListItemTbody = styled.tbody``;
export const AddressListItemTr = styled.tr``;

// 테이블 헤더 열
export const AddressListItemColumnTh = styled.th`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  background-color: #f2f2f2;
`;

// 테이블 바디 셀
export const AddressListItemTd = styled.td`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
`;

// 버튼 워랩
export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

// 주소 인풋, 버튼 워랩
export const AddressBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
`;
