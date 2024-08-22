import styled from 'styled-components';

export const TrashBoxWrap = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
`

/* Beam 뒷배경 */
export const TrashBoxPopupBeam = styled.div`
  position:absolute;
  z-index: 9002;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

/* Beam 내부에 있는 팝업 껍데기 */
export const TrashBoxPopup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9003;
  padding: 28px;
  width: 56.35%;
  height: 820px;
  max-height: 820px;
  border-radius: 10px;
  background-color: #F8F9FD;
  overflow: hidden;
  box-sizing: border-box;
  /* 휴지통 삭제 건수, 닫기 버튼 영역 */
  .trashBoxHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    div {
      &:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
        font-weight: 600;
        h6 {
          margin-left: 10px;
          color: #191919;
        }
        span {
          color: #8c8c8c;
        }
      }
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
  /*  */
  form {
    .trashBoxFunZone {
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:10px;
      div {
        gap:6px;
      }
      .trashBoxFunBtnGroup {
        display:flex;
        button {
          width:112px;
          height:30px;
          border-radius:50px;
          background-color:#ebebf3;
          box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
        }
      }
      .trashBoxFunRightZone {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:6px;
      }
    }
  }
  /* ul 중첩 CSS 전역 적용 */
  ul {
    /* 공통 li css */
    li {
      /* 크기 조절 */
      &.w5 {
        width: 5%;
      }
      &.w10 {
        width: 10%;
      }
      &.w15 {
        width: 15%;
      }
      &.w20 {
        width: 20%;
      }
      &.w25 {
        width: 25%;
      }
      &.w30 {
        width: 30%;
      }
      &.w40 {
        width: 40%;
      }
      label {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        input {
          margin: 0;
        }
      }
    }
  }
`;

/* tableHead Zone 그룹, 이름, 연락처, 이메일, 메모 */
export const TableHead = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    border-radius: 5px;
    background-color: #efeff3;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.06);
    /* TableHead 전용 li css */
    li {
      position: relative;
      height: 36px;
      line-height: 36px;
      font-size: 1.4rem;
      font-weight: 600;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #191919;
    }
  }
`;
/* tableWrap */
export const TableWrap = styled.div``;

/* tableBody Zone */
export const TableBody = styled.div`
  height: 628px;
  overflow-y: auto;
  box-sizing: border-box;
  /* WebKit (Chrome, Safari) 스크롤바 스타일 */
  &::-webkit-scrollbar {
    padding-right: 6px;
    width: 6px;
    background-color: #D6D6DC;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #98999A; /* 스크롤바 썸의 배경색 */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #333333; /* 스크롤바 썸의 호버 배경색 */
  }

  /* Firefox 스크롤바 스타일 */
  scrollbar-width: 6px;
  scrollbar-color: #6d6c6d;

  &.active {
    padding-right: 6px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    border-radius: 5px;
    background-color: #efeff3;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.06);
    /* TableBody 전용 li css */
    li {
      position: relative;
      height: 37px;
      line-height: 37px;
      font-size: 1.3rem;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      &:nth-child(3) {
        border-left: 1px solid #F8F9FD;
        border-right: 1px solid #F8F9FD;
      }
      &:nth-child(5) {
        border-left: 1px solid #F8F9FD;
        border-right: 1px solid #F8F9FD;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  // 셀렉트 박스
  position: relative;
  width: 112px;
  height: 30px;
  border-radius: 15px;
  background-color: #ebebf3;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  > button {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 15px;
    background-color:#EBEBF3;
    color: #191919;
    svg {
      &.active {transform:rotate(180deg);}
    }
    &.active {
      border-radius:1.5rem 1.5rem 0 0;
      &::before {position:absolute;left:0;bottom:0; content:""; width:100%;height:1px;background-color:rgba(0, 0, 0, 0.7);}
    }
  }
  /* 자식 태그 포괄적으로 CSS 적용 */
  button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const SelectOptions = styled.ul`
  // 셀렉트 옵션 박스
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 20;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  background-color:#EBEBF3;
  overflow: hidden;
  li {
    height: 30px;
    button {
      padding: 0 16px;
      border-radius: 0;
      box-shadow: none;
      text-align: left;
      color: #191919;
    }
    &:hover {
      button {
        position: relative;
        background-color: #fff;
        font-weight: 700;
        &::before {
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          width: 2px;
          height: 100%;
          background-color: #0D42E5;
        }
      }
    }
  }
`;

// 검색 input Wrap
export const InputBox = styled.div`
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  height: 30px;
  border-radius: 50px;
  background-color: rgb(235, 235, 243);
  box-sizing: border-box;
  overflow: hidden;
  button {
    width: auto;
    height: 22px;
    background-color: none;
    border: none;
    border-radius: 0;
  }
`;

// 검색 input
export const SearchInput = styled.input`
  width: 200px;
  transform-origin: right center;
  background-color: rgb(235, 235, 243);
  outline: none;
  border: none;
  color: #191919;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
  &::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(79, 79, 79, 0.3);
  }
`;
