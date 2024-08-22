import styled from 'styled-components';

export const FormContainer = styled.div``;

export const CashReceiptForm = styled.form``;

export const CRTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  display: flex;
  margin: 30px 0 55px;
  border-top: 2px solid #a1a1a1;

  & tr {
    display: flex;
    flex-direction: column;
  }
	
	@media screen and (max-width:540px){
		flex-wrap: wrap;
		thead, tbody{
			width: 100%;
			th{
				border-right: 0;
				background: rgba(0,0,0,0.6);
				color: #fff;
			}
			input{
				width: 100%;
			}
			input[type=radio]{
				width: 15px;
			}
		}
	}

`;

export const CRThead = styled.thead`
  width: 30%;

  & th {
    border-right: 1px solid #a1a1a1;
    border-bottom: 1px solid #a1a1a1;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const CRTbody = styled.tbody`
  width: 70%;

  & td {
    border-bottom: 1px solid #a1a1a1;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
		padding: 0 1rem;
  }

  & td > span {
    margin: 0 10px;
    font-size: 2rem;
  }
	td input{
		background: rgba(255, 255, 255, 0.9);
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

export const CheckBoxLabel = styled.label`
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 10px;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const TextP = styled.p`
  margin-top: 30px;
  color: #000;
  line-height: 22px;
  font-size: 1.3rem;
`;

export const CheckBoxCover = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 1.3rem;
	/* flex-wrap: wrap; */
	label{
		display: block;
		flex-wrap: wrap;
		margin-right: 0;
		@media screen and (max-width:540px){
			width: calc(100% - 20px);
		}
	}
  & span {
    color: #0D42E5;
		margin-right: .5rem;
  }
`;

export const SubmitInput = styled.input`
  background-color: #0D42E5;
  color: #fff;
  border: 0;
  width: 100px;
  height: 30px;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 35px 0 40px;
  cursor: pointer;
  float: right;
`;

export const BottomP = styled.div`
  clear: both;
  line-height: 20px;

  & > * {
    font-size: 1.3rem;
  }
`;
