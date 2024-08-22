import {useMutation} from "@tanstack/react-query";
import {instance} from "../../../../apis/api/clientAxios.ts";

interface IMutation {
  prepayPayNo:string,
  callback: string
}
export const useMutationReSend = () => {
  const {mutate:reSendMutate,data:reSendData,isLoading:reSendLoading} = useMutation(async ({prepayPayNo,callback}:IMutation) => {
    const params = {prepayPayNo,callback}
    const response = await instance.get("/resendMessage", {
      params
    });
    return response.data;
  });

  return {reSendMutate,reSendData,reSendLoading}
}