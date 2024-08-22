import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: #f5f5f5; */
  padding-bottom: 50px;
`;

export const Wrapper = styled.div`
  /* min-width: 1280px;
  max-width: 1600px; */
	width: 90%;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding: 0 5%;
  }
`;
export const Title = styled.div`
  margin-bottom: 30px;
`;
export const SubWrapper = styled.div`
  display: flex;
	@media screen and (max-width:1440px){
		flex-wrap: wrap;
	}
`;
export const SideNav = styled.div`
  width: 20%;

	@media screen and (max-width:1440px){
		width: 100%;
		border-bottom: 1px solid #bbb;
		padding-bottom: 2rem;
		margin-bottom: 3rem;
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				:last-child{
					a{
						border-right: 0;
					}
				}
				a{
					position: relative;
					border-right: 1px solid #333;
					margin-right: 1rem;
					padding-right: 1rem;
				}
				a.active{
					::after{
						content: "";
						width: calc(100% - 1rem);
						height: 2px;
						display: block;
						position: absolute;
						bottom: -2px;
						left: 0;
						background: #0D42E5;
					}
				}
			}
			
		}
	}
	@media screen and (max-width:1280px){
		ul{
			li{
				width: calc(100% / 3);
				a{
					border-right: 0;
					margin-right: 0;
					padding-right: 0;
				}
				a.active::after{
					width: 100%;
				}
			}
		}
	}
	@media screen and (max-width:768px){
		ul{
			li{
				width: calc(100% / 2);
			}
		}
	}
	@media screen and (max-width:540px){
		ul{
			li{
				width: 100%;
			}
		}
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
