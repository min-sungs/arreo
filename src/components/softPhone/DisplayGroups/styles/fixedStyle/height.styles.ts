import styled from 'styled-components'

// 015 사서함 가입절차 스타일
export const GroupWrap = styled.div`
	min-height: calc(100vh - 60rem);
	max-height: calc(100vh - 60rem);
	overflow: auto;
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	margin-right: -1rem;
	padding-right: 1rem;

	// overflow 스크롤
	::-webkit-scrollbar{
		width: .4rem;
		background-color: #D6D6DC;
		border-radius: 40px;
		margin-left: 2rem;
		padding-left: 2rem;
	}
	::-webkit-scrollbar-thumb{
		background: #98999A;
		border-radius: 40px;
	}


`