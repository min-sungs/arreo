// import React, { FC } from "react";
// import { useRecoilState, useSetRecoilState } from "recoil";
// import { modalState } from "../../recoil/atoms/ModalAtom";
// import { isTextModal } from "../../apis/utils/typeGuard/modalGuard";
// import TextModal from "./TextModal";
// import DialogModal from "./GreetingModal";

// const ArsModal: FC = () => {
//   const [modalList, setModalList] = useRecoilState(modalState);

//   // console.log("modalList", modalList);

//   return (
//     <div>
//       {modalList.map(({ key, props }, index) => {
//         // console.log("modalList key", key, props);
//         if (key === "TextModal") {
//           return <TextModal {...props} key={key + String(index)} />;
//         }

//         if (key === "GreetingModal" || "FirstAutoGreeting") {
//           return <DialogModal {...props} key={key + String(index)} />;
//         }

//         // if (isCustomModal(key)) {
//         //   const CustomModal = customModal[key];
//         //   return <CustomModal {...props} key={key} />;
//         // }

//         return null;
//       })}
//     </div>
//   );
// };

// export default ArsModal;
