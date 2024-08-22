import styled, { css } from 'styled-components';

export const Container = styled.div`
  width:calc(100% - 29rem);
  /* height:calc(100vh - 60px - 2rem); */
  
  @media screen and (max-width:1800px) {
    width:80%;
  }
`;

export const TableWrap = styled.div`
  width:100%;
  /* height: calc(100vh - 30rem); */
  /* min-height:calc(100vh - 60px); */
  height:calc(100vh - 60px - 2rem);

  overflow: auto;
  // overflow 스크롤 디자인
  ::-webkit-scrollbar {
      width:4px;
      background-color:#D6D6DC;
      border-radius:4rem;
  }
  /* ::-webkit-scrollbar:horizontal {height:4px;} */
  /* scroll thumb */
  ::-webkit-scrollbar-thumb {
      background-color:#98999A;
      border-radius:4rem;
  }
`;

export const TableInner = styled.div`
  margin:0 auto;
  background-color:#F8F9FD;
`;

export const TableSheet = styled.table`
  width:100%;
  max-height: 700px;
  border-collapse: collapse;
  table-layout:auto;
  caption {display:none;}
`;

export const TableHeadWrap = styled.thead`
  height:36px;
  background-color:#EFEFF3;
  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.06);
  box-sizing:border-box;
  border-bottom:1px solid;
  tr {
    border-bottom:1px solid gray;
    th {
      height:36px;
      text-align:center;
      > div {
        display:flex;
        align-items:center;
        justify-content:center;
        height:36px;
        padding:0 20px;
        word-break:keep-all;
      }
      
    }
  }
`;
export const TableBodyWrap = styled.tbody`
  height:36px;
  background-color:#EFEFF3;
  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.06);
  box-sizing:border-box;
  tr {
    td {
      height:36px;
      text-align:center;
      > div {
        display:flex;
        align-items:center;
        justify-content:center;
        height:36px;
      }
      input {
        &::placeholder {
          font-weight:500;
          color:#AFAFB1;
        }
      }
    }
  }
`;

export const TableHeader = styled.th`
  
  font-weight:600;
  font-size:1.2rem;
  text-align:center;
  color:#141414;
  div {
    font-size:1.2rem;
    text-align:center;
    color:#141414;
  }
`;

export const TableLastHeader = styled.th`
  font-weight:600;
  font-size: 1.2rem;
  color: #141414;
`;
/* Start GridTable Layout */
export const CustomTableWrap = styled.div`
  
  height:100%;
  overflow:auto;
  .w5 {width:5%;}
  .w10 {width:10%;}
  .w15 {width:15%;}
  .w20 {width:20%;}
  .w25 {width:25%;}
  .w30 {width:30%;}
  .w35 {width:35%;}
  .w40 {width:40%;}

  .CustomTableTr {
    display:flex;
    height:36px;
    
    .CustomItem  {
      @media screen and (min-width:1921px) and (max-width:3000px) {
        
      }
      display:flex;
      align-items:center;
      justify-content:center;
      height:100%;
      text-align:center;
      background-color:#F3F3F4;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.06);
      &:first-child {min-width:52px;border-radius:5px 0 0 5px;}
      &:nth-child(2) {min-width:173px;}
      &:nth-child(3) {min-width:132px;}
      &:nth-child(4) {min-width:195px;}
      &:nth-child(5) {min-width:255px;}
      &:nth-child(6) {min-width:262px;}

      &:nth-child(n+7) {min-width:200px;}
      &:last-child {border-radius:0 5px 5px 0;}
    }
  }
`

export const CustomTableHead = styled.div`

  margin-bottom:0.6rem;
  border-radius:5px;
  
  .CustomItem {
    &:first-child {
      text-indent:-9999px;
    }
  }
`

export const CustomTableBdoy = styled.div`
  .CustomTableTr {
    margin-bottom:0.6rem;
    &:last-child {margin-bottom:0;}
    .CustomItem {
      &:first-child {
       
      }
    }
  }
`
/* End GridTable Layout */

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
    border-radius:1.5rem;
    color:#191919;
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
  overflow:hidden;
  li {
    height:30px;
    button {
      padding:0 16px;
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

export const TableHeaderRow = styled.tr`
  
`;

export const TableRow = styled.tr`
  

  &:hover {
    background-color: #eeeeee !important;
  }
`;

export const GroupSelect = styled.select``;

export const TableCell = styled.td`

  box-sizing: border-box;
`;

export const ToggleTableCell = styled(TableCell) <{ display?: boolean }>`
  ${(props: any) =>
    !props.display &&
    css`
      display: none;
  `};
  input {
    height:100%;
    background-color:transparent;
    border:1px solid transparent;
    &:focus {
      border:1px solid #0D42E5;
    }
  }
`;

export const TableLastCell = styled.td`

  box-sizing: border-box;

`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const SelectAllWrap = styled.div`

`;

export const DeleteButton = styled.div`
  display: table;
  margin: auto;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
