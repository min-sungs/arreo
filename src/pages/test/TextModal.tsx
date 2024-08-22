// import React, { useState } from "react";
// import { TextModalProps } from "../../apis/utils/typeGuard/modalGuard";
// import styled from "styled-components";
// import ArsTextArea from "./ArsTextArea";
// import ArsButton from "./ArsButton";

// const TextModal = ({ title, content, onClose }: TextModalProps) => {
//   const [arsTextAreaValue, setArsTextAreaValue] = useState<string>("");

//   const handelArsTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setArsTextAreaValue(e.target.value);
//   };

//   const cancelArsTextModal = () => {
//     setArsTextAreaValue("");
//     onClose();
//   };

//   return (
//     <TextModalWrap>
//       <TextModalSection>
//         <TextModalHeader>
//           <TextModalHeaderInner>
//             <TextModalTitle>{title}</TextModalTitle>
//             <TextModalCont>{content}</TextModalCont>
//           </TextModalHeaderInner>
//           <TextModalClose onClick={onClose}>Close</TextModalClose>
//         </TextModalHeader>
//         <TextModalBody>
//           <TextModalBodyInner>
//             <ArsTextArea
//               value={arsTextAreaValue}
//               onChange={handelArsTextArea}
//             />
//           </TextModalBodyInner>
//         </TextModalBody>
//         <TextModalFooter>
//           <ArsButton>저장</ArsButton>
//           <ArsButton onClick={cancelArsTextModal}>취소</ArsButton>
//         </TextModalFooter>
//       </TextModalSection>
//     </TextModalWrap>
//   );
// };

// const TextModalWrap = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   left: 0;
//   top: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(33, 33, 33, 0.36);
//   z-index: 9999;
// `;

// const TextModalSection = styled.section`
//   width: 500px;
//   height: 300px;
//   border: 1px solid #000;
//   background-color: #ffff;
//   opacity: 1;
//   padding: 2vw;
//   box-sizing: border-box;
//   border-radius: 20px;
// `;

// const TextModalHeaderInner = styled.div`
//   width: 100%;
// `;

// const TextModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const TextModalTitle = styled.h1`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const TextModalClose = styled.button`
//   height: 30px;
// `;

// const TextModalCont = styled.p`
//   font-size: 10px;
// `;

// const TextModalBody = styled.div`
//   margin-bottom: 10px;
// `;

// const TextModalBodyInner = styled.div``;

// const TextModalFooter = styled.div``;
// export default TextModal;
