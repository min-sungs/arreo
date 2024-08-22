import styled from "styled-components";

export const LargeBtntopGroup = styled.div`
  display:flex;
  justify-content:space-between;
  > div {
    display:flex;
    justify-content:space-between;
    gap:6px;
    button {
      width:104px;
      height:30px;
      font-size:1.2rem;
      font-weight:600;
      border-radius:50px;
      background:#EBEBF3;
      box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
      color: #191919;
    }
  }
`

export const LargeLeftBtnGroup = styled.div`
  display:flex;
  justify-content:space-between;
  gap:6px;
  button {
    width:104px;
    height:30px;
    font-size:1.2rem;
    font-weight:600;
    border-radius:50px;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    
    &:first-child {
      background-color:#EBEBF3;
      color:#191919;
    }
    &:last-child {
      background-color:#0D42E5;
      color:#fff;
    }
  }
`

export const LargeRightBtnGroup = styled.div`
  display:flex;
  justify-content:space-between;
  gap:6px;
  button {
    width:104px;
    height:30px;
    font-size:1.2rem;
    font-weight:600;
    border-radius:50px;
    background:#EBEBF3;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    color: #191919;
  }
`