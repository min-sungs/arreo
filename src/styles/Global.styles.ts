import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

	html {
		position: relative;
		/* min-height: calc(var(--vh, 1vh) * 100); */
		width: 100%;
		font-size: 10px;
		overflow-x: hidden;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
		/* font-family: 'Noto Sans KR', 'Nanum Gothic', 'Roboto', 'Open Sans', sans-serif; */
		color: #333;
		font-weight: 500;
		box-sizing: border-box;
		:root {
      --vh: 100%;
   	}
		::-webkit-scrollbar {
		width: .6rem;
		background-color: #D6D6DC;
		}

		::-webkit-scrollbar-thumb {
		background: #98999A;
		}

	}

	body {
		width: 100% !important;
		/* min-width: 1280px; */
		min-height: calc(100vh - 230px); //signin 해더 깨짐 현상 해결방법
		background-color: #F8F9FD;
		display: flex;
		flex-direction: column;
		overflow-y: visible;
		overflow-x: hidden;

		/* 드래그 방지 */
		/* -ms-user-select: none;
		-moz-user-select: -moz-none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		user-select: none; */
	}

	a {
		text-decoration: none;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
		color: #333;
	}
	input{
		font-weight: 500;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
		accent-color: #0D42E5;
	}
	button {
		font-weight: 500;
		background: transparent;
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
	}
	
  // 팝업창 스타일 변경
  .ant-modal-mask{
    z-index: 9991 !important;
  }
  .ant-modal-wrap.ant-modal-confirm-centered.ant-modal-centered{
    z-index: 9992 !important;
  }
  
	//  전송내역관리 내에 캘린더 라이브러리 스타일 변경
	.ant-picker-dropdown{
		z-index:  9999 !important;
	}
	.ant-picker-range .ant-picker-active-bar{
		background: #0D42E5;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-header-view button:hover{
		color: #0D42E5;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before{
		border: 1px solid #0D42E5;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before, :where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before,
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-in-range::before{
		background: #e2e9fd;
	}
	.ant-picker-cell-range, .ant-picker-cell-range-hover, 
	.ant-picker-cell-range-hover-end, 
	.ant-picker-cell-range-hover-start{
		&::before{
			background: #b4c7ff !important;
		}
	}
	.ant-picker-cell-inner{
		&::after{
			background-color: #b4c7ff !important;
		}
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, 
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, 
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner{
		background: #0D42E5;
	}
	
	/* 캘린더 라이브러리 스타일 시간 */
	:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-primary{
		background: #4863b3;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover{
		background: #0D42E5;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-dropdown .ant-picker-time-panel-column >li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner{
		background: #e2e9fd;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker:hover,
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-focused.ant-picker,
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker:hover{
		border-color: #0D42E5;
	}
	:where(.css-dev-only-do-not-override-dkbvqv).ant-picker-focused.ant-picker{
		box-shadow: 0 0 0 2px rgb(76 54 178 / 10%);
	}
	

`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;
