// import React, { ReactNode } from "react";
// import styled, { css } from "styled-components";

// interface CustomButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   color?: string;
//   fontSize?: string;
//   padding?: string;
//   icon?: JSX.Element;
//   buttonWidth?: string;
//   buttonheight?: string;
//   backGroundColor?: string;
//   disabled?: boolean;
// }

// function CustomButton({
//   children,
//   color,
//   fontSize,
//   padding,
//   buttonheight,
//   buttonWidth,
//   backGroundColor,
//   disabled,
//   icon,
//   ...rest
// }: CustomButtonProps) {
//   return (
//     <StyledButton
//       color={color}
//       fontSize={fontSize}
//       padding={padding}
//       buttonheight={buttonheight}
//       buttonWidth={buttonWidth}
//       backGroundColor={backGroundColor}
//       icon={icon}
//       disabled={disabled}
//       {...rest}
//     >
//       {children}
//     </StyledButton>
//   );
// }

// const StyledButton = styled.button<CustomButtonProps>`
//   border: 1px solid #e9ecef;
//   outline: 0;
//   cursor: pointer;
//   /* background-color: #f1f3f5; */
//   background-color: #fff;
//   border-radius: 0.8rem;
//   /* box-shadow: -3px -3px 8px #fff, 3px 3px 8px #babecc; */
//   box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3),
//     0 1px 2px rgba(0, 0, 0, 0.4);
//   text-shadow: 1px 1px 20px #babecc;
//   font-weight: 500;
//   transition: all 0.2s ease-in-out;
//   width: max-content;
//   margin-left: 1rem;

//   color: ${(props) => props.color};
//   font-size: ${(props) => props.fontSize};
//   padding: ${(props) => props.padding};
//   width: ${(props) => props.buttonWidth};
//   height: ${(props) => props.buttonheight};
//   background-color: ${(props) => props.backGroundColor};
//   ${(props) =>
//     props.icon &&
//     css`
//       text-shadow: 1px 1px 0 #babecc;
//       line-height: 0;
//       display: inline-flex;
//       justify-content: center;
//       align-items: center;

//       .icon {
//         display: inline-flex;
//         justify-content: center;
//         align-items: center;
//         padding: 0.15rem 0;
//         font-size: 2rem;
//       }
//     `}
//   & + & {
//     margin-left: 1rem;
//   }

//   &:hover {
//     /* box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc; */
//   }

//   &:active {
//     box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
//   }
//   &:disabled {
//     background-color: #ccc;
//   }
// `;

// CustomButton.defaultProps = {
//   color: "#495057",
//   fontSize: "1.2rem",
//   padding: "0.4rem 1rem"
// };

// export default CustomButton;
