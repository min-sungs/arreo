import {NextItem} from "../say015ARS/use015ARS.ts";
import React from "react";

interface IUseArsModalCancle  {
  node: NextItem;
  setModalValue: React.Dispatch<React.SetStateAction<any>>;
}
export const useArsModalCancel = ({node,setModalValue}:IUseArsModalCancle) => {


  const modalOff = () => {
    setModalValue('');
  }


  return {
    modalOff
  }
}