import styled from 'styled-components';

export const TooBarCustomerPage = styled.div`
	max-height: calc(100vh - 20rem);
	::-webkit-scrollbar{
		display: none;
	}
	overflow-y: auto;
	> div{
		background: #FEFEFF;
		border-bottom : 2px solid #0D42E5;
		.TooBarCustomerWrap{
			/* min-height: 172px; */
			min-height: 132px;
		}
		.headerMenuGroup{
			margin-bottom: 3.2rem;
		}
		.pointGroups{
			margin-bottom: 2rem;
		}
	}
`;
