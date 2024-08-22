import styled from 'styled-components';

export const SmsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9990;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.46);
`;

export const SmsCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 535px;
  height: 340px;
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
  margin-top: 20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 2px;
    transition: all 0.5s;
    background-color: transparent;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 210px;
  background-color: rgba(235, 235, 243, 1);
  border: 0;
  resize: none;
  padding: 14px 12px 0 28px;
  box-sizing: border-box;
  outline: 0;
  border-radius: 20px;
  color: rgba(25, 25, 25, 0.5);

  &::placeholder {
    color: rgba(25, 25, 25, 0.5);
    line-height: 18px;
  }
`;

export const SmsBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;

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
