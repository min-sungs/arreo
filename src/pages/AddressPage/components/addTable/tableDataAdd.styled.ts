// Component CSS 스타일링
import styled from "@emotion/styled";

export const AddTalbeComponent = styled.div`
    position:absolute;
    left:0;
    top:0;
    z-index:9999;
    padding:10px 16px;
    width:100%;
    border-radius:5px;
    background-color:#EFEFF3;
    box-shadow:0 5px 10px 0 rgba(0, 0, 0, 0.10);
    box-sizing:border-box;
    
    form {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:8px;
        div {
            text-align:center;
            &:first-child {
                /* 연필 이미지 */
                img {padding-top:26px;}
            }
            p {
                margin-bottom:14px;
                font-size:1.4rem;
                font-weight:600;
                color:#191919;
            }
        }   
        .addTableInputWarp {
            input {
                height:30px;
                font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
                text-align:center;
                outline:none;
                border:none;
                border-radius:5px;
                background-color:rgba(255, 255, 255, 0.50);
                box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
                box-sizing:border-box;
                &::placeholder {
                    font-size:1.3rem;
                    font-weight:500;
										font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
                    color:rgba(25, 25, 25, 0.30);
                }
            }
            &:nth-child(3) {input {width:124px;}} /* 이름 */
            &:nth-child(4) {input {width:187px;}} /* 연락처 */
            &:nth-child(5) {input {width:247px;}} /* 이메일 */
            &:nth-child(6) {input {width:214px;}} /* 메모 */

            @media screen and (max-width:2000px) {
                &:nth-child(3) {input {width:80px;}} 
                &:nth-child(4) {input {width:120px;}} 
                &:nth-child(5) {input {width:160px;}} 
                &:nth-child(6) {input {width:140px;}}  
            }
            @media screen and (max-width:1550px) {
                &:nth-child(3) {input {width:80px;}} 
                &:nth-child(4) {input {width:100px;}} 
                &:nth-child(5) {input {width:120px;}} 
                &:nth-child(6) {input {width:100px;}}  
            }
            @media screen and (max-width:1360px) {
                &:nth-child(3) {input {width:70px;}} 
                &:nth-child(4) {input {width:90px;}} 
                &:nth-child(5) {input {width:100px;}} 
                &:nth-child(6) {input {width:90px;}}  
            }
        }
    }
    .rightFunWrap {
        padding-top:27px;
        margin-right:20px;
    }
`

export const SelectWrapper = styled.div` // 셀렉트 박스
    position:relative;
    width:170px;
    height:30px;
    background-color:rgba(255, 255, 255, 0.50);
    border-radius:5px;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    @media screen and (max-width:2000px) {
        width:150px;
        button {
            font-size:1.2rem;
        }
    }
    /* Select Wrap button 태그 바로 선택 */
    > button {
        background-color:transparent;
    }
    button {
        display:flex;
        align-items:center;
        justify-content:space-around;
        width:100%;
        height:100%;
        border:none;
        outline:none;
        cursor:pointer;
    }
  ul {
    position:absolute;
    left:0;
    top:30px;
    z-index:1;
    width:100%;
    li {
        height:30px;
      &:hover {
        button {
          background-color:#2e2323;
          color:#fff;
        }
      }
    }
  }
`
export const SelectOptions = styled.ul` // 셀렉트 옵션 박스
  position:absolute;
  left:0;
  z-index:1;
  width:100%;
  border-radius:0px 0px 5px 5px;
  box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  overflow:hidden;
  li {
    button {
        background-color:rgba(255, 255, 255, 1);
        border-radius:0;
        box-shadow:none;
    }
  }
`