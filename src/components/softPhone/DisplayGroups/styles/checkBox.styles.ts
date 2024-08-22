import styled from "styled-components";

// button 형태 checkbox
export const CheckBoxButton = styled.div`

	button{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 3px;
		background: #D6D6DC;
	}

	&.active{
		button{
			position: relative;
			background: #fff;
			border: 2px solid #0D42E5;
			&:after {
				position: absolute;
				top: 0px;
				left: 4px;
				transform: translate(-50%, -50%);
				content: ''; /* 가상 요소 생성 */
				display: block;
				width: 2px;
				height: 6px;
				border: solid #0D42E5;
				border-width: 0 2px 2px 0;
				transform: rotate(45deg);
			}
		}
	}
`


// input 형태 checkbox
export const CheckBoxInput = styled.input`
	/* 체크되지 않은 상태의 스타일 */
	appearance: none;
  width: 15px;
  height: 15px;
  border: 1.9999999px solid rgb(145, 144, 145); /* 테두리 스타일 */
  background-color: transparent;
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

`


// svg 아이콘 들어가는 checkBox
export const CheckBoxIcon_1 = styled.div`
	button{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 3px;
		background: #D6D6DC;
		border: 2px solid #D6D6DC;
	}
	&.active{
		button{
				background: #fff;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain 100%;
				border: 2px solid #0D42E5;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'%3E%3Cpath d='M12.2202 5.44482L6.98423 11.7948L4.74023 9.25482' stroke='%230D42E5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.09 1H2.87C1.83723 1 1 1.8529 1 2.905V14.335C1 15.3871 1.83723 16.24 2.87 16.24H14.09C15.1228 16.24 15.96 15.3871 15.96 14.335V2.905C15.96 1.8529 15.1228 1 14.09 1Z' stroke='%230D42E5' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");
      }
	}
`
export const CheckBoxIcon_2 = styled.div`
	button{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 3px;
		background: #D6D6DC;
		border: 2px solid #D6D6DC;
	}
	&.active{
		button{
				background: #fff;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain 100%;
				border: 2px solid #0D42E5;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.48 1L3.244 7.35L1 4.81' stroke='%230D42E5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      }
	}
`
