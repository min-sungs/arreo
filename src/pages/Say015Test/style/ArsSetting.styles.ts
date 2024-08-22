import styled from 'styled-components';

export const Li = styled.li`
  background-color: blue;
  width: 120px;
  height: 80px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight:600;
  & span {
    color: #0D42E5;
		font-weight: 600;
  }
`;

export const ArsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  /* 임시 */
  margin-bottom:160px;
  position: relative;
	border-radius: 2rem;
	background: rgba(254, 254, 255, 0.30);
	border: 1px solid #ADC1F4;
	padding: 3rem;
	overflow-x: auto;
	height: auto;
	::-webkit-scrollbar {
		width: .6rem;
		background-color: #D6D6DC;
	}

	::-webkit-scrollbar-thumb {
		background: #98999A;
	}


  & .leftBorder {
    position: relative;
  }
  & .leftBorder::before {
    content: '';
    display: block;
    border-left: 1px solid #ADC1F4;
    width: 1px;
    height: calc(100% - 94px);
    position: absolute;
    top: 47px;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
`;

export const ArsWrap = styled.div`
  display: flex;

  /* &::before {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background-color: #ff8865;
    position: absolute;
    top: 50%;
    left: 0%;
  } */
`;

export const ActionBox = styled.div`
  background: #ADC1F4;
  width: 160px;
  height: 74px;
  border-radius: 6px;
  text-align: left;
  position: relative;
  padding: 6px 22px 6px 10px;
  margin: 10px 20px 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;

export const ArsBox = styled.div`
  background: #ADC1F4;
  width: 160px;
  height: 74px;
  padding: 6px;
  padding-right: 10px;
  border-radius: 6px;
  text-align: left;
  position: relative;
  margin: 10px 20px 10px 45px;
  box-sizing: border-box;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    right: 100%;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;

export const Action = styled.h3`
  color: rgb(25, 25, 25);
  font-size: 15px;
  font-weight: 600;
`;

export const Content = styled.p`
  color: rgba(25, 25, 25, 0.5);
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const menu = styled.button`
  position: absolute;
  top: 8px;
  right: 0;
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;

  & div {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(25, 25, 25, 0.5);
  }
`;

export const isButton = styled.div`
  position: relative;
  padding-left: 20px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 47px;
    left: 0;
  }
`;

export const userinput = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #ADC1F4;
  position: absolute;
  top: 30px;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 17px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 17px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
