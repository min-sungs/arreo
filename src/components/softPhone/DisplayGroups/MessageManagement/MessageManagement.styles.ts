import styled from 'styled-components'

export const MessageManagementWrap = styled.div`
  
	input{
		border: 0;
		input:focus{
			outline : none;
		}
	}
	button{
		cursor: pointer;
		border: 0;
	}

	/* 통합 : 전송결과조회, 장기보관함, (예약전송관리) */
	.TransferList{
		max-height: calc(100vh - 46rem);
 	 	min-height: calc(100vh - 46rem);
		.groups{
			background: #fff;
			border: 2px solid #fff;
			:hover{
				background: #FFF;
				box-shadow: 5px 5px 10px 0px #D6D6DC;
				border: 2px solid #ADC1F4;
			}
		}
		.groups.active{
			background: #F6F7FE;
			border: 2px solid #ADC1F4;
		}
	}
	/* 예약전송관리 */
	.SendReservation{
		.TransferList{
			max-height: calc(100vh - 46rem - 59px);
 	 		min-height: calc(100vh - 46rem - 59px);
		}
	}

	@media screen and (max-width : 1440px){
		.TransferList{
			max-height: calc(100vh - 36rem);
 	 		min-height: calc(100vh - 36rem);
		}
		.SendReservation{
			.TransferList{
				max-height: calc(100vh - 36rem - 59px);
				min-height: calc(100vh - 36rem - 59px);
			}
		}
	}

	@media screen and (max-width : 640px){
		.TransferList{
			max-height: calc(100vh - 31rem);
 	 		min-height: calc(100vh - 31rem);
		}
		.SendReservation{
			.TransferList{
				max-height: calc(100vh - 31rem - 59px);
				min-height: calc(100vh - 31rem - 59px);
			}
		}
	}

`
