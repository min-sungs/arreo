import styled from 'styled-components';

export const ArsSelectBox = styled.div`
  width: 160px;
  height: 74px;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  border-radius: 6px;
  text-align: left;
  border: 1px solid rgba(76, 54, 178, 1);
  background-color: rgba(255, 255, 255, 0.8);
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
    background-color: rgba(76, 54, 178, 1);
    position: absolute;
    top: 50%;
    right: 100%;
  }

  & div {
    border-radius: 3px;
    width: 138px;
    height: 40px;
    position: relative;
    box-sizing: border-box;
  }

  & div > button {
    box-sizing: border-box;
    display: block;
    width: 140px;
    background-color: rgba(235, 235, 243, 1);
    color: rgba(25, 25, 25, 1);
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 33px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  & div > button.on {
    border-radius: 25px 25px 0 0 / 25px 25px 0 0;
  }

  & div ul {
    box-shadow:
      0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    z-index: 10;
    border-top: 0.2px solid rgba(25, 25, 25, 0.7);
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
    background-color: rgba(235, 235, 243, 1);
  }

  & div ul li button:hover {
    background-color: #fff;
    transition: all 0.3s;
    position: relative;
  }
  & div ul li button:hover::before {
    content: '';
    display: block;
    width: 2.5px;
    height: 40px;
    background-color: rgba(76, 54, 178, 1);
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const Noti = styled.p`
  color: rgba(25, 25, 25, 0.5);
  line-height: 25px;
`;
