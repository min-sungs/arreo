import {IExcelMessageSend} from "./excelMessengerApis.types";
import {instance} from "../clientAxios.ts";


export const messageSendApi = async (params:any) => {
  const callback = params.selectedCallback;
  const messages = params.sendDataArr;
  const response = await instance.post('/message/excel/send',{
    callback,
    messages
  })
  return response.data;
}

export const messageEstimateApi = async (params:any) => {
  const callback = params.selectedCallback;
  const messages = params.sendDataArr;
  const response = await instance.post('/message/estimate', {
    callback,
    messages
  })
  return response.data;
}