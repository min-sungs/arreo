import React from 'react'
import styled from "@emotion/styled";

interface IBlackButton {
  text?: string;
  eventFun?: ()=>void;
  marginRight?: string;
  marginLeft?: string;
}
const BlueButton = ({text,eventFun,marginRight,marginLeft}:IBlackButton) => {
  const BlueButton = styled.span<IBlackButton>`
    display: inline-block;
    width: 100px;
    padding: 10px 0;
    text-align: center;
    background-color: rgb(0, 89, 255);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
  `

  return <BlueButton onClick={eventFun} marginRight={marginRight ?? '0'} marginLeft={marginLeft ?? '0'}>{text}</BlueButton>
}

export default  BlueButton;