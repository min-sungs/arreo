import styled from 'styled-components';

/* SendResult.tsx */
export const SendResultWrap = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:#F8F9FD;
`
/* 왼쪽 구역 */
export const SendResultLeftZone = styled.div`
  padding:0 2.8rem 0 5%;
  width:75%;
  box-sizing:border-box;
  @media screen and (max-width:1800px) {
    width:70%;
  }
  @media screen and (max-width:1440px) {
		width: 100%;
		padding: 0 5%;
	}
  /* Logo */
  h1 {
    font-size:2.5rem;
    font-weight:600;
    text-indent:1rem;
    color: #000;
  }
  /* 전송결과 상세페이지 텍스트 */
  h2 {
    margin-bottom:3.4rem;
    text-indent:2rem;
    font-size:1.6rem;
    font-weight:600;
    color:#191919;
  }
`
/* 전송결과 상세내용 구역 Wrap */
export const SendResultLeftDataView = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:2rem;
  
  > div {
    position:relative;
    width:70%;
    
  }
  .messageContent {
    position:relative;
    display:flex;
    gap:3rem;
    padding:1.4rem;
    height:280px;
    line-height:3rem;
    font-size: 1.3rem;
    font-weight:500;
    color:#191919;
    border-radius:20px;
    background-color:rgba(239, 239, 243, 0.50);
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    box-sizing:border-box;
    img {width:47%;object-fit:contain;}
    p {
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      padding-right:1rem;
      max-height:calc(100% - 17px);
      box-sizing:border-box;
      overflow-y:auto;
      word-break: break-all;
      // overflow 스크롤 디자인
      ::-webkit-scrollbar{
        width:4px;
        background-color:#D6D6DC;
        border-radius:4rem;
      }
      /* scroll thumb */
      ::-webkit-scrollbar-thumb{
        background-color:#98999A;

        border-radius:4rem;
      }
    }
    /* 메시지 데이터 출력 */
    .byteWrap {
      position:absolute;
      right:15px;
      bottom:10px;
      line-height:1;
      font-size:1.3rem;
      font-weight:700;
      color:#0D42E5;
      text-align:right;
    }
  }

  /* 전송 데이터 출력  */
  dl {
    width:30%;
    border-radius:20px;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    overflow:hidden;
    div {
      display:flex;
      align-items:center;
      height:40px;
      border-bottom:1px solid #F8F9FD;
      box-sizing:border-box;
      &:last-child {border:none;}
      dt {
        display:flex;
        align-items:center;
        justify-content:center;
        width:36.75%;
        height:100%;
        font-size:1.4rem;
        font-weight:600;
        background-color:rgba(239, 239, 243, 0.60);
        color:#191919;
      }
      dd {
        display:flex;
        align-items:center;
        padding-left:2rem;
        width:63.25%;
        height:100%;
        font-size:1.3rem;
        font-weight:500;
        background-color:rgba(239, 239, 243, 1);
      }
      @media screen and (max-width:1600px) {
        dt, dd {font-size:1.3rem;}
      }
    }
  }
`


/* 전송결과 테이블 Wrap */
export const SendResultTable = styled.div`
  margin-bottom: 50px;
  form {
    /* 연락처, 검색, 이름 / Select, input Wrap */
    .headFunWrap {
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin:4.4rem 0 1rem 0;
      div {
        /* Left / Select, input */
        &:nth-child(1) {
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:0.6rem;
        }
        /* Right / Select */
      }
    }
    /* 페이징, 장기보관함 / 재전송 Wrap */
    .footFunWrap {
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:26rem;
      margin-top:2rem;
      //.sendResultPageing {
      //  display:flex;
      //  align-items:center;
      //  justify-content:space-between;
      //  button {
      //    padding:0;
      //    border:none;
      //    background-color:transparent;
      //    outline:none;
      //    cursor:pointer;
      //  }
      //  > button {
      //    display:flex;
      //    align-items:center;
      //    justify-content:space-between;
      //    height:13px;
      //    &:first-child {margin-right:1.8rem;}
      //    &:last-child {margin-left:1.8rem;}
      //  }
      //  ol {
      //    display:flex;
      //    align-items:center;
      //    justify-content:space-between;
      //    gap:1.8rem;
      //    li {
      //      width:3.8rem;
      //      text-align:center;
      //      border-radius:2rem;
      //      border:1px solid #919091;
      //      button {width:100%;height:100%;color:#919091;}
      //      &.active {
      //        border: 1px solid rgba(40, 0, 223, 0.60);
      //        button {color:#0D42E5;}
      //      }
      //    }
      //  }
      //}
      .reuseFunBtnWrap {position:absolute;right:0;display:flex;gap:0.7rem;}
    }
  }
  .sendListWrap {
    /* List 공통 ul css */
    .sendHeadList {}
    ul {
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:0.6rem;
      border-radius:5px;
      background-color:#EFEFF3;
      box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.06);

      &.sendHeadList {
        li {
          height:37px;
          line-height:37px;
          strong {
            font-size:1.4rem;
            font-weight:600;
          }
        }
      }
      /* 공통 li css */
      li {
        display:flex;
        align-items:center;
        justify-content:center;
        height:36px;
        font-size:1.3rem;
        font-weight:500;
        color:#191919;
        &.w10 {width:10%;}
        &.w20 {width:20%;}
        &.w30 {width:30%;}
        /* 수신인 표기 데이터 className */
        &.myDataText {
          span {
						width: 50%;
						text-align: center;
            /* &:first-child {margin-right:5rem;} */
          }
        }
        /* List 날짜 표기 데이터 className */
        &.dateText {
          border-left:1px solid #F8F9FD;
          border-right:1px solid #F8F9FD;
        }
      }
    }
    /* Body List */
    .sendBodyListWrap {
      ul {
        &:last-child {margin-bottom:0;}
      }
    }
  }
`
export const SelectWrapper = styled.div` // 셀렉트 박스
  position:relative;
  height:3rem;
  border-radius:1.5rem;
  background-color:#EBEBF3;
  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  > button {
    position:relative;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 16px;
    font-size:1.2rem;
    border-radius:1.5rem;
    color:#191919;
    &.active {
      svg {transform:rotate(180deg);}
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
    border-radius:50px;
    border:none;
    background:rgb(235, 235, 243);
    box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
    outline:none;
    cursor:pointer;
  }
  /* @media screen and (max-width:1440px) {
    width:6.5rem;
  } */
`

export const SelectOptions = styled.ul` // 셀렉트 옵션 박스
  position:absolute;
  top:3rem;
  left:0;
  z-index:1;
  width:100%;
  box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  background-color:rgb(244, 244, 247);
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
`
// 검색 input Wrap
export const InputBox = styled.div`
  padding:0.8rem 1.0rem;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:240px;
  height:30px;
  border-radius:50px;
  background-color:rgb(235, 235, 243);
  box-sizing:border-box;
  overflow:hidden;
  button {
    width:auto;
    height:22px;
    background-color:none;
    border:none;
    border-radius:0;
  }
`;

// 검색 input 
export const SearchInput = styled.input`
  width: 200px;
  transform-origin: right center;
  background-color:rgb(235, 235, 243);
  outline:none;
  border:none;
  color:#191919;
  font-size:1.2rem;
  font-weight:600;
  font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
  &::placeholder {
    font-size:1.2rem;
    font-weight:600;
    color:#191919;
  }
`;

/* 2024.02.02 18:10 기준 */

