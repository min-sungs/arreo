import React from 'react'
import styled from "@emotion/styled";


interface IBlackButton {
  text?: string;
  eventFun?: ()=>void;
  marginRight?: string;
  marginLeft?: string;
}
const BlackButton = ({text,eventFun,marginRight,marginLeft}:IBlackButton) => {
  const BlackButton = styled.span<IBlackButton>`
    display: inline-block;
    width: 100px;
    padding: 10px 0;
    text-align: center;
    background-color: rgb(27, 28, 28);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
  `

  return <BlackButton  onClick={eventFun} marginRight={marginRight ?? '0'} marginLeft={marginLeft ?? '0'}>{text}</BlackButton>
}

export default  BlackButton;