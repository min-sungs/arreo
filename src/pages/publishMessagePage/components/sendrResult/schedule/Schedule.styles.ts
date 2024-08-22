import styled from 'styled-components';

/* Schedule.tsx */
export const SendWrap = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#F8F9FD;
`

export const ScheduleWrap = styled.div`
    margin-bottom:50px;
`

/* 왼쪽 구역 */
export const ScheduleLeftZone = styled.div` 
    padding:19px 28px 0 94px;
    width:75%;
    box-sizing:border-box;
    @media screen and (max-width:1800px) {
        width:70%;
    }
    /* Logo */
    h1 {
        font-size:2.5rem;
        font-weight:600;
        text-indent:10px;
        color: #000;
    }
    /* 예약전송 상세페이지 텍스트 */
    h2 {
        margin:34px 0 20px 0;
        text-indent:20px;
        font-size:1.6rem;
        font-weight:600;
        color:#191919;
    }
`
/* 예약전송 상세내용 구역 Wrap */
export const ScheduleLeftDataView = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    gap:20px;
    
    
    > div {
        position:relative;
        &:first-child {
            width:70%;
        }
    }
    .messageContent {
        display:flex;
        gap:30px;
        padding:14px;
        height:100%;
        line-height:30px;
        font-size:1.3rem;
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
            padding-right:10px;
            max-height:322px;
            line-height:30px;
            font-size:1.3rem;
            font-weight:500;
            box-sizing:border-box;
            overflow-y:auto;
            word-break: break-all;
            // overflow 스크롤 디자인
            ::-webkit-scrollbar{
                width: 4px;
                background-color: #D6D6DC;
                border-radius:40px;
            }
            /* scroll thumb */
            ::-webkit-scrollbar-thumb{
                background-color:#98999A;
                
                border-radius:40px;
            }
        }
        textarea {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:100%;
            padding-right:10px;
            max-height:calc(100% - 17px);
            line-height:30px;
            font-size:1.3rem;
            font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
            font-weight:500;
            background-color:transparent;
            border:none;
            outline:none;
            box-sizing:border-box;
            overflow-y:auto;
            resize:none;
            // overflow 스크롤 디자인
            ::-webkit-scrollbar{
                width: 4px;
                background-color: #D6D6DC;
                border-radius:40px;
            }
            /* scroll thumb */
            ::-webkit-scrollbar-thumb{
                background-color:#98999A;
                
                border-radius:40px;
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
                padding-left:20px;
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
    .scheduleAlertText {
        position:absolute;right:0;bottom:-20px;
        font-size:1.1rem;
        font-weight:500;
        color:rgba(25, 25, 25, 0.80);
            strong {
                font-size:1.1rem;
                font-weight:700;
                color:#0D42E5;
            }  
        }
`

// 데이터 체크 박스
export const DataScheduleBox = styled.div`

    width:30%;
    height:100%;
    border-radius:20px;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    overflow:hidden;

`
export const DataScheduleBoxWrap = styled.div`
    display:flex;
    border-bottom:1px solid #F8F9FD;
    box-sizing:border-box;
    &:last-child {border:none;}
    .scheduleDataTitle {
        display:flex;
        align-items:center;
        justify-content:center;
        width:36.75%;
        font-size:1.4rem;
        font-weight:600;
        background-color:rgba(239, 239, 243, 0.60);
        color:#191919;
    }
    .scheduleDataContent {
        display:flex;
        align-items:center;
        padding:0 20px;
        width:63.25%;
        font-size:1.3rem;
        font-weight:500;
        background-color:rgba(239, 239, 243, 1);
        
        /* Select 박스 */
        .selectZone {display:flex;align-items:center;gap:6px;
            
        }
        input {font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;}
        &.scheduleSelectWrap {
            > div {display:flex;margin-bottom:10px;
                &:last-child {margin-bottom:0;width:100%;}
            }
        }
    }
    > div {padding:17px 0;}
`

/* 예약전송 테이블 Wrap */
export const ScheduleTable = styled.div`
    form {
        /* 연락처, 검색, 이름 / Select, input Wrap */
        .headFunWrap {
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:44px 0 10px 0;
            div {
                /* Left / Select, input */
                &:nth-child(1) {
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:6px;
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
            gap:260px;
            margin-top:20px;
            //.sendResultPageing {
            //    display:flex;
            //    align-items:center;
            //    justify-content:space-between;
            //    button {
            //        padding:0;
            //        border:none;
            //        background-color:transparent;
            //        outline:none;
            //        cursor:pointer;
            //    }
            //    > button {
            //        display:flex;
            //        align-items:center;
            //        justify-content:space-between;
            //        height:13px;
            //        &:first-child {margin-right:1.8rem;}
            //        &:last-child {margin-left:1.8rem;}
            //    }
            //    ol {
            //        display:flex;
            //        align-items:center;
            //        justify-content:space-between;
            //        gap:1.8rem;
            //        li {
            //            width:3.8rem;
            //            text-align:center;
            //            border-radius:2rem;
            //            border:1px solid #919091;
            //            button {width:100%;height:100%;color:#919091;}
            //            &.active {
            //                border: 1px solid rgba(40, 0, 223, 0.60);
            //                button {color:#0D42E5;}
            //            }
            //        }
            //    }
            //}
            .reuseFunBtnWrap {position:absolute;right:0;display:flex;gap:7px;}
        }
    }
    .scheduleListWrap {
        /* List 공통 ul css */
        .scheduleHeadList {}
        ul {
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:6px;
            border-radius:5px;
            background-color:#EFEFF3;
            box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.06);
            
            &.ScheduleHeadList {
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
               
            }
        }
        /* Body List */
        .scheduleBodyListWrap {
            ul {
                &:last-child {margin-bottom:0;}
                li {
                    &:nth-child(n+2) {
                        border-left:1px solid #F8F9FD;
                    }
                }
            }
        }
    }
`
export const SelectWrapper = styled.div` // 셀렉트 박스
  position:relative;
  height:30px;
  border-radius:15px;
  background-color:#EBEBF3;
  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  > button {
    position:relative;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 12px;
    font-size:1.2rem;
    border-radius:15px;
    color:#191919;
    &.active {
      svg {transform:rotate(180deg);}
    }
    &.active {
        border-radius:15px 15px 0 0;
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
    top:30px;
    left:0;
    z-index:15;
    width:100%;
    box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
    background:rgb(244, 244, 247);
    overflow:hidden;
    li {
        height:30px;
        button {
            padding:0 12px;
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
  padding:8px 10px;
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

