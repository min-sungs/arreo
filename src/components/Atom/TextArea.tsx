import React from 'react';
import styled from 'styled-components';

interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: string;
  fontSize?: string;
  padding?: string;
  textAreaWidth?: string;
  textAreaheight?: string;
  backGroundColor?: string;
  textAreaPlaceholder?: string;
  handleMessageInfo?: () => void;
  backGround?: string;
}

const StyledTextArea = styled.textarea<CustomTextAreaProps>`
  resize: none;
  border: none;
  outline: 0;
  padding: 1rem 2rem;
  box-sizing: border-box;
  /* background: linear-gradient(0deg, #d9d9d9 -39.32%, rgba(217, 217, 217, 0) 73.49%); */
  line-height: 1.2rem;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  width: ${(props) => props.textAreaWidth};
  height: ${(props) => props.textAreaheight};
  background: ${(props) => props.backGround};
  /* background-color: ${(props) => props.backGroundColor}; */
  &:focus {
    border: none;
  }
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
`;

const CustomTextArea = ({
  children,
  color,
  fontSize,
  padding,
  textAreaheight,
  textAreaWidth,
  backGroundColor,
  textAreaPlaceholder,
  backGround,
  ...rest
}: CustomTextAreaProps) => {
  return (
    <StyledTextArea
      color={color}
      fontSize={fontSize}
      padding={padding}
      textAreaheight={textAreaheight}
      textAreaWidth={textAreaWidth}
      placeholder={textAreaPlaceholder}
      backGroundColor={backGroundColor}
      backGround={backGround}
      {...rest}
    >
      {children}
    </StyledTextArea>
  );
};

export default CustomTextArea;
