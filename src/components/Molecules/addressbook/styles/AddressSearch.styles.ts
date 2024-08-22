import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap:0.6rem;
`;

export const SelectWrapper = styled.div` // 셀렉트 박스
  position:relative;
  width:10.5rem;
  height:3.0rem;
  border-radius:5rem;
  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  /* Select Wrap button 태그 바로 선택 */
  > button {
    position:relative;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 12px;
    font-size:1.2rem;
		/* 임시 작업 */
    /* background-color:#EBEBF3; */
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
    width:100%;
    height:100%;
    border:none;
    outline:none;
    cursor:pointer;
  }
  @media screen and (max-width:1800px) {
    width:9rem;
    button {
      padding:0 10px;
      font-size:1.1rem;
    }
  }
  @media screen and (max-width:1440px) {
    button {
      padding:0 8px;
      font-size:1rem;
    }
  }
`;

export const SelectOptions = styled.ul` // 셀렉트 옵션 박스
  position:absolute;
  left:0;
  top:3rem;
  z-index:20;
  width:100%;
  box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  overflow:hidden;
  li {
    height:30px;
    button {
      padding:0 16px;
      font-size:1.2rem;
      border-radius:0;
      box-shadow:none;
      text-align:left;
      color:#191919;
    }
    &:hover {
      button {
        position:relative;
        background-color:#fff;
        font-weight: 700;
        &::before {
          position:absolute;
          left:0;
          top:0;
          content:"";
          width:2px;
          height:100%;
          background-color:#0D42E5;
        }
      }
    }
  }
  @media screen and (max-width:1800px) {
    li {
      button {
        padding:0 10px;
        font-size:1.1rem;
      }
    }
  }
  @media screen and (max-width:1440px) {
    li {
      button {
        padding:0 8px;
        font-size:1rem;
      }
    }
  }
`
export const Select = styled.select`
  transform-origin: right center;
  background-color: transparent;
  border: none;
  outline: none;
  height: 30px;
  color: #a1a1a1;
  font-size: 12px;
  background-color: #e9e9e9;
  option {
    font-size: 14px;
    color: #a1a1a1;
    background-color: #e9e9e9;
  }
`;

export const InputBox = styled.div`
  padding:0.8rem 1.0rem;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:240px;
  height:30px;
  border-radius:50px;
	/* 임시작업 */
  /* background-color:rgb(235, 235, 243); */
	background-color:#fff;
  box-sizing:border-box;
  overflow:hidden;
  button {
    display:inline-block;
    width:auto;
    height:auto;
    background-color:none;
    border:none;
    border-radius:0;
  }
  @media screen and (max-width:1800px) {
    width:18rem;
    button {
      font-size:1.1rem;
    }
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  transform-origin: right center;
	/* 임시 작업 */
  /* background-color:rgb(235, 235, 243); */
	background: #fff;
  outline:none;
  border:none;
  color:#191919;
  font-size:1.2rem;
  font-weight:600;
	font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
  /* font-family: "Noto Sans KR", "Nanum Gothic", Roboto, "Open Sans", sans-serif; */
  &::placeholder {
    font-size:1.2rem;
    font-weight: 400;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
    /* font-family: "Noto Sans KR", "Nanum Gothic", Roboto, "Open Sans", sans-serif; */
    color: rgba(79, 79, 79, 0.30);
  }
  @media screen and (max-width:1800px){
    width:14rem;
    font-size:1.1rem;
    &::placeholder {
      font-size:1.1rem;
      color:#191919;
    }
  }
`;
