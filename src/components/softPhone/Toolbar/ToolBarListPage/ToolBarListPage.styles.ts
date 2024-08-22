import styled from 'styled-components';

export const Container = styled.div`
  /* ::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    display: block;
    width: 100%;
    height: 10px;
    background: linear-gradient(#ebebef, #efeff3);
  } */
  	padding: 1rem 2rem 0 2rem;
	font-size: 1rem;
	border-radius: 3.5rem 3.5rem 0 0;
	/* border-bottom: 1px solid #a9a9a9; */
	/* background: linear-gradient(#efeff3, #e7e7ed); */
	/* 임시작업 */
	border-bottom: 1px solid #0D42E5;
	/* box-shadow: 0px 5px 20px 0px rgba(19, 17, 29, 0.07); */
	background: #FEFEFF;
	line-height: normal;

  .headerMenuGroup{
    display: flex;
    align-items: center;
    justify-content: flex-end;
		flex-wrap: wrap;
    gap: 1rem;
		margin-bottom: 1rem;
    button{
      padding: 0;
      border: 0;
      font-size: 1.2rem;
      font-weight: 600;
      color: #9e9ea1;
      background: transparent;
      cursor: pointer;
    }
    button.black{
      color: #4f4f4f;
    }
  }
  /* 핸드폰 그룹 */
  .customerNumberGroup{
    // CustomerNumber
    .customerNumberMain{
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 2px;
      background: transparent;
      color: #0D42E5;
      font-size: 1.3rem;
      font-weight: 500;
      cursor: pointer;
      span{
        display: block;
        margin-right: .8rem;
      }

    }
    // CustomerNumberOthers
    .customerNumberOthers{
      width: max-content;
      border: 1px solid #0D42E5;
      border-radius: 5px;
      li{
        padding: 10px;
        font-size: 1.3rem;
        color: #0D42E5;
        cursor: pointer;
      }
      li:hover{
        background-color: #0D42E5;
        color: #fff;
      }
    }
  }

  /* 고객 그룹 */
  .nameGroup{
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    font-weight: 800;
    b{
      color: #141414;
    }
    span{
      color: #919091;
    }
  }

  /* 잔여 포인트 그룹 */
  .pointGroups{
    display: flex;
    align-items: center;
    justify-content: flex-start;
		flex-wrap: wrap;
    margin-bottom: 3.8em;
		gap: 2rem;
    .pointGroup{
      display: flex;
      color: #191919;
      font-size: 1.5rem;
      font-weight: 500;
      
      p.slash{
        margin: 0 2px;
      }
    }
    .chargeButton{
      font-size: 1rem;
      padding: 2.5px 10px;
			font-weight: 700;
      background-color: #0D42E5;
      border: 0;
      color: #fff;
      border-radius: 100px;
      cursor: pointer;
    }
  }

  /* 메뉴 그룹 */
 	.rowMenuGroup{
		display: flex;
		gap: 1rem;
		text-align: center;
		button{
			width: 100%;
			color: #98999A;
			font-size: 1.6rem;
			font-weight: 700;
			cursor: pointer;
			border-radius: 1rem 1rem 0 0;
			padding: 1rem;
			border: 0;
			background: transparent;
			border-bottom: 0;
			margin-bottom: -1px;
		}
		button.active{
			/* color: #191919;
			background: #f0f0f5;
			border: 1px solid #b1b1b4; */
			/* 임시 작업 */
			color: #191919;
			border: 1px solid #0D42E5;
			background: #fff;
			border-bottom: 0;
		}
  }
  
  /* 반응형 */
  @media screen and (max-width:1600px){
    font-size: .8rem;
  } 
  @media screen and (max-width:550px){
		.rowMenuGroup{
			/* flex-wrap: wrap; */
			background: #FFF;
			gap: 0;
			border: 1px solid #0D42E5;
			border-bottom: 1px solid #FFF;
			margin-bottom: -1px;
			border-radius: 1.5rem 1.5rem 0 0;
			button{
				border-radius: 0;
			}
			button:nth-child(1){
				border-radius: 1.5rem 0 0 0;
			}
			button:last-child{
				border-radius: 0 1.5rem 0 0;
			}
			button.active{
				border: 0;
			}
		}
	}
`;
