import styled from 'styled-components';

export const BuisnessInfoForm = styled.form`
  margin-top: 30px;
  border-top: 2px solid #98999A;
  clear: both;

  & .right {
    float: right;
		@media screen and (max-width:960px){
			float	: unset;
			width: 100%;
			height: auto;
			padding: 1.2rem;
			margin-top: 2rem;
		}
  }
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #98999A;
	@media screen and (max-width:960px){
		> label{
			width: 32%;
		}
		> div{
			width: 68%;
		}
	}
	@media screen and (max-width:768px){
		flex-wrap: wrap;

		&.gap{
			div{
				gap: 1rem;
			}
		}

		> div, > label{
			width: 100%;
			border: 0;
			padding: 1rem 0;
			/* gap: 1rem; */
			input{
				width: 100%;
				margin-left: 0;
			}
		}
		> label{
			border-bottom: 1px solid #98999A;
		}
		> div{
			span{
				margin-left: 0;
				line-height: normal;
				margin-top: .5rem;
			}
			input{
				height: 3rem;
			}
		}
		&.businessAddress{
			input{
				margin: 0;
			}
			button{
				margin-left: 0;
			}
			> div{
				gap: 1rem;
				div{
					margin-top: 0;
					input{
						width: 100%;
					}
				}

				/* 사업장주소 */
				> input{
					:nth-child(1){
						width: 7rem;
					}
					:nth-child(2){
						width: calc(100% - 15rem);
					}
					
				}
			}
		}
	}
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;
  font-size: 1.4rem;
  font-weight: bold;
  border-right: 1px solid #98999A;
  padding: 5px 0;
`;

export const InputBox = styled.div`
  display: flex;
	width: calc(100% - 23%);
  flex-wrap: wrap;
  align-items: center;
  padding: 6px 0;

  &.fileCenter input {
    line-height: 34px;
  }
	input{
		background: #fff;
	}
`;

export const ValidationError = styled.span`
  font-size: 1rem;
  color: red;
  margin-left: 10px;
`;
export const ValidationMessage = styled.span`
  font-size: 1rem;
  color: red;
  margin-left: 10px;
`;
export const ManualError = styled.span`
  font-size: 1rem;
  color: red;
  margin-left: 10px;
`;

export const InfoContainer = styled.div`
  margin-top: 80px;
	margin-bottom: 16rem;
	@media screen and (max-width:768px){
		margin-bottom: 0;
	}
`;

// 주소
export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
`;

export const InputAddresBox = styled.div`
  width: 100%;
  margin-top: 5px;
`;
