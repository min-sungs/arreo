import styled, { keyframes } from 'styled-components';

export const MessageSendSystemWrap = styled.div`
  /* border: 1px solid #000; */
  width: 100%;
  height: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 0 1.8rem;
`;

export const MessageSendSystemInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const MessageSendSystemTitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.7rem;
`;

export const MessageSendSystemTitle = styled.h1`
  color: #141414;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0 0 1.5rem 0;
`;

export const AddMessageNumber = styled.input`
  border-radius: 0.5rem;
  width: 65%;
  height: 4rem;
  border: 0;
  outline: 0;
  appearance: none;
  box-shadow:
    inset 1px 1px 2px #babecc,
    inset -1px -1px 2px #f1f3f5;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 0 0.5rem 2rem;
  box-sizing: border-box;
  border-radius: 1rem;
  font-size: 1.5rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    box-shadow:
      inset 2px 2px 5px #babecc,
      inset -5px -5px 10px #fff;
  }
`;

export const MessageSendSystemBody = styled.div`
  width: 100%;
  height: 25%;
  box-sizing: border-box;
`;

export const SendNumberWrap = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 3px;
  background-color: #f5f5f5;

  box-sizing: border-box;
  overflow-y: auto;
`;
export const SendNumberList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  /* WebKit (Chrome, Safari) 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6d6c6d; /* 스크롤바 썸의 배경색 */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #333333; /* 스크롤바 썸의 호버 배경색 */
  }

  /* Firefox 스크롤바 스타일 */
  scrollbar-width: 6px;
  scrollbar-color: #6d6c6d;

  /* Firefox 스크롤바 썸 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color: #6d6c6d;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #333333;
  }
`;

export const MessageSizeCheck = styled.span`
  display: block;
  margin: 0 0 0.5rem 1rem;
  font-size: 1.3rem;
  color: #141414;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MessageSendSystemFooter = styled.div`
  /* border: 1px solid #000; */
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export const MessageButtonSection = styled.div`
  width: 100%;
  margin: 2rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MessageSendSystemCheckBoxWarp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const MessageButtonSectionLeft = styled.div``;

// 개별리스트 드롭다운 만들기
/* 드롭다운 Styled */

// 드롭다운 애니메이션
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// 드롭다운 버튼 스타일
export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  color: #141414;
  font-weight: 600;
  animation: ${fadeIn} 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;
// 그룹이름, 삭제버튼 워랩
export const GroupNmDelBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: start;
`;
// 드롭다운 목록이 될 그룹 리스트 관리 디브
export const DropdownBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 0.4rem;
`;
// 그룹 하위리스트 정렬위한 디브
export const GrouplistWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: row;
  color: #141414;
  font-weight: 600;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
// 하위리스트 개별 디브
export const Grouplist = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  gap: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    color: blue;
  }
`;
// 하위리스트 이름 디브
export const NameBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
`;
// 하위리스트 번호 디브
export const NumberBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
`;
// 전송 그룹 삭제 버튼
export const DeleteButton = styled.div`
  width: auto;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

// 개별 추가하는 인풋
export const AddNumberItemInput = styled.input`
  width: 40%;
  padding: 0.5rem 1.5rem;
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

export const AddItemIconButton = styled.button`
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  background: transparent;
`;

export const CallerNumberSelectBox = styled.select``;
export const MesssageTypeBlock = styled.div`
  display: flex;
  align-items: center;
`;

// 예약전송시 나오는 컴포넌트

export const MessageTypeRsv = styled.div``;

// 이미지 첨부
export const ShowFileImage = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
  :hover {
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 340px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
`;
export const DeleteIcon = styled.div``;

export const RepeatMessageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RepeatLabel = styled.label`
  margin-right: 10px;
`;
