import styled, { keyframes } from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

// 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  width:290px;
  border-radius:0 6px 0px 0px;
  background-color:#f8f9fd;
  box-sizing: border-box;
  // Footer 반응형 대응
  @media screen and (max-width: 1800px) {
    width:20%;
  }
`;

export const Inner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
`;

export const GroupListGroup = styled.div`
  // Top + middle 영역
  max-height:calc(100vh - 106px);
  
  overflow:hidden;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap:12px;
  padding:0 6px;
  height:46px;
`;

export const GroupCheck = styled.div`
  display:flex;
  align-items:center;
  padding-left:16px;
`;

export const UnderLine = styled.div`
  width:100%;
  height:0.5px;
  background-color:#000;
  margin-top:4px;
`;
export const GroupAll = styled.strong`
  // 전체그룹 / 수정 삭제
  cursor:pointer;
  min-width:max-content;
  height:100%;
  font-weight: 800;
  font-size:1.4rem;
  font-style:normal;
  color: #191919;
  @media screen and (max-width: 1500px) {
    font-size:1.5rem;
  }
`;

export const Buttons = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  button {
    &:first-child {
      margin-right:5px;
    }
  }
  @media screen and (max-width: 1350px) {
    justify-content:flex-start;
    padding-top:10px;
  }
`;

//
export const Middle = styled.div`
  padding:0 6px;
  max-height:calc(100vh - 152px);
  /* max-height:calc(100vh - 198px); */
  overflow-y:auto;
  // overflow 스크롤 디자인
  ::-webkit-scrollbar {
    width:4px;
    background-color:#D6D6DC;
    border-radius:40px;
  }
  /* scroll thumb */
  ::-webkit-scrollbar-thumb {
    background:#98999A;
    border-radius:40px;
  }
  /* @media screen and (max-height: 800px) {
    height: 75%;
  }

  @media screen and (max-height: 620px) {
    height: 67%;
  } */
`;

export const MiddleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom:6px;
  height:37px;
  font-size:1.3rem;
  font-style:normal;
  font-weight:600;
  line-height:normal;
  box-sizing:border-box;
  color:black;
  overflow:hidden;
  transition:none;
  &:last-child {margin-bottom:0;}
  > div {
    display:flex;
    align-items:center;
    padding-left:16px;
    width:100%;
    box-sizing: border-box;
    > input {
      padding:0;
      padding-right:16px;
      height:100%;
      
      color: #191919;
      &:focus {

        border:none;
      }
      &::placeholder {color:#98999A;}
    }
  }
  
`;

export const MiddleListAfterDiv = styled.div`
  height:100%;
  border:1px solid #D6D6DC;
  border-radius:5px;
  background-color:transparent;
  svg {margin-right:20px;overflow:visible;}
  > input {
    padding:0;
    width:100%;
    height:100%;
    background-color:transparent;
    color: #191919;
    &:focus {

      border:none;
    }
    &::placeholder {color:#98999A;}
  }
`

export const MiddleListBasicDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border:1px solid transparent;
`

export const GroupLabel = styled.label`
  display:block;
  padding:6px 0;
  min-width:max-content;
  display:flex;
  align-items:center;
  font-weight:bold;
  font-size:1.5rem;

  &:hover {
    background-color:#ebf2fc;
  }
`;

export const CustomCheckBox = styled.input`
  margin-right:12px;
`;

export const Bottom = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 14px 0 16px;
  height:46px;
  font-weight:500;
  background:#fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
`;

export const BinBtnWrap = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  span {
    font-size:1.3rem;
    font-weight:600;
    color:#191919;
    &.trashCanNum {
      font-weight:600;
      color:#98999A;
    }
  }
`;

/* 전체복원, 비우기 */
export const TrashBoxBtnGroup = styled.div`
  button {
    &:last-child {border:1px solid #98999A;}
  }
`


export const CustomDeleteIcon = styled(DeleteIcon)`
  margin-right:6px;
  font-size:2.6rem;
`;

// 주소록 그룹추가버튼 워랩
export const AddInputForm = styled.form`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  margin-bottom:10px;
`;

// 주소록 그룹추가 인풋
export const AddInput = styled.input`
  background:transparent;
  border:1px solid #919091;
  
`;

// 주소록 그룹수정 워랩
export const EditInputForm = styled.form`
  width:97%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:20px;
`;

// X
// 그룹 리스트 드래그
export const GroupListBody = styled.div`
  width:100%;
  height:95%;
  box-sizing:border-box;
`;

// X
export const GroupListWrap = styled.div`
  width:100%;
  height:100%;
  border-radius:3px;
  box-sizing:border-box;
`;

// X
export const GroupListDrag = styled.div`
  width:100%;
  height:100%;

  /* WebKit (Chrome, Safari) 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width:6px;
  }

  &::-webkit-scrollbar-thumb {
    background:#98999A; /* 스크롤바 썸의 배경색 */
    border-radius:10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background:#333333; /* 스크롤바 썸의 호버 배경색 */
  }

  /* Firefox 스크롤바 스타일 */
  scrollbar-width:6px;
  scrollbar-color:#6d6c6d;

  /* Firefox 스크롤바 썸 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color:#98999A;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color:#333333;
  }
`;

export const GroupNameBox = styled.div`
  display:flex;
  align-items:center;
  width:78%;
  height:100%;
  font-weight:600;
  /* display: flex; */
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  color:#191919;
  cursor:pointer;
  span {
    color:#98999A;
  }
`;
