import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* rgb(226, 226, 235) */
  /* background-color: #f5f5f5; */
`;

export const ContainerX = styled.div`
  // 전체 와이드 max-
  // max-width: 1920px;
  width: 100%;
  // margin: 0 auto;
`;

export const GobackHistoryWrap = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  padding: 0 0 10px 0;
  h1 {
    width:290px;
    font-size:2.5rem;
    font-weight:600;
    font-family:'Jura';
    text-align:center;
    @media screen and (max-width:1800px) { // 반응형
      width:20%;
    }
  }
  & > div { // 자식 div에 공통 css 속성 부여
    display:flex;
    align-items:center;
  }
`;

export const AddAdressDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

export const SearchWrap = styled.div``;

export const AddressSearchWrap = styled.div``;

export const AddressDuplicateCheckWrap = styled.div``; // 중복정리 박스

export const AddressHeadGroup = styled.div` // 그룹추가, 그룹삭제, 주소록추가, 주소록삭제 박스 + 중복정리,보여질,이름,검색란 박스
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:calc(100% - 290px);
  @media screen and (max-width:1800px) {
    width:80%
  }
`
export const AddAddressbook = styled.div` // 그룹추가, 그룹삭제, 주소록추가, 주소록삭제 박스
  display:flex;
  align-items:center;
  gap:6px;
  button {
    width:104px;
    height:30px;
    font-size:1.2rem;
    font-weight:600;
    border-radius:50px;
		/* 임시 작업 ebebf3->fff */
    background-color:#fff;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    color:#191919;
    @media screen and (max-width:1800px) {
      width:70px;
      font-size:1.1rem;
    }

    @media screen and (max-width:1440px) {
      width:62px;
      font-size:1rem;
    }
  }
`;
/* Start 주소록 추가 */
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
    background-color:#fff;
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
  z-index:10000;
  width:100%;
  /* border-radius: 0px 0px 5px 5px; */
  box-shadow:rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
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
      @media screen and (max-width:1800px) {
        padding:0 10px;
        font-size:1.1rem;
      }

      @media screen and (max-width:1440px) {
        padding:0 8px;
        font-size:1rem;
      }
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
  /* @media screen and (max-width:1800px) {
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
  } */
`


/* End 주소록 추가  */


export const AddressFunBtnBox = styled.div` // 중복정리,보여질,이름,검색란 박스
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:6px;
  button {
    height:30px;
    font-weight:600;
    border-radius:50px;
    background:#fff;
    box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    color:#191919;
    &.addressItemBtn { // 보여질 항목 선택 버튼
      width:124px;
      font-size:1.2rem;
      @media screen and (max-width:1800px) {
        width:100px;
        font-size:1.1rem
      }
      @media screen and (max-width:1440px) {
        width:90px;
        font-size:1rem;
      }
    }
  }
  .DuplicateCheckZone { // 중복정리 버튼
    .DuplicateCheckBtn {
      width:102px;
      @media screen and (max-width:1800px) {
        width:80px;
        font-size:1.1rem;
      }
      @media screen and (max-width:1440px) {
        width:55px;
        font-size:1rem;
        
      }
    }
  }
  .addressSearchBox { // Select / 검색 영역
    select {width:96px;}
  }
`

export const AddressTableWrap = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:transparent;
  gap:10px;
	padding-top:20px;
	@media screen and (max-width:1440px){
		flex-wrap: wrap;
	}
`;

export const AddressLeftZone = styled.div` // 왼쪽 체크박스 / 테이블 박스
  width:75%;
  @media screen and (max-width:1800px) { // 반응형
    width:70%;
  }
  @media screen and (max-width:1440px)	{
		width: 100%;
		/* padding: 0 5%; */
	}

`
export const AddressLeftMiddle = styled.div` // 테이블 영역
  display:flex;
  justify-content:space-between;
  gap:10px;
  min-height:calc(100vh - 60px);
  max-height:100%;
`;

export const IsLogin = styled.div``;

export const NotLogin = styled.div`
  font-size:6rem;
  color:#adb5bd;
  width:100%;
  height:calc(100vh - 280px);
  display:flex;
  align-items:center;
  justify-content:center;

  @media screen and (max-height: 750px) {
    position:relative;
    top:40px;
  }
`;
