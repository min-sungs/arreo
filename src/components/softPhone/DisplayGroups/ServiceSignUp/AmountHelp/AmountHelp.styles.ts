import styled from 'styled-components'




export const AmountHelpWrap = styled.div`
	.amountGroup{
		display: flex; justify-content: space-between;
		flex-direction: column;
	}
`

export const AnnouncementGroup = styled.div`
	margin-bottom: 9rem;
	.announcement{
		display: flex;
		align-items: center;
		margin-bottom: 2.5rem;
		:last-child{
			margin-bottom: 0;
		}
		> p{
			margin-right: 1.2rem;
		}
		.guideText{
			h3{
				font-size: 1.2rem;
				font-weight: 600;
				margin-bottom: .5rem;
			}
			p{
				font-size: 1.1rem;
			}
		}
	}
`

export const AmountGroup = styled.div`
	border: 1px solid #ADC1F4;
	padding: 3rem 1.2rem;
	background: #F6F7FE;
	border-radius: 1rem;
	text-align: center;

	.top{
		p{
			font-size: 1.3rem;
			margin-bottom: 1.5rem;
			color: #6e6e71;
		}
		h3{
			font-size: 2rem;
			font-weight: 700;
		}
	}
	.arrowRow{
		position: relative;
		display: block;
		width: 100%;
		height: 1px;
		background: #D6D6DC;
		margin: 2rem 0;
		.arrowRowSpan{
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			display: block;
			border-top: 11px solid #D6D6DC;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
			::before{
				content: "";
				position: absolute;
				top: -12px;
				left: 50%;
				transform: translateX(-50%);
				display: block;
				border-top: 11px solid #F6F7FE;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
			}
			
		}

	}

	.bottom{
		font-size: 1.3rem;
		line-height: normal;
		color: #191919;
		b{
			font-size: 1.6rem;
			font-weight: 600;
		}
	}

`




