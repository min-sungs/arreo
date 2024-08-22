import styled from 'styled-components';

export const Div = styled.div`
  margin-bottom: 85px;
`;

export const Ul = styled.ul`
  font-size: 1.4rem;
  border-top: solid 2.2px #a1a1a1;
  margin-top: 28px;
  margin-bottom: 40px;
	@media screen and (max-width:540px){
		border-top: 0;
	}
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 0.7px solid #a1a1a1;
	@media screen and (max-width:540px){
		flex-wrap: wrap;
		div{
			width: 100%;
			flex: auto;
		}
		> div{
			padding: 1rem 0;
		}
	}
`;
export const TypeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
  text-align: center;
  border-right: 0.7px solid #a1a1a1;
  padding: 10px 0px;
	@media screen and (max-width:540px){
		border-right: 0;
		border: 0;
		/* border-bottom: 0.7px solid #a1a1a1; */
		background: rgba(0,0,0,0.5);
		color: #fff;
	}
`;
export const ValueDiv = styled.div`
  line-height: 22px;
  padding: 10px 0px 10px 13px;
  flex: 2;
`;

export const TextWrapper = styled.div`
  margin-top: 19px;
`;
export const TextCard = styled.div`
  font-size: 1.3rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
	
	@media screen and (max-width:540px){
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 2rem;
		> span{
			margin-bottom: .5rem;
		}
		span:nth-child(2){
			display: none;
		}
	}

`;
export const PointSpane = styled.span`
  color: #0D42E5;
  display: flex;
  align-items: center;
	font-weight: bold;

  & > span {
    font-size: 1.6rem;
    margin-right: 4px;
  }


`;
