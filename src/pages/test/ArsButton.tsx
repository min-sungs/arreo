// import React from "react";
// import styled from "styled-components";

// interface ArsButtonProps {
//   children?: string;
//   backGroundColor?: string;
//   Color?: string;
//   onClick?: () => void;
// }

// const ArsButton = ({ children, backGroundColor, Color, onClick }: ArsButtonProps) => {
//   return (
//     <CustomArsButton backGroundColor={backGroundColor} Color={Color} onClick={onClick}>
//       {children}
//     </CustomArsButton>
//   );
// };

// interface ArsButtonStyledProps {
//   backGroundColor?: string;
//   Color?: string;
// }

// const CustomArsButton = styled.button<ArsButtonStyledProps>`
//   width: 5rem;
//   height: 3rem;
//   border: none;

//   color: ${(props) => props.Color};
//   background-color: ${(props) => props.backGroundColor};

//   & + & {
//     margin-left: 2rem;
//   }
// `;

// export default ArsButton;
