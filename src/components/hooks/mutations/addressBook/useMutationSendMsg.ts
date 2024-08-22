import {instanceFile} from "../../../../apis/api/clientAxios.ts";

interface IUseMutationSendMsg {
  dto: any
  file:any
}

export const useMutationSendMsg = async ({file,dto}:IUseMutationSendMsg):Promise<void> => {

  const json = JSON.stringify(dto);
  const formData = new FormData();
  const blob = new Blob([json], {type: 'application/json'});

  formData.append('file', file);
  formData.append('dto', blob);
  const response = await instanceFile.post('/message/legacy/send', formData);
  return response.data;
}