import styled from 'styled-components';

export const ArsContainer = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 47px;
    width: 20px;
    border-top: 1px solid #ADC1F4;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
`;

export const ArsWrap = styled.div`
  position: relative;
  padding-left: 38px;
  box-sizing: border-box;
  height: 74px;

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

  &.selected .userInput {
    display: none;
  }
  &.selected .userButton {
    display: block;
  }

  & .userButton {
    display: none;
  }

  &.selected .arsContainer {
    display: none;
  }
`;

export const ActionBox = styled.div`
  background: #2979ff;
  width: 160px;
  height: 74px;
  border-radius: 6px;
  text-align: left;
  position: relative;
  padding: 6px 22px 6px 10px;
  box-sizing: border-box;

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background-color: #0D42E5;
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;

export const ArsBox = styled.div`
  background: #0D42E5;
  width: 160px;
  height: 74px;
  padding: 6px;
  padding-right: 10px;
  margin-left: 5px;
  border-radius: 6px;
  text-align: left;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
    background-color: #0D42E5;
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
  top: 0;
  right: 0;
`;

export const isButton = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  top: 50%;
  left: 0;
  margin-top: -17.5px;
	z-index: 2;

  /* &.selected .userInput {
    display: none;
  }
  &.selected .userButton {
    display: block;
  }

  & .userButton {
    display: none;
  } */
`;

export const userinput = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #0D42E5;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 17px;
    height: 1px;
    background-color: #0D42E5;
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
    background-color: #0D42E5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ConuntSpan = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(25, 25, 25, 1);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const ArsSelectBox = styled.div`
  width: 160px;
  height: 74px;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  border-radius: 6px;
  text-align: left;
  border: 1px solid #0D42E5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 1px;
    background-color: #0D42E5;
    position: absolute;
    top: 50%;
    right: 100%;
  }

  & div {
    border: 1px solid #0D42E5;
    border-radius: 3px;
    width: 138px;
    height: 40px;
    position: relative;
    box-sizing: border-box;
  }

  & div button {
    box-sizing: border-box;
    display: block;
    width: 136px;
    color: #0D42E5;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 33px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  & div ul {
    box-shadow:
      0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: rgba(235, 235, 243, 1);
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    display: none;
    padding: 10px 0;
    z-index: 100;
  }

  & div ul.on {
    display: none !important;
  }

  & div ul li button {
    width: 140px;
    height: 40px;
    line-height: 40px;
    padding: 0 8px;
    color: #000000de;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }

  & div ul li button:hover {
    background-color: rgba(0, 0, 0, 0.04);
    transition: all 0.3s;
  }
`;
export const Noti = styled.p`
  color: rgba(25, 25, 25, 0.5);
  line-height: 25px;
`;
