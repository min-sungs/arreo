import styled from "@emotion/styled";

export const PaginationStyle = styled.div`
    .sendResultPaging {
      display:flex;
      align-items:center;
      justify-content:space-between;
      button {
        padding:0;
        border:none;
        background-color:transparent;
        outline:none;
        cursor:pointer;
      }
      > button {
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:13px;
        &:first-child {margin-right:1.8rem;}
        &:last-child {margin-left:1.8rem;}
      }
      ol {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1.8rem;
        li {
          width:3.8rem;
          text-align:center;
          border-radius:2rem;
          border:1px solid #919091;
          button {width:100%;height:100%;color:#919091;}
          &.active {
            border: 1px solid #0D42E5;
            button {color:#0D42E5;}
          }
        }
      }
    }
  `