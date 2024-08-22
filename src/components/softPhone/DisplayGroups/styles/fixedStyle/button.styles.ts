import styled from 'styled-components';

// 015 사서함 가입절차 스타일
export const Btn100 = styled.div`
  .startBtn {
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    height: 7rem;
    border-radius: 8rem;
    background: #0D42E5;
    /* background-color: {(props) => props.backgroundColor}; */
    border: 0;
    font-size: 2rem;
    /* font-weight: 700; */
    font-weight: 500;
    color: #fff;
    /* :hover{
			background: #191919;
		} */
  }
  .unactive {
    background: #191919;
  }
`;
