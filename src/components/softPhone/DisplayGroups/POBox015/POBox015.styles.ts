import styled from 'styled-components';

export const POBox015Wrap = styled.div`
  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
  .searchGroup {
    > div {
      justify-content: flex-end;
			.contactBtn{
				border: 1px solid #D6D6DC;
			}
			.searchBox{
				input{
					border: 1px solid #D6D6DC;
				}
			}
    }
  }
	/* height: 100%; */
`;

export const POBox015 = styled.div`
		/* height: 100%; */
  .TransferList {
		/* max-height: calc(100% - 28rem); */

    max-height: calc(100vh - 40rem);
		min-height: calc(100vh - 40rem);
		@media screen and (max-width: 640px){
			max-height: calc(100vh - 26rem);
			min-height: calc(100vh - 26rem);
		}

    margin-bottom: 1rem;
		/* @media screen and (max-width: 1440px){
			max-height: calc(100vh - 32rem);
			min-height: calc(100vh - 32rem);
		} */
    .groups {
      /* padding: 2rem 1vw; */
      gap: 0.5rem;
      background: #fff;
      border: 2px solid #f7f7f9;
      :hover {
        background: #fff;
        border: 2px solid #ADC1F4;
        /* box-shadow: 5px 5px 10px 0px #D6D6DC; */
        &.active {
          // itemClickStyle이 true일 때 적용되는 스타일
          background: #fff;
          /* border: 2px solid #0D42E5; */
        }
        &.unread {
          border: 2px solid #ADC1F4;
        }
        /* p.messageTitle {
          color: #0D42E5;
        }
        .titleGroup .receivingWrap .message {
          color: #0D42E5;
        }
        .dateGroup {
          color: #0D42E5;
        } */
      }
      .checkButtonGroup {
        button {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 3px;
          background: #eaeaed;
        }
      }
      .titleGroup {
        width: 100%;
        h3 {
					display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.8rem;
					color: #191919;
          font-size: 1.5rem;
					font-weight: 700;
					margin-bottom: 0;
          span.round {
            content: '';
            display: none;
            width: 9px;
            height: 9px;
            border-radius: 50px;
            background: #0D42E5;
          }
        }
				.titleBox{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 1.2rem;
					
					.deleteButton{
						display: flex; align-items: center; justify-content: center;
						width: 1.7rem;
						height: 1.7rem;
						padding: 0;
						border-radius: 50px;
						background: rgba(248, 248, 248, 0.60);
						box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1) inset;
						:hover{
							box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3) inset;
						}
					}
				}
				
        .receivingWrap {
          width: 64%;
          .message {
            font-size: 1.3rem;
            color: #191919;
            font-weight: 500;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .flexWrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .dateGroup {
        .date {
          font-weight: 600;
          font-size: 1.1rem;
        }
      }
      &.unread {
        .titleGroup {
          h3 {
            .round {
              display: block;
            }
          }
        }
        .receivingWrap {
          .message {
            color: #191919;
          }
        }
      }
			&.active{
				border: 2px solid #ADC1F4;
				background: #F6F7FE;
				box-shadow: 5px 5px 10px 0px #D6D6DC;
			}
    }
		
    .groups.unread {
      background: #fff;
      border: 2px solid #d6d6dc;
      box-shadow: 5px 5px 10px 0px #d6d6dc;
    }
  }
`;

export const UnregisteredMember = styled.div`
  z-index: 98;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 270px, rgba(25, 25, 25, 0) 11.36%, #191919 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;

  .UnregisteredWrap {
    width: 100%;

    .signUpButton {
      margin: 0 auto 5vh;

      button {
        background: #0D42E5;
        padding: 2.6rem 2rem;
        max-width: 274px;
        border-radius: 6rem;
        width: 90%;
        color: #fff;
      }
    }

    .helpText {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 2.8rem;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
