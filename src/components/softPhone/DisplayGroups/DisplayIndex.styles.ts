import styled from 'styled-components';

export const MessageSendHistoryContainer = styled.div`
  /* position: relative; */
  /* background-color: #efeff3; */
	/* 임시 작업 */
  background-color: #FEFEFF;
  border-radius: 0 0 3.5rem 3.5rem;
  overflow-y: auto;
  /* min-height: calc(100vh - 27.2rem);
  max-height: calc(100vh - 27.2rem); */
	/* margin-bottom: 2rem; */
	overflow-y: hidden;
	/* min-height: 100%; */
	/* height: calc(100% - 166px); */
	> div{
		margin: 2rem;
		/* height: calc(100% - 4rem); */
	}
  /* 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  // overflow 스크롤 styles
  /* ::-webkit-scrollbar{
		width: .4rem;
		background-color: rgba(140,140,140,0.4);
		border-radius: 40px;
	}
	::-webkit-scrollbar-thumb{
		background: #0D42E5;
		border-radius: 40px;
	} */

  /* @media screen and (max-width: 1600px) {
		height: calc(100vh - 30rem);
  	} */
`;
