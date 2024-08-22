import styled from "styled-components";

export const MessageSendWrap = styled.div`
  z-index: 9999 !important;
	font-size: 10px;
	color: #191919;
	font-weight: 600;
	button{
		cursor: pointer;
		border: 0;
		background: transparent;
	}
	.none{
		display: none;
	}
  .flexBox{
    display: flex; flex-wrap: wrap;
  }
  .flexBox-js{
    display: flex; flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Toggle = styled.div`
  display: flex;
  gap: 1rem;
  button{
    padding: .55rem 1.2rem;
    border: 0;
    border-radius: 50px;
    background: #0D42E5;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
  }
  button.active{
    //background: rgba(0,0,0,0.8);
    background: #2D2D2D;
    color: #fff;
  }
`

export const AddressDestinationGroup = styled.div`
	/* margin-bottom: 6rem; */
	.OpenArrowBtn{
		position: relative; z-index: 99;
		top: calc(100% - 1rem); left: 50%;
		transform: translateX(-50%);
		border: 0;
		padding: .8rem 3.1rem;
		background-color: #f9f9f9;
		border-radius: 0 0 1.5rem 1.5rem;
		margin-bottom: 2.4rem;
		cursor: pointer;
		display: flex; align-items: center; justify-content: center;

		
		&.active{
			margin-bottom: 0;
			svg{
				transform: rotate(-180deg);
				margin-bottom: 0;
			}
		}
	}
	.recipientsGroup.active{
		max-height: 80vh;
		height: calc(100vh - 36.333rem);
		margin-bottom: 0;
	}


`

// 타이틀
export const TextTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
	font-size: 1.5em;
	font-weight: 700;
	margin-bottom: 2rem;
`

export const AddressAdd = styled.div`
	position: relative;
	margin-bottom: .6rem;
	label{
		position: relative;
		display: flex;
		width: 100%;
		input{
		width: 100%;
		padding: .5rem 1rem;
		border: 0;
		border-radius: 50px;
		background: #f8f8f8;
		}
		input::placeholder{
		color: #a1a1a1;
		font-size: 1.2rem;
		font-weight: 500;
		}
		input:focus{
		outline: none;
		}
		button{
		position: absolute;
		top: 50%;
		right: 1rem;
		width: 1.8rem;
		height: 1.8rem;
		transform: translateY(-50%);
		border: 0;
		border-radius: 50%;
		background: #a1a1a1;
		box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.02) inset;
		}
		button svg{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		}
	}
`
export const RecipientsList = styled.div`
	position: relative;
	font-size: 1.3rem;
	background: #F6F6F8;
	padding: 1rem .8rem;
	border-radius: 2rem;

	&.active{
		margin-bottom: 0;
	}

	.recipientsGroup{
		max-height: 88px;
		height: 88px;
		overflow-x: auto;
		border-radius: 2rem;
		padding: 0 1rem;
		margin-right: .5rem;
		:last-child{
		margin-bottom: 0;
		}
		// overflow 스크롤
		::-webkit-scrollbar{
		width: .4rem;
		background-color: #D6D6DC;
		border-radius: 40px;
		}
		::-webkit-scrollbar-thumb{
		background: #98999A;
		border-radius: 40px;
		}
		> li{
		background: #ffffff;
		border-radius: 1.5rem;
		padding: .5rem 1.5rem;
		margin-bottom: .6rem;
		:last-child{
			margin-bottom: 0;
		}
		button.arrowDown{
			display: none;
		}
		button.eraseButton{
			display: block;
		}

		}
		/* 버튼 active */
		> li ul{
		display: none;
		}

		> li.active{
		padding-bottom: 1.6rem;
		ul{
			display: block;
		}
		button.arrowDown{
			display: block;
		}
		button.eraseButton{
			display: none;
		}
		}
		/* 버튼 active */

		.RecipientTitle{
		width: calc(100% - 12rem);
		cursor: pointer;

		p{
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		}
		.smallContents{
		display: flex; align-items: center; justify-content: space-between;
		.state{
			display: flex; align-items: center; justify-content: flex-end;
			width: 40%;
			max-width: 10rem;
			border-radius: 4rem;
			p{
			width: calc(100% - 2.6rem);
			padding: 0 .5rem;
			text-align: right;
			}
		}
		}
		.numberList{
		max-height: 12rem;
		overflow-y: auto;
		margin: 2rem 0.5rem 0 0;
		padding: 0 2rem 0 0;
		// overflow 스크롤
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
			margin-bottom: 1.4rem;
		}
		.moreDetails{
			display: flex; align-items: center; justify-content: flex-end;
			gap: 3rem;
		}
		}

	}

	

`
export const BtnWhiteGray = styled.div`
	button{
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		border: 0;
		border-radius: 50%;
		background: #f8f8f8;
		box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.10) inset;
		svg{
		position: absolute;
		top: 50%; left: 50%; transform: translate(-50%, -50%);
		}
	}
`

