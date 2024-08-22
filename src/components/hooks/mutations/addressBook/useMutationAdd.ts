import {instance} from "../../../../apis/api/clientAxios.ts";

export const useMutationAddTable = async (params:any) => {
  const response = await instance.post("/contacts/create",params);

  return response.data;
}