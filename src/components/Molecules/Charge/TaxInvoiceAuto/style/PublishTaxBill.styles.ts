import styled from 'styled-components';

// 사업자 리스트, 결제 내역
export const ListContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-top: 80px;
	gap: 3rem;
	@media screen and (max-width:1080px){
		flex-wrap: wrap;
		> div{
			width: 100%;
		}
	}
`;

export const CorpInfoListContainer = styled.div`
  width: 65%;
`;

export const titleCover = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CorpInfoTable = styled.table`
  width: 100%;
  margin-top: 30px;
`;

export const TableThead = styled.thead`
  border-top: 2px solid #a1a1a1;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const TR = styled.tr`
  border-bottom: 1px solid #a1a1a1;
  line-height: 35px;

  & td {
    text-align: center;
  }

  & td:nth-child(1) {
    display: flex;
    justify-content: center;
  }

  & label {
    margin-right: 0;
    justify-content: center;
  }
`;

// 결제내역 리스트
export const PayListContainer = styled.div`
  width: 30%;
  clear: both;

  & > button {
    float: right;
  }
`;

export const BaseGuideP = styled.p`
  color: #575657;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const tableContainer = styled.div`
  width: 100%;
  margin-bottom: 35px;
  max-height: 264px;
  overflow-y: auto;
`;

export const PaymentHistoryTable = styled.table`
  width: 100%;
  border-bottom: 1px solid #a1a1a1;
  line-height: 35px;
  text-align: center;
  margin-bottom: 10px;
`;

export const TableTBody = styled.tbody`
  font-size: 1.3rem;
`;

export const CorpUlHead = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 30px;
  border-top: 2px solid #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  font-size: 1.4rem;
  font-weight: bold;

  & > li:nth-child(1) {
    width: 10%;
  }
  & > li:nth-child(2) {
    width: 30%;
  }
  & > li:nth-child(3) {
    width: 25%;
  }
  & > li:nth-child(4) {
    width: 20%;
  }
  & > li:nth-child(5) {
    width: 15%;
  }
`;

export const CorpUl = styled.ul`
  width: 100%;
`;

export const CorpLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const CorpLiBody = styled.li`
  display: flex;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #a1a1a1;
  font-size: 1.3rem;

  & * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(1) {
    width: 10%;
    margin-right: 0;
  }
  & > div:nth-child(2) {
    width: 30%;
  }
  & > div:nth-child(3) {
    width: 25%;
  }
  & > div:nth-child(4) {
    width: 20%;
  }
  & > div:nth-child(5) {
    width: 15%;
  }
`;

export const BottomArrow = styled.div`
  cursor: pointer;

  &.on {
    margin-top: 9px;
  }

  & > div {
    width: 12.5px;
    height: 12.5px;
    border-left: 2px solid #919091;
    border-top: 2px solid #919091;
    transform: rotate(-135deg);
  }

  &.on > div {
    transform: rotate(-315deg);
  }
`;

// 사업자 리스트 Detail
export const CorpInfoDetail = styled.li`
  padding: 40px 70px 30px 30px;

  &.on {
    display: block;
  }
  &.off {
    display: none;
  }
	@media screen and (max-width:1080px){
		padding: 4rem 0;
	}
`;

export const TopCorpInfoDetail = styled.ul`
  margin-bottom: 35px;
`;

export const BottomCorpInfoDetail = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li {
    width: 50%;
  }

  & > li:nth-child(2),
  & > li:nth-child(4) {
    /* width: 40%; */
  }

  & > li:nth-child(3) strong,
  & > li:nth-child(5) strong {
    width: 40px;
  }

  & > button {
    margin: 25px auto 5px auto;
  }
	@media screen and (max-width:768px){
		& > li {
			width: 100%;
			input{
				width: calc(100% - 50px);
			}
		}
		& > li strong,
		& > li:nth-child(3) strong,
		& > li:nth-child(5) strong {
			width: 50px;
			margin-right: 0;
		}
	}
`;

export const LiRow = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
	@media screen and (max-width:768px){
		flex-wrap: wrap;
		> *{
			width: 100%;
			margin: 0;
			margin-left: 0 !important;
			margin-bottom: 1rem;
		}
		> button{
			width: auto;
			padding: .5rem 2rem;
			height: auto;
		}

		&.flexWrap{
			flex-wrap: nowrap;
			gap: 1rem;
			> *{
				width: auto;
			}
		}

	}
`;

export const LabelStrong = styled.strong`
  font-size: 1.4rem;
  color: #000;
  font-weight: bold;
  margin-right: 15px;
  width: 100px;
  display: block;
  white-space: nowrap;
  line-height: 20px;
`;

export const TextSpan = styled.span`
  font-size: 1.4rem;
`;

export const InputSpanCover = styled.span`
  display: block;
`;

export const corpInput = styled.input`
  border: 0;
  border-bottom: 1px solid #a1a1a1;
  background-color: transparent;
  outline: 0;
  line-height: 20px;
  font-size: 1.4rem;
	@media screen and (max-width:1080px){
		&.address{
			width: 100% !important;
		}
	}
`;

export const CheckBox = styled.input`
  /* 체크되지 않은 상태의 스타일 */
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1.9999999px solid rgb(145, 144, 145); /* 테두리 스타일 */
  background-color: transparent; /* 배경색 */
  border-radius: 0; /* border-radius를 0으로 설정하여 직사각형 모양으로 만듭니다. */
  outline: none; /* 포커스 효과 제거 */
  margin-right: 5px;
  position: relative;
  cursor: pointer;

  /* 체크된 상태의 스타일 */
  &:checked {
    background-color: #0D42E5; /* 체크되었을 때 배경색 변경 */
    border: 1.9999999px solid #0D42E5; /* 테두리 스타일 */
  }

  /* 체크 표시 제거 */
  &:after {
    content: ''; /* 가상 요소 생성 */
    display: block;
    width: 6px;
    height: 12px;
    border: solid transparent;
    border-width: 0 2px 2px 0; /* 체크 모양 생성 */
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 6px;
    opacity: 0; /* 체크 표시 숨김 */
  }

  /* 체크된 상태일 때 체크 표시 보이기 */
  &:checked:after {
    opacity: 1;
  }
`;

// 주소
export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
`;

export const InputAddresBox = styled.div`
  width: 100%;
  margin-top: 5px;
`;

export const PayInput = styled.input`
  width: 100px;
  text-align: right;
  border: 0;
  background-color: transparent;
  font-size: 1.3rem;
`;
