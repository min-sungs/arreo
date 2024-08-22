import {client} from "../clientAxios.ts";
import {IQAListApiResponse, IQAListParams} from "./Qa.types.ts";

/**
 * @Title 고객센터 - 자주하는 질문 리스트 조회 API
 *
 * @params IQAListParams
 *
 * @response
 * */
export const QaApis = async (params:IQAListParams):Promise<IQAListApiResponse> => {
  const response = await client.get('/customer/faq',{params});

  return response.data;
}