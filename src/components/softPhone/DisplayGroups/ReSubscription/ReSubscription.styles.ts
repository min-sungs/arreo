import styled from 'styled-components'




export const ReSubscriptionWrap = styled.div`
	.amountGroup{
		display: flex; justify-content: space-between;
		flex-direction: column;
	}
`

export const ReSubscriptionGroup = styled.div`
	color: #191919;
	margin-bottom: 2rem;
	h2{
		font-size: 1.5rem;
		font-weight: 600;
	}
	.phoneGroup{
		display: flex;
		align-items: center;
		justify-content: space-between;
		.phone{
			width: calc(100% - 10rem);
			padding: 1rem;
			font-size: 1.6rem;
			font-weight: 600;
			text-align: center;
			letter-spacing: 6.4px;
			border-radius: 50px;
			background: #f8f8f8;
			box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
			span{
				margin: 0 5%;
			}
		}
	}
	.comment{
		margin-top: 1rem;
		text-align: right;
		color: #6e6e71;
		font-size: 1.2rem;
		line-height: normal;
		font-weight: 600;
		padding: 0 2%;
	}
`




