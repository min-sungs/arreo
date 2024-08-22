import styled from 'styled-components';

export const ActionWrap = styled.div`
  display: flex;
  position: relative;
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
`;

export const ActionBox = styled.div`
  background: #0D42E5;
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
    background-color: rgba(239, 239, 255, 1);
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;

export const ArsBox = styled.div`
  background: #DBE3FC;
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

  &.sms {
    background-color: #E8EDFD;
  }
  &.ment {
    background-color: #fff;
  }

  &.main {
    margin-left: 0;
  }

  &:not(.main)::before {
    content: '';
    display: block;
    width: 10px;
    height: 1px;
    background-color: #ADC1F4;
    position: absolute;
    top: 50%;
    right: 100%;
  }

  &.on::after {
    content: '';
    display: block;
    width: 40px;
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
  line-height: 20px;
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

export const UdBox = styled.ul`
  position: absolute;
  top: 5px;
  right: -20%;
  background-color: rgba(235, 235, 243, 1);
  z-index: 999;

  & li {
    text-align: center;
    font-size: 1.6rem;
  }

  & li button {
    background-color: transparent;
    display: block;
    border: 0;
    width: 60px;
    line-height: 30px;
    height: 30px;
  }
`;
