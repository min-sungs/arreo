import styled from 'styled-components'

export const LongTermStorageBoxWrap = styled.div``
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
export const LongTermStorageBox = styled.div`
  .TransferList{
    /* max-height: calc(100vh - 46rem);
    margin-bottom: 1rem; */
    .titleGroup{
      /* width: calc(100% - 7rem); */
			p.messageTitle{
				max-width: calc(100% - 12rem);
			}
    }
  }
  .groups{
    gap: .5rem;
    .checkButtonGroup{
      button{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 3px;
        background: #eaeaed;
      }
    }
    .titleGroup{
      h3{
        flex-wrap: wrap;
        .peopleNumber{
          font-size: 1.3rem;
          font-weight: 600;
          color: #919091;
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
        color: #0D42E5;
        border: 1px solid #0D42E5;
        border-radius: 10rem;
        box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
      }
    }

    .checkButtonGroup.active{
      button{
        background: #0D42E5;
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