export const AddresSenderGroup = styled.div`
	display: flex;
	align-items: center; justify-content: space-between;
	margin-bottom: 3.2rem;
	/* display: none; */
	h3{
		width: 6rem;
		font-size: 1.5em;
		font-weight: 700;
	}
	&.active{
		/* .SenderList{
		justify-content: flex-end;
		} */
		.AddressNumberGroup{
		width: calc(100% - 12rem);
		border-radius: 1.5rem 1.5rem 0 0;
		.numberList{
			ul{
				position: absolute;
				left: 0;
				justify-content: flex-end;
				display: block;
			}
		}
		}
		.arrowDown{
		svg{
			transform: rotate(180deg);
		}
		}

	}

`
export const SenderList = styled.div`
	position: relative;
	display: flex; justify-content: space-between;
	width: calc(100% - 6rem);
	cursor: pointer;
	button.registerNumber{
		width: 8rem;
		color: #fff;
		background: #98999A;
		box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.02) inset;
		border-radius: 50px;
		padding: 0.3rem 0;
	}
`
export const AddressNumberGroup = styled.div`
	position: relative;
	width: calc(100% - 12rem);
	display: flex; align-items: center; justify-content: space-between;
	background: #F6F6F8;
	border-radius: 1.5rem;

	/* &.active{
		position: relative;
		margin-bottom: 8.2rem;
		border-radius: 2rem 2rem 0 0;
		.numberList ul{
		display: block;
		position: absolute;
		top: 100%; left: 0;
		width: calc(100% - 1rem);
		padding: 0 0 1rem 1rem;
		border-radius: 0 0 2rem 2rem;
		}
		
	} */

	.numberList{
		font-size: 1.3rem;
		width: 100%;
		p{
		width: calc(100% - 2.8rem);
		padding: .6rem 1.2rem;
		}
		ul{
		z-index: 2;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		display: none;
		max-height: 20vh;
		background: #F6F6F8;
		overflow-y: auto;
		border-radius: 0 0 1.5rem 1.5rem;
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
			padding: 1.2rem;
			/* :first-child{
			margin-top: 1rem;
			}
			:last-child{
			margin-bottom: 0;
			} */
			cursor: pointer;
		}
		li:hover{
			color: #0D42E5;
			background: #fff;
			::after{
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 2.5px;
			height: 100%;
			background: #0D42E5;
			}
			button{
			font-weight: 700;
			}
		}
		}

	}
	button{
		position: absolute;
		top: 1rem; right: 1rem;
		display: flex;
	}
`
export const AddresContentGroup = styled.div`
	/* display: none; */
`
export const Transmissiondetails = styled.div<any>`
	position: relative;
	.titleGroup{
		z-index: 2;
		display: flex; align-items: center;
		justify-content: space-between;
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 4rem);
		padding: 1.2rem 2rem;
		background: #fff;
		font-size: 1.4rem;
		border: 1px solid rgb(214, 214, 220);
		border-bottom: 0;
		border-radius: 2rem 2rem 0 0;
		font-weight: 600;
		input{
			width: calc(100% - 50px);
			border: 1px solid #191919;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			/* font-weight: 600; */
			:focus{
				outline: none;
			}
		}
	}
	.SendTextBox{
		position: relative;
		width: 100%;
		background: #fff;
		border: 1px solid #D6D6DC;
		border-bottom: 0;
		border-radius: 2rem 2rem 0 0;
		overflow-y: scroll;
		::-webkit-scrollbar{
			display: none;
		}
		.sendContentGroup{
         padding: ${({ subjectBoolean }) => (subjectBoolean ? '5rem 2rem 2rem' : '2rem 2rem 2rem')};
			height: calc(100vh - 72rem);
			.sendImage{
				position: relative;
				width: 100%;
				object-fit: contain;
				margin-top: 3rem;
				margin-bottom: 2rem;
				.deleteButton{
					position: absolute;
					top: 1rem;
					right: 1rem;
					display: none;
					align-items: center; justify-content: center;
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
					background: #333;
					cursor: pointer;
				}
				:hover{
					.deleteButton{
						display: flex;
					}
				}
				img{
					display: block;
					margin: 0 auto;
					width: 100%;
					border-radius: 2rem;
				}
			}

			textarea{
				width: 100%;
				box-sizing: border-box;
				border: none;
				outline: none;
				resize: none;
				height: 94%;
				font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
				/* font-family:"Noto Sans KR", "Nanum Gothic", Roboto, "Open Sans", sans-serif; */
				font-size: 1.3rem;
				font-weight: 600;
				
				// overflow 스크롤
				::-webkit-scrollbar{
					width: .4rem;
					background-color: #D6D6DC;
					border-radius: 40px;
				}
				::-webkit-scrollbar-thumb{
					background: #98999A;
					border-radius: 40px;
				}

			}
		}

	}
	.imageBox{
		display: flex; align-items: center; justify-content: center;
		width: 100%;
		height: 20%;
		padding-top: 1rem;
		margin-top: -1px;
		border: 1px solid #D6D6DC;
		border-top: 0;
		background-color: #ffffff;
		border-radius: 0 0 2rem 2rem;
		button{
		width: 95%;
		height: 4rem;
		background-color: #F6F6F8;
		border-radius: 50rem;
		margin-bottom: 1rem;
		font-weight: 700;
		color: #98999A;
		font-size: 1.3rem;
		}
	}
	p.ByteCount{
		text-align: right;
		color: ${({ maxByte }) => (maxByte ? '#0D42E5' : '#e31010')};
		font-size: 1.3rem;
		font-weight: 700;
		padding: 1rem .8rem;
	}
	`

	export const ActionButtonGroup = styled.div`
	display: flex; align-items: center; justify-content: space-between;
	width: 100%;
	background: #fafafa;
	padding: 2px;
	border-radius: 1.5rem;
	border: 1px solid #D6D6DC;
	button{
		width: 100%;
		padding: 1.2rem 1rem;
		color: #929292;
		font-weight: 900;
		border: 1px solid #D6D6DC;
		border-left: 0;
		border-top: 0;
		border-bottom: 0;
		> p{
			font-size: 1.3rem;
		}
		:first-child{
		border-radius: 1.4rem 0 0 1.4rem;
		border-left: 0;
		}
		:last-child{
		background: #0D42E5;
		color: #fff;
		border-radius: 0 1.4rem 1.4rem 0;
		border: 1.5px solid #0D42E5;
		}
		&.unactive{
			background: #98999A;
			border-color: #98999A;
			color: #fff;
		}
		&.grayactive{
			border: 1px solid #98999A;
		}

	}
	button.active{
		border: 1.5px solid #0D42E5;
		border-right: 1.5px solid #0D42E5;
		border-left: 1.5px solid #0D42E5;
		color: #0D42E5;
		font-weight: 900;
	}
`


