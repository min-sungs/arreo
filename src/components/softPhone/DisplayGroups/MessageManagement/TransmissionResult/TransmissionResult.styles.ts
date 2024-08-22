import styled from 'styled-components'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const TransmissionResultWrap = styled.div`

	.searchGroup{
		/* input{
			width: 16rem;
			background: #f4f4f7;
			border: 0;
			padding: 1rem 1.5rem 1rem 2rem;
			border-radius: 50px;
			box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);

			:focus{
			outline : none;
			}
		} */
		.searchDateBox{
			display: flex; align-items: center; justify-content: space-between;
			gap: 1.2rem;
			button{
			width: 17px;
			height: 18px;
			padding: 0;
			}

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
    background: #fff;
    color: #98999A;
    font-weight: 700;
    font-size: 1.2rem;
		border: 1px solid #98999A;
  }
  button.active{
		border: 1px solid #0D42E5;
    color: #0D42E5;
  }
`


export const TransmissionResult = styled.div`
  /* display: none; */
  .groups{
    &.active{
      background: #F6F7FE;
      border: 2px solid #ADC1F4;
      box-shadow: 5px 5px 10px 0px #D6D6DC;
    }
  }
`


export const RangePickerStyled = styled(RangePicker)`
    width: 22rem;
    background: #fff;
    border: 0;
    border-radius: 50px;
		color: #98999A;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
    .ant-picker-input{
      & > input{
				font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
        /* font-family: "Noto Sans KR", "Nanum Gothic", Roboto, "Open Sans", sans-serif; */
        font-size: 1.2rem;
        font-weight: 700;
        border: none;
        box-shadow: none;
      }
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-picker-focused.ant-picker {
       border-color: transparent;
       box-shadow: none; 
       outline: none;
    }

	/* active bar */
	.ant-picker-active-bar{
		background: #0D42E5;
	}

  `