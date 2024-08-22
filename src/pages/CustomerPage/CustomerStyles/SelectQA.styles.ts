import styled from "styled-components";

export const SelectQA = styled.div`
	.rightGroup{
		gap: .6rem;
	}
	> h2{
		font-size: 2rem;
		color: #191919;
		font-weight: 600;
		margin-bottom: 2.4rem;
	}
	.flexBox{
		display: flex; flex-wrap: wrap;
	}
	.flexBox-ajs{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
`
export const SelectTop = styled.div`
	margin-bottom: 1.6rem;
	gap: 1rem;
`
export const flexButtonBox = styled.div`
	.classifyTab{
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		button{
			cursor: pointer;
			font-size: 1.2rem;
			font-weight: 700;
			text-align: center;
			width: 9rem;
			height: 3rem;
			padding: 0 1.6rem;
			border: 0;
			color: #98999A;
			border:  1px solid #98999A;
			border-radius: 2rem;
			svg{
				fill: #0D42E5;
			}
		}
		button.active{
			color: #0D42E5;
			border-color: #0D42E5;
		}
	}
`
export const SelectBox = styled.div`
	> div{
		position: relative;
	}
	button{
		cursor: pointer;
		display: flex; justify-content: space-between; align-items: center;
		width: 11.2rem;
		height: 3rem;
		padding: 0 1.6rem;
		border: 0;
		background: #fff;
		/* box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03); */
		svg{
			fill: #98999a;
		}
	}
	.classifyTab > button{
		border-radius: 15px;
	}
	ul{
		z-index: 3;
		display: none;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		width: 100%;

		::before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background: rgba(25, 25, 25, 0.70);
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
		}

		li {
			position: relative;
			:hover {
				font-weight: 700;

				/* ::after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 2.5px;
					height: 100%;
					background: #0D42E5;
				} */

				button {
					background: #F6F7FE;
					font-weight: 700;
				}
			}

			:last-child {
				margin-bottom: 0;
			}

			button {
				width: 100%;
				padding: 1rem;
				color: #5b5b5c;
				background: transparent;
				font-size: 1.2rem;
				font-weight: 500;
				text-align: left;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

	> div.active{
		ul{
			display: block;
			border-radius: 0 0 1.5rem 1.5rem;

		}

		> button {
			border-radius: 1.5rem 1.5rem 0 0;
		}

		svg {
			transform: rotate(180deg);
		}
	}


`

export const SearchBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;
	
	input {
		width: 24rem;
		height: 3rem;
		background: #fff;
		border: 0;
		padding: 0rem 3.4rem 0rem 1.5rem;
		border-radius: 50px;
		box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);

		:focus {
			outline: none;
		}

		::placeholder {
			color: #b2b2b4;
		}
	}

	button {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 1rem;
		width: 17px;
		height: 18px;
		padding: 0;
		border: 0;
		background: transparent;
	}
`

export const BulletinBoard = styled.div`
	/* min-height: calc(100vh - 20rem); */
	/* margin-bottom: 2rem; */
	ol{
		> li{
			position: relative;
			margin-bottom: 6px;
			font-size: 1.3rem;
			font-weight: 500;
			cursor: pointer;
			/* 제목 */
			&.active{
				.dateGroup{
					text-align: right;
					.date{
						display: none;
					}
					.arrowBtn{
						display: block !important;
					}
				}
			}
			.subjectGroup{
				position: relative;
				display: flex; align-items: center;
				background: #fff;
				border-radius: 5px;
				text-align: center;
				> *{
					/* height: 3.7rem; */
					/* display: flex;
					align-items: center; */
					padding: 1.2rem 1rem;
				}
				> h2{
					width: 15%;
					border-right: 1px solid #F8F9FD;
					justify-content: center;
				}
				.subject{
					text-align: left;
					margin-left: 2rem;
					width: calc(100% - 15% - 10rem);
				}
				.dateGroup{
					width: 8rem;
					text-align: right;
					justify-content: right;
					.arrowBtn{
						display: none;
					}
				}
				@media screen and (max-width:1040px){
					flex-wrap: wrap;
					> *{
						height: auto;
						padding: 1rem;
						margin: 0;
					}
					> h2{
						width: 100%;
						border: 0;
						border-bottom: 1px solid #F8F9FD;
					}
					.subject{
						width: calc(100% - 12rem);
						margin-left: 0;
					}
					.dateGroup{
						width: 8rem;
					}
				}
			}
			/* 자세한 내용 */
			ul{
				z-index: 2;
				opacity: 0;
				/* position: absolute;
				top: 100%; */
				width: 100%;
				height: 0;
				max-height: 50vh;
				background: #fff;
				overflow-y: auto;
				border-top: 1px solid #F8F9FD;
				border-radius: 0 0 5px 5px;
				transition: all .1s linear;

				::-webkit-scrollbar {
					width: .4rem;
					background-color: #D6D6DC;
				}

				::-webkit-scrollbar-thumb {
				background: #98999A;
				}

				li{
					padding: 1.4rem 3rem 1.4rem calc(15% + 4.2rem);
					line-height: 2em;
				}
			}
		}

		/* active */
		> li.active{
			.subjectGroup{
				border-radius: 5px 5px 0 0;
			}
			ul{
				opacity: 1;
				height: 262px;
			}
		}

		@media screen and (max-width:1040px){
			li{
				ul{
					li{
						padding: 1rem;
					}
				}
			}
		}
	}
`


export const Pagination = styled.div`
	margin: 2rem 0;
	.sendResultPaging{
		justify-content: center;
		ol{
			justify-content: center;
			flex-wrap: wrap;
		}
	}
`