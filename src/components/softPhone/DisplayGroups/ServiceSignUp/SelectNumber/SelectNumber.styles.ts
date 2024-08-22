import styled from 'styled-components'




export const SelectNumberWrap = styled.div`
	button{
		cursor: pointer;
	}
	.flexBox-js{
		display: flex; flex-direction: column; justify-content: space-between;
	}
`


export const SelectNumber = styled.div`
	margin-bottom: 4rem;
	h2{
		color: #191919;
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
		margin-left: 6px;
	}
	.phoneGroup{
		color: #191919;
		font-size: 1.6rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		gap: 1rem;

		.numberGroup{
			position: relative;

			.number{
				display: flex;
				align-items: center;
				padding: .5rem 1.2rem;
				background: #f8f8f8;
				gap: .5rem;
				font-size: 1.6rem;
				font-weight: 600;
				letter-spacing: 6.4px;
				border-radius: 6rem;
				> p{
					width: 52px;
				}
				> span{
					width: 16px;
					letter-spacing: 6.4px;
				}
				> span:nth-child(4){
					width: 18px;
					margin: -3px;
				}
				input{
					background: #f8f8f8;
					border: 0;
					outline: #333;
					font-size: 1.6rem;
					font-weight: 600;
					letter-spacing: 6.4px;
					width: 7rem;
					::placeholder{
						color: rgba(25, 25, 25, 0.30);
						font-size: 1.6rem;
						font-weight: 600;
						letter-spacing: 6.4px;
					}
				}
				button{
					background: transparent;
					border: 0;
					line-height: 0;
					cursor: pointer;
				}
				
			}
			.recommendationNumberBox{
				z-index: 2;
				position: absolute;
				top: 100%;
				left: 0;
				display: none;
				padding: .6rem 0;
				padding-right: 4px;
				background: #f9f9f9;
				border-top: 1px solid #bdbdbd;
				width: calc(100% - 4px);
				border-radius: 0 0 1.5rem 1.5rem;
			}
			.recommendationNumber{
				width: 100%;
				height: 20vh;
				max-height: 30rem;
				overflow: auto;
				// overflow 스크롤 styles
				::-webkit-scrollbar{
					width: .4rem;
					background-color: #D6D6DC;
					border-radius: 40px;
				}
				::-webkit-scrollbar-thumb{
					background: #98999A;
					border-radius: 40px;
				}
				
				li{
					
					position: relative;
					/* :last-child{
						border-radius: 0 0 1.5rem 1.5rem;
						overflow-x: hidden;
					} */

					button{
						width: 100%;
						font-size: 1.6rem;
						padding: .5rem 1rem .5rem 1.2rem;
						letter-spacing: .6rem;
						font-weight: 500;
						border: 0;
						text-align: left;
						background: #f8f8f8;
						letter-spacing: 6.4px;
						::before{
							content: "";
							display: none;
							position: absolute;
							top: 0;
							left: 0;
							background: #0D42E5;
							width: 2.5px;
							height: 100%;
						}
						:hover{
							font-weight: 700;
							background: #F1F1F7;
							::before{
								display: block;
							}
						}
					}
				}

				button{
				}
			}

			/* active css */
			&.active{

				.number{
					border-radius: 1.5rem 1.5rem 0 0;
				}
				.recommendationNumberBox{
					display: block;
				}
				/* .recommendationNumber{
					display: block;
				} */
			}


		}
		

		> button{
			font-size: 1.3rem;
			font-weight: 600;
			border-radius: 5rem;
			border: 0;
			color: #fff;
			background: #3C445E;
			box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
			padding: .85rem 1rem;
			width: 10rem;
		}
	}

	.numberStatus{
		.status{
			display: none;
			font-size: 1.3rem;
			margin-left: 1.2rem;
			color: #6e6e71;
			font-weight: 500;
			&.active{
				display: flex;
			}
			svg{
				margin-right: 4px;
			}
		}

	}


`

