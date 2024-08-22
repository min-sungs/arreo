import React from 'react'
import styled from "@emotion/styled";


interface IGrayButton {
  text?: string;
  eventFun?: ()=>void;
  marginRight?: string;
  marginLeft?: string;
}
const GrayButton = ({text,eventFun,marginRight,marginLeft}:IGrayButton) => {
  const GrayButton = styled.span<IGrayButton>`
    display: inline-block;
    width: 100px;
    padding: 10px 0;
    text-align: center;
    background-color: rgba(27, 28, 28, 0.39);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
  `

  return <GrayButton  onClick={eventFun} marginRight={marginRight ?? '0'} marginLeft={marginLeft ?? '0'}>{text}</GrayButton>
}

export default  GrayButton;