export const HigherContent = styled.div`
	font-size: 1.9rem;
	
	.activeGroup{
		z-index: 9999;
		display: block;
		position: absolute;
		top: 0; left: 0;
		width: 100%; height: 100%;
		border-radius: 3.5rem;
		background: rgba(0,0,0,0.5);
	}
	.higherWrap{
		position: absolute;
		bottom: 0; left: 0;
		width: 100%;
		background-color: #f6f6f6;
		font-weight: 700;
		border-radius: 3.5rem 3.5rem 0 0;
		.dateGroup{
			padding: 3rem 2rem 2rem;
			border-radius: 3.5rem 0 0 3.5rem;
			.TotalNumber{
				margin-bottom: 2.4rem;
				span{
					color: #0D42E5;
				}
			}
			h3{
				margin-bottom: 2rem;
			}
			/* 예약, 반복 테이블 공통 */
			.dateTable{
				display: flex; align-items: center; justify-content: center;
				flex-wrap: wrap;
				width: 100%;
				min-height: 14rem;
				color: #ddd;
				margin-bottom: 4rem;
				.ant-picker{
					width: 100%;
					font-size: 2rem;
					input{
						text-align: center;
						font-size: 2rem;
					}
				}
				
			}
			/* 예약 */
			.reservationTable{
				flex-direction: column;
				padding: 1rem;
				width: auto;
				background: #ffffff;
				border-radius: 1.5rem;
				box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.02) inset;
				height: 20vh;
				max-height: 22.2rem;
				.ant-picker{
					height: 100%;
				}
				h4{
					font-size: 1.9rem;
					font-weight: 700;
					color: #000;
					margin-bottom: 2rem;
				}
				button{
					padding: .8rem;
					width: 60%;
					max-width: 112px;
					font-size: 1.3rem;
					font-weight: 700;
					color: #fff;
					background: #0D42E5;
					border-radius: 9rem;
					box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
				}
			}
			/* 반복 */
			.repetitionTable{
				.ant-picker{
					margin-bottom: 2rem;
				}
				.dateBox{
					display: flex;
					align-items: flex-start;
					gap: 1rem;
					width: 100%;
					text-align: center;
					.repetitionBox{
						width: 100%;
						h4{
							font-size: 1.6rem;
							margin-bottom: 1rem;
							color: #191919;
						}
						.group{
							color: #0D42E5;
							font-size: 1.6rem;
							text-align: center;
							position: relative;
							ul{
								position: absolute;
								bottom: 100%;
								left: 0;
								width: 100%;
								display: none;
								background: #fff;
								border-radius: 1rem 1rem 0 0;
								overflow: hidden;
								border-bottom: 1px solid #ddd;
                max-height: 30vh;
                overflow-y: auto;
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
									button{
										font-size: 1.6rem;
										width: 100%;
										padding: 1rem;
										color: #0D42E5;
										font-weight: 600;
									}
									:hover{
										background: #0D42E5;
										button{
											color: #fff;
										}
										/* ::after{
											content: "";
											display: block;
											width: 2px;
											height: 100%;
											position: absolute;
											top: 0; left: 0;
											background: #fff;
										} */
									}
								}
							}
							.actBtn{
								cursor: pointer;
								display: flex; align-items: center; justify-content: center;
								width: 100%;
								padding: 1rem;
								gap: 1rem;
								background: #fff;
								border-radius: 1rem;
								color: #0D42E5;
								font-weight: 700;
								font-size: 1.6rem;
								svg{
									color: #0D42E5;
									transform: scale(.9);
								}
							}
						}

						&.active{
							.actBtn{
								border-radius: 0 0 1rem 1rem;
								svg{
									transform: rotate(180deg);
								}
							}
							ul{
								display: block;
							}
						}
					}
				}

			}
		
			.cashGroups{
				margin-bottom: 3rem;
				.cashBox{
					gap: 1rem;
					display: flex; align-items: center;
					.cash{
						color: #0D42E5;
					}
          p{
            min-width: 7rem;
          }
				}
        .transferGroup{
          margin-bottom: 3rem;
        }
        .retentionGroups{
          margin-bottom: 2rem;
          .amountGroup{
            gap: 2rem;
          }
          h2{
            margin-bottom: 2rem;
          }
          p{
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }
        }
			}
		}
	}


`
