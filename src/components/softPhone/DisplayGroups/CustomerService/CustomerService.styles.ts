import styled from 'styled-components'




export const CustomerServiceWrap = styled.div`

	.serviceGroup{
		max-height: calc(100vh - 41rem);
		overflow-y: auto;
		padding: 0 1rem;
		margin: 0 -1rem;
		::-webkit-scrollbar{
			width: .4rem;
			background-color: #D6D6DC;
			border-radius: 40px;
		}
		::-webkit-scrollbar-thumb{
			background: #98999A;
			border-radius: 40px;
		}
		@media screen and (max-width:1440px){
			max-height: calc(100vh - 34rem);
		}
	}
	.backButton{
		display: block;
		margin: 5vh auto 2rem;
		background: #0D42E5;
		color: #fff;
		font-size: 1.3rem;
		padding: 1rem 1.5rem;
		border-radius: 50rem;
		font-weight: 800;
		border: 0;
		min-width: 16rem;
		min-height: 4rem;
		cursor: pointer;
	}
`

export const CustomerService = styled.div`
	margin-bottom: 14%;
	h2{
		font-size: 1.6rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3.7rem;
	}
	.helpGroup{
		display: flex; flex-wrap: wrap;
		button{
			display: flex; align-items: center;
			justify-content: space-between;
			width: 100%;
			padding: 1rem 2rem;
			height: 7vh;
			min-height: 5rem;
			max-height: 70px;
			background: #fff;
			border: 1px solid #ADC1F4;
			border-radius: 1rem;
			font-size: 1.5rem;
			font-weight: 700;
			gap: 1rem;
			margin-bottom: 1rem;
			box-sizing: border-box;
			cursor: pointer;
			svg{
				display: none;
			}
			:hover{
				z-index: 2;
				color: #0D42E5;
				background: #fff;
				box-shadow: 0px 0px 10px 0px rgba(76, 54, 178, 0.20);
				svg{
					display: block;
				}
			}
		}
		button.active{
				color: #0D42E5;
				background: #F6F7FE;
				box-shadow: 0px 0px 10px 0px rgba(76, 54, 178, 0.20);
				svg{
					display: block;
				}
		}
	}
`

export const ArreoService = styled.div`
	
	h2{
		font-size: 1.6rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 2rem;
	}
	.addressBook{
		border: 1px solid #98999A;
		background: #fff;
		border-radius: 1rem;
		padding: 2rem;

		/* 공통 사항 */
		.smallGroup{
			margin-bottom: 2rem;
			h4{
				color: rgba(25,25,25,0.5);
				font-size: 1.3rem;
				font-weight: 700;
				margin-bottom: 1.2rem;
			}
			h3{
				font-size: 1.7rem;
				font-weight: 600;
				color: #000;
			}
			p{
				color: rgba(25,25,25,0.5);
				line-height: 2rem;
				font-size: 1.3rem;
			}
			:last-child{
				margin-bottom: 0;
			}
		}
		.workGroup{
			margin-bottom: 4rem;
		}
	}
`


