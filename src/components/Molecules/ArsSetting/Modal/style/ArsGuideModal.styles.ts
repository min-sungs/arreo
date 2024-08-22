import styled from 'styled-components';

export const SmsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9990;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.46);
`;

export const SmsCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 535px;
  height: 340px;
  background-color: #fff;
  border: 1px solid rgba(76, 54, 178, 0.5);
  border-radius: 20px;
  pointer-events: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow:
    0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 24px 24px 24px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  color: #000000de;
`;

export const SubTitle = styled.div`
  padding: 16px 0;
  margin-top: 10px;
  font-size: 1.5rem;
  color: #00000099;
`;

export const TextCover = styled.div`
  position: relative;
  transition: all 0.3s;
  margin-top: 20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 2px;
    transition: all 0.5s;
    background-color: transparent;
  }
`;
export const StartButton = styled.div`
	button{
		cursor: pointer;
		display: flex;
		align-items: center; justify-content: center;
		border: 1px solid #0D42E5;
		background: #fff;
		border-radius: 50%;
		width: 3.2rem;
		height: 3.2rem;
		span{
			display: block;
			margin-left: 1rem;
			border: .6rem solid transparent;
			border-left: 1rem solid #0D42E5;
		}
	}
`
export const TapMenu = styled.ul`
  background-color: rgba(239, 239, 242, 1);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  & > li {
    cursor: pointer;
    transition: all 0.3s;
  }
  & > li:not(li:last-child):hover {
    background-color: rgba(76, 54, 178, 0.1);
  }

  & > li:not(li:last-child) {
    width: 33.33%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgba(209, 206, 219, 1);
    font-size: 1.5rem;
    font-weight: 500;
  }
  & > li:not(li:last-child).on {
    border-bottom: 2px solid rgba(76, 54, 178, 1);
    font-weight: bold;
  }
  & > li:last-child {
    width: 100%;
    height: 170px;
    overflow: hidden;
  }

  & li ul {
    display: flex;
    width: 300%;
		height: 100%;
  }
  & li ul li {
    width: 33.33%;
    transition: all 0.5s;
  }

  & li ul li.voice {
    margin-left: -33.33%;
  }
  & li ul li.file {
    margin-left: -66.66%;
  }

	.voiceButton{
		position: absolute;
		bottom: 1.6rem;
		right: 1.4rem;
	}
	.recording{
		position: relative;
		.voiceGroup{
			position: relative;
			width: 100%; height: 100%;
			display: flex; align-items: center; justify-content: center;
			flex-direction: column;
			.text{
				font-size: 1.6rem;
				color: #777;
				margin-bottom: 2rem;
			}
		}
		/* 녹음 버튼 공통 */
		.recordButton{
			display: none;
			width: 6rem;
			height: 6rem;
			background: #0D42E5;
			border: 1px solid #0D42E5;
			border-radius: 50%;
			cursor: pointer;
			box-shadow: 2px 2px 1rem 0rem #999;
			&.active{
				display: flex;
				align-items: center; justify-content: center;
			}
			span{
				display: block;
			}
		}
		/* 녹음 - 녹음 실행 */
		.recordStart{
			/* span{
				margin-left: 1rem;
				border: .6rem solid transparent;
				border-left: 1rem solid #0D42E5;
			} */
			svg{
				width: 1.6rem;
				
			}
		}
		/* 녹음 - 녹음 중단 */
		.recordStop{
			span{
				width: 1.6rem;
				height: 1.6rem;
				background: #fff;
				border-radius: 2px;
			}
		}
		/* 재녹음 버튼 */
		.reRecordButton{
			cursor: pointer;
			position: absolute;
			top: calc(50% + 1.9rem);
			left: calc(50% + 10rem);
			transform: translate(-50%, -50%);
			padding: .8rem 2rem;
			border: 1px solid #555;
			border-radius: 5px;
			color: #555;
			font-size: 1.4rem;
			:hover{
				background: #0D42E5;
				color: #fff;
				border: 1px solid #0D42E5;
			}
		}
	}

	/* 파일 */
	.fileGroup{
		.fileBox{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			gap: 1rem;
			.clipIcon{
				svg{
					width: 1.6rem;
				}
			}
			.upload-name {
					display: inline-block;
					height: 40px;
					padding: 0 10px;
					vertical-align: middle;
					border: 1px solid #98999A;
					width: 78%;
					color: #98999A;
			}
			input{
				color: #98999A;
				width: 80%;
			}
			input[type="file"] {
				padding: 1rem;
				border: 1px solid #555;
				border-radius: 5px;
				cursor: pointer;
			}
			input::file-selector-button{
				display: none;
			}
		}
		
		.musicButton{
			position: absolute;
			top: 74%;
			right: 3rem;
			background: #0D42E5;
			box-shadow: 2px 2px .8rem 0rem #999;
			span{
				border-left-color: #fff;
			}
		}
	}
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 170px;
  background-color: rgba(235, 235, 243, 1);
  border: 0;
  resize: none;
  padding: 14px 12px 0 28px;
  box-sizing: border-box;
  outline: 0;
  border-radius: 0 0 20px 20px / 0 0 20px 20px;
  color: rgba(25, 25, 25, 0.5);

  &::placeholder {
    color: rgba(25, 25, 25, 0.5);
  }
`;

export const GuideBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;

  & button {
    width: 70px;
    height: 30px;
    background-color: rgba(76, 54, 178, 1);
    border-color: rgb(238, 238, 238);
    border-radius: 50px;
    color: #fff;
  }
  & button:first-child {
    background-color: rgba(76, 54, 178, 1);
  }

  & button:last-child {
    background-color: rgba(25, 25, 25, 0.8);
  }
`;
