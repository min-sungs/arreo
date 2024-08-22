import styled from 'styled-components'

export const MessageSendHistoryWrap = styled.div`

`

export const History = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin: 0 0 2rem;
  font-size: 1.5rem;
  h3{
    color: #191919;
    font-weight: 700;
  }
  button{
    border: 0;
    background: transparent;
    line-height: 0;
		padding: 0;
    cursor: pointer;
		font-weight: 700;
		padding-right: .5rem;
		svg{
			fill: #191919;
			width: 13px;
			height: 16px;
		}
		/* p{
			color: #0D42E5;
			font-weight: 600;
			font-size: 1.3rem;
			box-shadow: rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
			border: 1px solid #0D42E5;
			border-radius: 50px;
			width: 22px;
			height: 22px;
			line-height: 2rem;
			display: flex; align-items: center; justify-content: center;
			box-sizing: border-box;
			
		} */
	}

`
export const FrequentlySentAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 1rem;
  color: #191919;
  font-size: 1.3rem;
  p{
    font-weight: 700;
  }
  ul{
    display: flex;
		flex-wrap: wrap;
    gap: 1.4rem;
  }
  li{
    border: 1px solid #ADC1F4;
    border-radius: 50px;
		/* 임시 작업 */
		background: #F7F8FC;
    padding: .4rem 1.6rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1950px){
    ul{
      gap: .5rem;
    }
  }

`

export const TransferList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 34rem);
  min-height: calc(100vh - 34rem);
	/* max-height: calc(100% - 29rem); */
  overflow-y: auto;
  padding: 0 6px;
  margin: 0 -6px;
	/* @media screen and (max-width: 1800px){
		max-height: calc(100vh - 34rem);
  	min-height: calc(100vh - 34rem);
	}
	@media screen and (max-width: 1600px){
		max-height: calc(100vh - 34.5rem);
  	min-height: calc(100vh - 34.5rem);
	}
	@media screen and (max-width: 1504px){
		max-height: calc(100vh - 37rem);
  	min-height: calc(100vh - 37rem);
	}
	@media screen and (max-width: 420px){
		max-height: calc(100vh - 42rem);
  	min-height: calc(100vh - 42rem);
	} */
	@media screen and (max-width: 640px){
		max-height: calc(100vh - 30rem);
  	min-height: calc(100vh - 30rem);
	}

  // overflow 스크롤
  ::-webkit-scrollbar{
    width: .4rem;
    /* background-color: rgba(140,140,140,0.4); */
		background: #D6D6DC;
    border-radius: 40px;
    margin-left: 2rem;
    padding-left: 2rem;
  }
  ::-webkit-scrollbar-thumb{
    /* background: #0D42E5; */
		background: #98999A;
    border-radius: 40px;
  }

  .groups{
    display: flex;
    align-items: center;
    justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
    padding: 2rem;
    background: #fafafa;
    border-radius: 1rem;
    margin-bottom: .6rem;
    cursor: pointer;
		/* 임시 작업 */
		border-radius: 10px;
		border: 2px solid transparent;
		background: #FFF;
		box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.07);
		:hover{
			/* background: #F3F7FF; */
			border: 2px solid #ADC1F4;
		}
		&.active{
			background: #F3F7FF;
		}
    .titleGroup{
      position: relative;
      max-width: 100%;
      h3{
        color: #000;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        display: flex;
        gap: .5rem;
        p.messageTitle{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
					/* max-width: calc(100% - 10rem); */
        }
      }
      .dateGroup{
        display: flex;
        font-size: 1.3rem;
        color: #98999A;
        gap: 1.6rem;
        font-weight: 600;
      }
    }
    .peopleGroup{
      display: flex;
      align-items: center;
			justify-content: flex-end;
      font-size: 1.1rem;
      font-weight: 600;
      gap: .6rem;
    }
  }


`
