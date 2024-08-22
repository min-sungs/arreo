// 리스트 삭제 Mutation
import {instance} from "../../../../apis/api/clientAxios.ts";

export const useMutationDeleteList = async (checkedListArr:any) => {
  const response = await instance.post('contacts/delete',checkedListArr);
  return response.data;
}

// 그룹 삭제 Mutation
// export const useMutationDeleteGroup

// 휴지통 삭제 Mutation
// export const useMutationDeleteRecycle