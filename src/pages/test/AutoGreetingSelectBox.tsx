// import React from "react";
// import styled from "styled-components";
// import { autoGreetingMenuList } from "../../apis/utils/flowChartData";

// import useModal from "../../apis/hooks/useModal";

// const AutoGreetingSelectBox = () => {
//   const modalHook = useModal();

//   const handleBlockType = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     console.log("modal open key value", e.target.value);
//     if (e.target.value === "LINK_SMS") {
//       modalHook.addModal({
//         key: "TextModal",
//         props: {
//           title: "문자메세지 설정",
//           content: "문자메세지를 설정해주세요.",
//           onClose: () => modalHook.removeCurrentModal(),
//         },
//       });
//     } else if (e.target.value === "READ") {
//       modalHook.addModal({
//         key: "GreetingModal",
//         props: {
//           title: "안내문자",
//           content: "안내문자를 설정해주세요.",
//           onClose: () => modalHook.removeCurrentModal(),
//         },
//       });
//     }
//   };

//   return (
//     <AutoLevelSelectBox
//       name="AutoLevelSelectBoxType"
//       // value={}
//       onChange={handleBlockType}
//     >
//       {autoGreetingMenuList.map((option) => (
//         <option key={option.type} value={option.s015Type}>
//           {option.text}
//         </option>
//       ))}
//     </AutoLevelSelectBox>
//   );
// };

// const AutoLevelSelectBox = styled.select`
//   border: 1px solid #000;
//   border-radius: 0.5rem;
//   width: 13rem;
//   height: 3rem;
// `;
// // const AutoLevelSelectBoxOption = styled.option``;
// export default AutoGreetingSelectBox;
