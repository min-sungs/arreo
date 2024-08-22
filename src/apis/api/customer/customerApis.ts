/* 공지사항 */
import {client} from "../clientAxios.ts";
import { ICustomerListParams, ICustomerListResponse} from "./customer.types.ts";

/**
 * @title : 공지사항 리스트 조회 API
 *
 * @params ICustomerListParams
 *
 * @Response ICustomerListResponse
 * */

export const customerListApi = async (params:ICustomerListParams):Promise<ICustomerListResponse> => {
  const response = await client.get("/customer/list", {params});
  return response.data;
}