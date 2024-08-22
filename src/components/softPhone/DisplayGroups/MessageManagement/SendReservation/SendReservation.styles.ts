import styled from 'styled-components'

export const SendReservationWrap = styled.div`
	.searchGroup{
		> div{
			justify-content: flex-end;
		}
	}
`
export const ManagementBtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  button{
    padding: .65rem 1.2rem;
    border: 0;
    border-radius: 50px;
    background: #F8F9FD;
    color: rgba(25,25,25,0.3);
    font-weight: 700;
    font-size: 1.2rem;
  }
  button.active{
    background: rgba(0,0,0,0.8);
    color: #fff;
  }
`


export const TransmissionResult = styled.div`
  display: none;
`
export const SendReservation = styled.div`
  .groups{
    /* padding: 2rem 1vw; */
    gap: .5rem;
    background: #f7f7f9;
		padding: 2rem 1rem;
    .checkButtonGroup{
      button{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 3px;
        background: #D6D6DC;
				border: 2px solid #D6D6DC;
      }
    }
    .titleGroup{
      width: calc(100% - 10rem);
      h3{
        font-size: 1.4rem;
        flex-wrap: wrap;
        .peopleNumber{
          font-size: 1.3rem;
          font-weight: 600;
          color: #919091;
        }
				p.messageTitle{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
					max-width: calc(100% - 12rem);
        }
      }
      .dateGroup{
        display: flex;
        align-items: center;
        gap: .8rem;
        .date{
          margin-right: .8rem;
        }
      }
    }

    .cancellationGroup{
      button{
        width: 6.2rem;
        background: transparent;
        padding: .6rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: #B7B8B9;
        border: 1px solid #B7B8B9;
        border-radius: 10rem;
        box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
				:hover{
					color: #3C445D;
					border-color: #3C445D;
				}
			}
    }

    .checkButtonGroup.active{
      button{
				background: #fff;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain 100%;
				border: 2px solid #0D42E5;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.48 1L3.244 7.35L1 4.81' stroke='%230D42E5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      }
    }

  }
  .groups.active{
    background: #fff;
    border: 1px solid #d6d6dc;
    box-shadow: 5px 5px 10px 0px #D6D6DC;
  }

`

export const CancelTextButton = styled.div`
  .cancelBtn{
    width: 100%;
    padding: 2rem 1rem;
    color: #fff;
    background-color: #444444;
    border-radius: 1.5rem;
    font-size: 1.3rem;
    font-weight: 900;
  }
`
