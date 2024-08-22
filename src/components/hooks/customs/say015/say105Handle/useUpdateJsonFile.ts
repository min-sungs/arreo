import {useMutation} from "@tanstack/react-query";
import {instanceFile} from "../../../../../apis/api/clientAxios.ts";
import React from "react";
import {update015JsonFile} from "../../../../../apis/api/say015Apis.ts";
import {useRecoilValue} from "recoil";
import {say015Number} from "../../../../../recoil/atoms/say015Atom.ts";

interface IUseUpdateJsonFile{
  arsData: any
  setArsData: React.Dispatch<any>
}
export const useUpdateJsonFile = ({arsData,setArsData}:IUseUpdateJsonFile) => {
  const say015NumberState = useRecoilValue(say015Number);
  /* JSON FILE UPDATED Mutation */
  const {mutate:mutateUpdatedJsonFile} = useMutation(() => update015JsonFile({arsData,say015Number:say015NumberState as string}) , {
    onSuccess: (res:any) => {
      setArsData(res);
    }
  });
  return {
    mutateUpdatedJsonFile
  }
}