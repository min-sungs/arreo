// import React from "react";
// import styled from "@emotion/styled/macro";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { autoGreetingTitle, firstArsTextAreaContent } from "../../recoil/atoms/GreetingArs";
// import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

// function FirstAutoGreeting() {
//   const [firstAutoGreeting, setFirstAutoGreeting] = useRecoilState(firstArsTextAreaContent);
//   const [autoGreetingTitleIndex, setAutoGreetingTitleIndex] = useRecoilState(autoGreetingTitle);

//   const handleFirstGreeting = () => {};

//   return (
//     <Container>
//       <BlockTitleWrap>
//         <AutoGreetingTitle>인사말</AutoGreetingTitle>
//         <MoreVertRoundedIcon sx={{ fontSize: 25 }} />
//       </BlockTitleWrap>
//       <Ineer onClick={handleFirstGreeting}>{firstAutoGreeting}</Ineer>
//     </Container>
//   );
// }

// const Container = styled.div`
//   position: relative;
//   border: 2px solid black;
//   width: 20rem;
//   height: 10rem;
//   padding: 1rem;
//   box-sizing: border-box;
//   font-size: 1.2rem;
//   background-color: #fff;
//   border-radius: 10px;
//   display: inline-block;

//   &::after {
//     position: absolute;
//     content: "";
//     border-top: 1px solid black;
//     right: -20px;
//     top: 5rem;
//     width: 2rem;
//   }
// `;
// const BlockTitleWrap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 1rem;
// `;

// const AutoGreetingTitle = styled.div`
//   font-size: 1.5rem;
// `;

// const Ineer = styled.div`
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   width: 10rem;
// `;

// export default FirstAutoGreeting;
