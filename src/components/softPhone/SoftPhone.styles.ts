import styled from 'styled-components'

export const SoftPhoneContainer = styled.div`
	position: relative;
	width: 25%;
	/* margin-top: 2rem; */
	.openArrow{
		display: none;
	}
	
	font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
	input, textarea{
		font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
	}
	
	@media screen and (max-width : 1800px){
		width: 30%;
	}
	
	@media screen and (max-width : 1440px){
		/* order: -2; */
		z-index: 9002;
		position: fixed;
		top: 2rem;
		right: -40%;
		width: 40%;
		transition: all .2s linear;
		&.active{
			right: 0;
			.openArrow{
				button{
					svg{
						transform: rotate(180deg);
					}
				}
			}
		}
		.openArrow{
			display: block;
			z-index: 2;
			position: absolute;
			top: 50%;
			left: -40px;
			transform: translateY(-50%);
			button{
				cursor: pointer;
				width: 40px;
				height: 80px;
				border: 0;
				border-radius: 2rem 0 0 2rem;
				background-color: #F8F9FD;
				box-shadow: -1px 1px 5px 1px rgba(0,0,0,0.2);
				display: flex; align-items: center; justify-content: center;
				svg{
					color: red;
					width: 70%;
					height: 60%;
					path{
						fill: #0D42E5;
					}
				}
			}
		}
		@media screen and (max-width: 640px){
			&.active{
				.openArrow{
					left: 0;
					/* transform: rotate(180deg) ; */
					button{
						border-radius: 0 2rem 2rem 0 ;
						svg{
							transform: rotate(180deg);
						}
					}
				}
			}
			.openArrow{
				left: -3rem;
				button{
					width: 3rem;
					height: 7rem;
				}
			}
		}

	}
	@media screen and (max-width : 1280px){
		width: 50%;
		right: -50%;
	}

	@media screen and (max-width : 970px){
		width: 60%;
		right: -60%;
	}
	@media screen and (max-width : 768px){
		width: calc(95% - 3rem);
		right: calc(-95% + 3rem);
	}
	
	@media screen and (max-width : 640px){
		position: fixed;
		width: 100%;
		right: -100%;
		height: 100%;
		top: 0;
		background-color: #fff;
	}
`
export const SoftPhoneInner = styled.div`
	position: relative;
	/* height: calc(100vh - 26px - 4rem); */
	/* 임시작업 */
	/* border: 0.3rem solid #ababae;
	background: #F8F9FD; */
	border: 0.3rem solid #D6D6DC;
	background: #f2f4f6;
	padding: .7rem;
	border-radius: 4rem;
	overflow: hidden;
	margin-right: .5rem;
	/* height: calc(100vh - 6rem); */

	
	@media screen and (max-width : 1280px){
		/* margin-right: 0;
		border-right: 0;
		border-left: 0;
		border-radius: 0; */
		/* margin: 3rem 5%; */
		margin: 0;
		
	}
	
	@media screen and (max-width : 640px){
		width: 100%;
		border: 0;
		padding: 0;
	}

`
export const SoftPhoneBlock = styled.div`

	position: relative;
	border-radius: 3.5rem;
	overflow: hidden;
	height: 100%;

	@media screen and (max-width : 640px){
		border-radius: 0;
		> div{
			border-radius: 0;
			> div{
				border-radius: 0;
			}
		}
	}
`
