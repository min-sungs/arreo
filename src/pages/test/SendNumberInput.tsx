// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import React from "react";
// import { useRecoilState } from "recoil";
// import styled from "styled-components";
// import { checkPhoneNumberAtom } from "../../recoil/atoms/addressList";

// const SendNumberInput: React.FC = () => {
//   // const setNumberCheck = useSetRecoilState(numberCheckState);
//   const [combineNumberList, setCombineNumberList] = useRecoilState(checkPhoneNumberAtom);
//   console.log(combineNumberList);
//   const deletePhoneNumber = (e: React.MouseEvent, number: string) => {
//     const updatedNumberList = new Set(combineNumberList);
//     updatedNumberList.delete(number);
//     setCombineNumberList(updatedNumberList);
//   };

//   return (
//     <SendNumberWrap>
//       <SendNumberList>
//         {Array.from(combineNumberList).map((number: any, idx: any) => (
//           <SendNumberItem key={idx}>
//             수신번호: {number}
//             <SendNumberDeleteIcon
//               key={idx}
//               onClick={(e) => {
//                 deletePhoneNumber(e, number);
//               }}
//             />
//             ,
//           </SendNumberItem>
//         ))}
//       </SendNumberList>
//     </SendNumberWrap>
//   );
// };

// const SendNumberWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 1rem;
//   background-color: #fff;
//   box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #f1f3f5;
//   padding: 1rem 2rem;
//   box-sizing: border-box;
//   overflow-y: auto;
// `;
// const SendNumberList = styled.ul``;

// const SendNumberItem = styled.li`
//   font-size: 1.5rem;
//   margin: 0.5rem 0;
//   display: flex;
//   align-items: center;
// `;
// const SendNumberDeleteIcon = styled(RemoveCircleOutlineIcon)`
//   font-size: 1.5rem;
// `;

// export default SendNumberInput;
