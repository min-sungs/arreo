import styled from 'styled-components';

export const CallContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.46);
  border-color: rgba(33, 33, 33, 0.46);
`;

export const CallCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 535px;
  height: 180px;
  background-color: #fff;
  border: 1px solid rgba(76, 54, 178, 0.5);
  border-radius: 20px;
  pointer-events: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow:
    0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 24px 24px 24px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  color: #000000de;
`;

export const SubTitle = styled.div`
  padding: 16px 0;
  margin-top: 10px;
  font-size: 1.5rem;
  color: #00000099;
`;

export const TextCover = styled.div`
  position: relative;
  transition: all 0.3s;

  & select {
    background-color: rgba(235, 235, 243, 1);
    width: 155px;
    height: 50px;
    border: 0;
    border-radius: 25px;
    outline: none;
    padding-left: 25px;
    line-height: 25px;
  }

  & option {
    border: 0;
    line-height: 25px;
    height: 30px;
  }
`;

export const CallBottom = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  & button {
    width: 70px;
    height: 30px;
    background-color: rgba(76, 54, 178, 1);
    border-color: rgb(238, 238, 238);
    border-radius: 50px;
    color: #fff;
  }
  & button:first-child {
    background-color: rgba(76, 54, 178, 1);
  }

  & button:last-child {
    background-color: rgba(25, 25, 25, 0.8);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 20px;
`;

export const SelectWrapper = styled.div`
  // 셀렉트 박스
  position: relative;
  width: 155px;
  height: 50px;
  box-sizing: border-box;
  display: flex;

  border-radius: 5rem;
  background: #ebebf3;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  > button {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  button {
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
  ul {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background-color: rgba(235, 235, 243, 1);
    li {
      &:hover {
        button {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 1800px) {
    width: 7rem;
    button {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 1440px) {
    width: 6.5rem;
  }
`;

export const SelectOptions = styled.ul`
  // 셀렉트 옵션 박스
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  box-shadow: rgba(0, 0, 0, 0.03) 5px 5px 10px 0px;
  overflow: hidden;
  li {
    button {
      border-radius: 0;
      box-shadow: none;
      line-height: 25px;
    }
  }
`;

export const PhoneInput = styled.input`
  width: 336px;
  height: 50px;
  background-color: rgba(235, 235, 243, 1);
  border: 0;
  border-radius: 5rem;
  padding-left: 20px;
  box-sizing: border-box;
`;
