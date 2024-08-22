// import React from "react";
// import styled from "styled-components";
// import DialogTap from "./ModalTap";
// import { DialogModalProps } from "../../apis/utils/typeGuard/modalGuard";
// import { useSetRecoilState } from "recoil";
// import { firstIsStart } from "../../recoil/atoms/GreetingArs";

// const DialogModal = ({ title, content, onClose }: DialogModalProps) => {
//   // console.log("DialogModal", props);
//   const setIsStart = useSetRecoilState(firstIsStart);
//   // const [] = useSetRecoilState()
//   const firstSubmitArs = () => {
//     setIsStart(true);
//     onClose();
//   };

//   return (
//     <>
//       <ModalWrap>
//         <ModalInner>
//           <DialogModalTitle>{title}</DialogModalTitle>
//           <DialogMiddle>
//             <DialogOption>{content}</DialogOption>
//             <DialogTapMenuWrap>
//               <DialogTap />
//             </DialogTapMenuWrap>
//           </DialogMiddle>
//           <Modalbottom>
//             <ModalSubmit onClick={firstSubmitArs}>저장</ModalSubmit>
//             <ModalCloseBtn onClick={onClose}>취소</ModalCloseBtn>
//           </Modalbottom>
//         </ModalInner>
//       </ModalWrap>
//     </>
//   );
// };

// const ModalWrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   left: 0;
//   top: 0;
//   background-color: rgb(33, 33, 33, 0.36);
//   z-index: 9999;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const ModalInner = styled.div`
//   width: 500px;
//   height: 430px;
//   background-color: #fff;
//   padding: 20px;
//   box-sizing: border-box;
//   border-radius: 4px;
//   box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
//     0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
// `;

// const DialogModalTitle = styled.h1`
//   font-size: 30px;
//   margin-bottom: 20px;
// `;

// const DialogMiddle = styled.div`
//   height: 300px;
//   margin-bottom: 10px;
// `;

// const DialogOption = styled.p`
//   font-size: 16px;
//   color: #aaaaaa;
//   margin-bottom: 20px;
// `;

// const DialogTapMenuWrap = styled.div`
//   width: 100%;
//   height: 30px;
// `;

// const Modalbottom = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// const ModalSubmit = styled.div`
//   font-size: 16px;
//   padding: 10px 30px;
//   background-color: #ccc;
// `;

// const ModalCloseBtn = styled.div`
//   font-size: 16px;
//   padding: 10px 30px;
//   background-color: #ccc;
// `;

// export default DialogModal;
