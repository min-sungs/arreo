import styled from 'styled-components';

export const AddGroupComponent = styled.form`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6px 0 22px;
  height:46px;
  background-color:rgba(243, 243, 244, 0.6);
  box-sizing: border-box;
  svg {
    margin-right:20px;
    overflow:visible;
  }
  &.active {
    border-radius:5px;
    background-color:rgba(243, 243, 244, 0.8);
    box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  }
  input {
    border:none;
    outline:none;
    padding:0 5px;
    width:100%;
    color:rgb(25, 25, 25);
    font-size:1.3rem;
    font-weight:500;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
    /* font-family:'Noto Sans KR', 'Nanum Gothic', Roboto, 'Open Sans', sans-serif; */
    background-color:transparent;
    &::placeholder {
      color:rgba(25, 25, 25, 0.3);
      font-weight:500;
    }
  }
  .addGroupRightWrap {
    display:flex;
    align-items:center;
    justify-content:space-between;
    .addGroupBtnGroup {
      display:flex;
      align-items:center;
      gap:5px;
    }
  }
`;
