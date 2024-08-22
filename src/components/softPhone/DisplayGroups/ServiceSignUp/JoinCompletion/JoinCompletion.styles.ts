import styled from 'styled-components'


export const JoinCompletionWrap = styled.div`
	z-index: 999;
	background-color: rgba(0,0,0,0.5);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	color: #191919;

	.completionGroup{
		background: #fff;
		position: absolute;
		bottom: 0;
		padding: 3rem 3rem 2rem 3rem;
		border-radius: 3.5rem 3.5rem 0 0;
		h4{
			font-size: 1.5rem;
			font-weight: 600;
			color: #6e6e71;
			margin-bottom: 1.2rem;
			span{
				color: #191919;
			}
		}

		.phoneGroup{
			font-size: 2rem;
			font-weight: 600;
			line-height: 1.4em;
			margin-bottom: 10vh;
			
			span{
				font-weight: 700;
				color: #0D42E5;
			}
		}

		.description{
			font-size: 1.3rem;
			font-weight: 500;
			line-height: 1.2em;
			margin-bottom: 2rem;
			.gray{
				color: #6e6e71;
			}
		}


	}


`



