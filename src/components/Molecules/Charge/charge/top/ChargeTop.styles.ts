import styled from 'styled-components';

interface IMenuCard {
  activeState: boolean;
}

export const BackgroundDiv = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(240, 245, 249);
`;
export const LoadingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BarBold = styled.div`
  width: 100%;
  height: 2.2px;
  background-color: #a1a1a1;
`;

export const BarMedium = styled.div`
  width: 100%;
  height: 0.7px;
  background-color: #a1a1a1;
`;

export const TopArticle = styled.article`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 38px;
  margin-bottom: 8px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 33px;
	gap: 1.2rem;
	@media screen and (max-width:1440px){
		flex-wrap: wrap;
		gap: 1rem;
	}
`;

export const MenuCard = styled.div`
  width: 25%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem 1rem;
  background-color: ${(props: IMenuCard) => (props.activeState ? 'rgba(0,0,0,0.8)' : '#d9d9d9')};
  color: ${(props: IMenuCard) => (props.activeState ? '#fff' : '#000')};
  cursor: pointer;

	@media screen and (max-width:1440px){
		width: calc(50% - 3rem);
	}
	@media screen and (max-width:540px){
		width: 100%;
	}
`;

export const MenuTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 11px;
`;
export const MenuSubTitle = styled.span`
  font-size: 1.3rem;
  color: ${(props: IMenuCard) => (props.activeState ? '#fff' : '#000')};
`;

export const MidWrapper = styled.div`
  text-align: center;
  margin-bottom: 22px;
`;

export const MidTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
	@media screen and (max-width:1440px){
		width: 90%;
	}
	
`;
export const AmountUl = styled.ul`
  width: 100%;
  margin-top: 23px;
`;
export const AmountLi = styled.li`
  display: flex;
  margin-bottom: 11px;
	@media screen and (max-width:540px){
		flex-wrap: wrap;
		gap: 1.2rem;
		margin-bottom: 1.2rem;
		label{
			cursor: pointer;
			display: flex; align-items: center;
			
		}
	}
`;
export const AmountLiSubBox = styled.div`
  flex: 1;
  text-align: left;
  &:nth-child(2n) {
    margin-left: 30px;
  }
	@media screen and (max-width:1440px){
		&:nth-child(2n) {
			margin-left: 0;
		}
	}
	@media screen and (max-width:540px){
		width: 100%;
		flex: auto;
	}
`;
export const AmountLiText = styled.span`
  margin-left: 15px;
  vertical-align: text-top;
  font-size: 1.4rem;
`;
export const AmountRadioBox = styled.input``;
export const AmountLiBottom = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
export const AmountLiInput = styled.input`
  background-color: #e9e9e9;
  border: none;
  outline: none;
  color: #a1a1a1;
  font-size: 1.4rem;
  height: 22px;
  width: 50%;
  margin-left: 15px;
  margin-right: 13px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BottomWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
	@media screen and (max-width:1440px){
		width: 90%;
		/* flex-wrap: wrap; */
	}
	@media screen and (max-width:768px){
		flex-wrap: wrap;
		gap: 1rem;
		div{
			flex-wrap: wrap;
			gap: 1rem;
			span{
				margin-left: 0;
			}
			input{
				margin-left: 0;
				width: 100%;
			}
		}
	}
`;

export const BottomTextWrapper = styled.div`
  width: 40%;
  display: flex;
  margin: 0 auto;
  align-items: center;
	@media screen and (max-width:1440px){
		width: 100%;
	}
`;

export const BottomText = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
`;

export const BottomChargeInfo = styled.span`
  font-size: 1.4rem;
  margin-left: 30px;
`;

export const BottomInput = styled.input`
  padding: 5px;
  font-size: 1.4rem;
  margin-left: 30px;
  width: 50%;
  outline: none;
`;

export const BottomEnableAlarm = styled.input`
  margin-left: 30px;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  margin-top: 18px;
  text-align: right;
`;

export const Error = styled.span`
  color: tomato;
  font-size: 1.2rem;
  margin-left: 5px;
`;
