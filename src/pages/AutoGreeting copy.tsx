// 만들다 포기..
// import React, { useState } from "react";
// import styled from "styled-components";
// import AutoGreetingSelectBox from "../components/autoGreeting/AutoGreetingSelectBox";
// import FirstAutoGreeting from "../components/autoGreeting/FirstAutoGreeting";
// import GreetingModal from "../components/autoGreeting/GreetingModal";
// import useModal from "../apis/hooks/useModal";
// import { useRecoilState } from "recoil";
// import { firstIsStart } from "../recoil/atoms/GreetingArs";
// import ObjectComponent from "./test/ObjectComponent ";
// import ArsModalTemplate from "../components/autoGreeting/ArsModalTemplate";

// function AutoGreeting(): JSX.Element {
// const [isStart, setIsStart] = useRecoilState(firstIsStart);
// const [extendingArs, setExtendingArs] = useState(false);
// const modalHook = useModal();

// const openDialogModal = () => {
//   // console.log('열어');
//   modalHook.addModal({
//     key: "FirstAutoGreeting",
//     props: {
//       title: "문자메세지 설정",
//       content: "원하시는 안내문자를 설정해주세요!",
//       onClose: () => modalHook.removeCurrentModal(),
//     },
//   });
//   setIsStart(false);
// };

// const handleExtendArsButton = () => {
//   console.log("클릭");
//   setExtendingArs(true);
// };

// return (
// <Container>
//   {isStart ? (
//     <ArsContainerWrap>
//       <ArsItems>
//         <FirstAutoGreetingWrap>
//           <FirstAutoGreeting />
//           <AutoGreetingExtendWrap>
//             <AutoGreetingExtend />
//             {extendingArs ? (
//               <AutoArsSettingSelectWrap>
//                 <ArsNumber>1</ArsNumber>
//                 <AutoSelectInner>
//                   <SelectionContext>* 동작을 선택해주세요</SelectionContext>
//                   <AutoGreetingSelectBox />
//                 </AutoSelectInner>
//               </AutoArsSettingSelectWrap>
//             ) : (
//               <AutoGreetingExtendButton onClick={handleExtendArsButton} />
//             )}
//           </AutoGreetingExtendWrap>
//         </FirstAutoGreetingWrap>
//       </ArsItems>
//     </ArsContainerWrap>
//   ) : (
//     <>
//       <Title>인사말 설정</Title>
//       <GreetingNumber>015-8504-1294 (으)로 전화가 오면, 다음을 실행합니다.</GreetingNumber>
//       <GreetingBtn onClick={openDialogModal}>인사말 설정하기</GreetingBtn>
//     </>
//   )}
// </Container>
// <ObjectComponent data="https://say015.com/home/arsSetting/list" />
//   );
// }

// const Container = styled.div`
//   box-sizing: border-box;
//   padding: 50px;
//   display: flex;
//   flex-direction: column;
// `;

// const ArsContainerWrap = styled.div`
//   width: 100%;
//   position: relative;
//   display: flex;
// `;

// const ArsItems = styled.ul``;

// const FirstAutoGreetingWrap = styled.li`
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

// const AutoGreetingExtendWrap = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 18px;
// `;

// const AutoArsSettingSelectWrap = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
//   &::after {
//     content: "";
//     position: absolute;
//     left: 3.1rem;
//     top: 4.2rem;
//     display: block;
//     width: 10px;
//     border-top: 1px solid #000;
//   }
// `;

// const ArsNumber = styled.div`
//   font-size: 2rem;

//   &::before {
//     content: "1";
//     color: #fff;
//     width: 32px;
//     height: 32px;
//     background-color: #000;
//     position: absolute;
//     left: 0;
//     top: 2.5rem;
//     border-radius: 5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// const AutoSelectInner = styled.div`
//   width: 150px;
//   height: 80px;
//   border: 1px solid #000;
//   position: relative;
//   padding: 10px;
//   left: 3rem;
//   top: 0;
//   box-sizing: border-box;
//   font-size: 1.2rem;
//   /* text-align: center; */
// `;

// const SelectionContext = styled.p`
//   margin-bottom: 1rem;
// `;

// // const AutoGreetingSelectBox = styled.select``;

// const AutoGreetingExtend = styled.div`
//   width: 2rem;
//   border-top: 1px solid #000;
//   margin-top: 0.5rem;
//   /* position: absolute; */
//   /* right: -2px;
//   top: 39px; */
// `;
// const AutoGreetingExtendButton = styled.span`
//   position: relative;
//   width: 32px;
//   height: 32px;
//   border: 1px solid #000;
//   border-radius: 50px;

//   &::after {
//     content: "";
//     position: absolute;
//     width: 20px;
//     height: 3px;
//     border-top: 10px;
//     left: 0.6rem;
//     top: 1.5rem;
//     background-color: #000;
//   }
//   &::before {
//     content: "";
//     position: absolute;
//     width: 3px;
//     height: 20px;
//     border-top: 10px;
//     left: 1.4rem;
//     top: 0.7rem;
//     background-color: #000;
//   }
// `;

// const Title = styled.h1`
//   font-size: 26px;
//   margin-bottom: 10px;
// `;

// const GreetingNumber = styled.p`
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

// const GreetingBtn = styled.button`
//   font-size: 24px;
//   width: 100%;
//   height: 50px;
// `;

// const ArsModalTemplateWrap = styled.div`
//   width: 400px;
//   height: 300px;
//   border: 1px solid #000;
//   position: absolute;
//   left: 40%;
//   top: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default AutoGreeting;