export const Provision = styled.div`

	h2{
		color: #191919;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 700;
	}

	.selectGroup {

		li{
			position: relative;
			margin-bottom: 1rem;
			:last-child{
				margin-bottom: 0;
			}
		}
		
		/* 실제 체크박스 */
		input[type="checkbox"]{
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip:rect(0,0,0,0);
			border: 0
		}
		
		input[type="checkbox"] + label {
			position: relative;
			display: flex; align-items: center;
			padding: .8rem 1.2rem;
			color: #191919;
			border: 1px solid transparent;
			border-radius: 5px;
			background: rgba(248, 248, 248, 0.80);
			font-size: 1.3rem;
			font-weight: 500;
			cursor: pointer;
			user-select: none;

			span.gray{
				margin-left: 2px;
				color: #6e6e71;
			}
		}
		
		input.check_all[type="checkbox"] + label{
			border: 0.5px solid #0D42E5;
			font-weight: 600;
		}

		/* 가상 체크박스 */
		input[type="checkbox"] + label:before {
			content: '';
			position: relative;
			display: block;
			width: 20px;
			height: 20px;
			margin-right: 1rem;
			line-height: 20px;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M8.39634 13.9225L4.53906 10.0643L5.82452 8.77885L8.39634 11.3498L13.5382 6.20703L14.8245 7.49339L8.39634 13.9225Z' fill='%23D6D6DC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 10C0 4.47727 4.47727 0 10 0C15.5227 0 20 4.47727 20 10C20 15.5227 15.5227 20 10 20C4.47727 20 0 15.5227 0 10ZM10 18.1818C8.92555 18.1818 7.86162 17.9702 6.86895 17.559C5.87629 17.1478 4.97433 16.5452 4.21458 15.7854C3.45483 15.0257 2.85216 14.1237 2.44099 13.131C2.02981 12.1384 1.81818 11.0745 1.81818 10C1.81818 8.92555 2.02981 7.86162 2.44099 6.86895C2.85216 5.87629 3.45483 4.97433 4.21458 4.21458C4.97433 3.45483 5.87629 2.85216 6.86895 2.44099C7.86162 2.02981 8.92555 1.81818 10 1.81818C12.17 1.81818 14.251 2.68019 15.7854 4.21458C17.3198 5.74897 18.1818 7.83005 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z' fill='%23D6D6DC'/%3E%3C/svg%3E");
		}

		/* 체크됐을때 순간적인 css 스타일 */
		/* input[type="checkbox"] + label:active:before,
		input[type="checkbox"]:checked + label:active:before {} */

		input[type="checkbox"]:checked + label:before {  /* 체크박스를 체크했을때 */ 
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M8.39634 13.9225L4.53906 10.0643L5.82452 8.77885L8.39634 11.3498L13.5382 6.20703L14.8245 7.49339L8.39634 13.9225Z' fill='%230D42E5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 10C0 4.47727 4.47727 0 10 0C15.5227 0 20 4.47727 20 10C20 15.5227 15.5227 20 10 20C4.47727 20 0 15.5227 0 10ZM10 18.1818C8.92555 18.1818 7.86162 17.9702 6.86895 17.559C5.87629 17.1478 4.97433 16.5452 4.21458 15.7854C3.45483 15.0257 2.85216 14.1237 2.44099 13.131C2.02981 12.1384 1.81818 11.0745 1.81818 10C1.81818 8.92555 2.02981 7.86162 2.44099 6.86895C2.85216 5.87629 3.45483 4.97433 4.21458 4.21458C4.97433 3.45483 5.87629 2.85216 6.86895 2.44099C7.86162 2.02981 8.92555 1.81818 10 1.81818C12.17 1.81818 14.251 2.68019 15.7854 4.21458C17.3198 5.74897 18.1818 7.83005 18.1818 10C18.1818 12.17 17.3198 14.251 15.7854 15.7854C14.251 17.3198 12.17 18.1818 10 18.1818Z' fill='%230D42E5'/%3E%3C/svg%3E");
		}
		input[type="checkbox"]:checked + label, 
		input[type="checkbox"]:checked + label.active{
			/* background: #F6F7FE;
			border: 0.5px solid #0D42E5;
			font-weight: 600; */
		}
		input.check_all[type="checkbox"]:checked + label{
			background: #F6F7FE;
		}


	}



`




