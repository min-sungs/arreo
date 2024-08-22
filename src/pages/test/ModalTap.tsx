// import React, { useCallback, useRef } from "react";
// // import { useRecoilState } from 'recoil';
// // import { textContextState } from '../../recoil/atoms/textContext';
// import { useRecoilState, useSetRecoilState } from "recoil";
// import styled from "styled-components";
// import {
//   autoGreetingTitle,
//   firstArsTextAreaContent
// } from "../../recoil/atoms/GreetingArs";
// import TestRecordingVoice from "./TestRecordingVoice";

// type DialogTapMenuProp = {
//   title: string;
//   content: string;
// };

// function DialogTap(): JSX.Element {
//   const DialogTapMenu: DialogTapMenuProp[] = [
//     { title: "Tab 1", content: "텍스트" },
//     { title: "Tab 2", content: "음성내용" },
//     { title: "Tab 3", content: "음원파일" }
//   ];

//   // const [activeTab, setActiveTab] = useState<Number>(0);
//   const setTextContext = useSetRecoilState<string>(firstArsTextAreaContent);
//   const [autoGreetingTitleIndex, setAutoGreetingTitleIndex] =
//     useRecoilState<DialogTapMenuProp>(autoGreetingTitle);

//   const handleClickTap = useCallback(
//     (tabInfo: DialogTapMenuProp) => {
//       console.log("어떤걸 선택했니", tabInfo);
//       setAutoGreetingTitleIndex(tabInfo);
//     },
//     [setAutoGreetingTitleIndex]
//   );

//   const textInput = useRef<HTMLTextAreaElement>(null);

//   function handleTextArea() {
//     if (textInput.current) {
//       let context = textInput.current.value;
//       console.log(context);
//       setTextContext(context);
//     }
//   }

//   return (
//     <>
//       <TapAllWrap>
//         <TapHeader>
//           <TapMenuListWrap>
//             {DialogTapMenu.map((e: DialogTapMenuProp, idx: number) => {
//               return (
//                 <TapMenuList
//                   key={idx}
//                   value={e.content}
//                   onClick={() => {
//                     handleClickTap(e);
//                   }}
//                   className={
//                     e.content === autoGreetingTitleIndex.content ? "active" : ""
//                   }
//                 >
//                   {e.content}
//                 </TapMenuList>
//               );
//             })}
//           </TapMenuListWrap>
//         </TapHeader>
//         <TapBody>
//           {(autoGreetingTitleIndex.content === "텍스트" && (
//             <TextAreaWrap
//               onChange={handleTextArea}
//               ref={textInput}
//             ></TextAreaWrap>
//           )) ||
//             (autoGreetingTitleIndex.content === "음성내용" && (
//               <TestRecordingVoice />
//             )) ||
//             (autoGreetingTitleIndex.content === "음원파일" && (
//               <div>음원파일</div>
//             ))}
//         </TapBody>
//       </TapAllWrap>
//     </>
//   );
// }

// const TapAllWrap = styled.div`
//   border: 1px solid rgb(229, 229, 229);
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
//   border-radius: 5px;
// `;

// const TapHeader = styled.div`
//   width: 100%;
//   height: 50px;
// `;

// const TapMenuListWrap = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   text-align: center;
//   height: 60px;
// `;

// const TapMenuList = styled.li`
//   font-size: 16px;
//   color: #999;
//   /* border: 1px solid #000; */
//   width: 100%;
//   height: 30px;
//   &.active {
//     color: #000;
//     border-bottom: 1px solid #000;
//   }
// `;

// const TapBody = styled.div`
//   /* border: 1px solid #000; */
//   width: 100%;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const TextAreaWrap = styled.textarea`
//   resize: none;
//   width: 90%;
//   height: 100px;
//   font-size: 14px;
//   font-weight: 700;
//   background-color: #8b8b8b1c;
//   color: black;
//   border: none;
//   border-bottom: 1px solid #0000007e;
//   outline: none;
//   padding: 10px 20px;
//   box-sizing: border-box;
//   position: relative;
// `;

// export default DialogTap;
