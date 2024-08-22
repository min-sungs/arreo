import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: #f5f5f5; */
  /* margin-bottom: 50px; */
  input{
	background-color: rgba(255,255,255,0.7);
	/* background-color: rgba(0,0,0,0.1); */
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  /* max-width: 1600px; */
  margin: 0 auto;
`;
export const Title = styled.div`
  margin-bottom: 30px;
`;
export const SubWrapper = styled.div`
  display: flex;
	flex-wrap: wrap;
`;
export const SideNav = styled.div`
  width: 20%;

	@media screen and (max-width:1440px){
		width: 100%;
		border-bottom: 1px solid #bbb;
		padding-bottom: 2rem;
		margin-bottom: 3rem;
	}
	
`;
export const Content = styled.section`
	width: 80%;
  @media screen and (max-width:1440px){
		width: 100%;
	}
`;
export const ContentTitle = styled.div`
  margin: 30px 0;
`;
