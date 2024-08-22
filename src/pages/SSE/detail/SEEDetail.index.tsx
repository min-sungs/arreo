import React, {useState} from 'react'
import {useFetch} from "../../../apis/utils/reactQuery.ts";
import {v4 as uuidv4} from "uuid"
import * as S from "./SEEDetail.styles.ts"
import {useQuery} from "@tanstack/react-query";
import {useChatDetail} from "../../../components/hooks/customs/chatDetail/useChatDetail.ts";

interface ISEEDetail {
  chatRoomId: string;
  chatRoomRef: React.RefObject<HTMLDivElement>;
}

const SEEDetailIndex = ({chatRoomId,chatRoomRef}: ISEEDetail) => {

const {loadMore,chatHisData} = useChatDetail({chatRoomId,chatRoomRef});

  return (
    <S.ChatWrap>
      {chatHisData ? (
        chatHisData?.map((el:any) => {
          if (el.type === "R") {
            return (
              <S.ChatLi className={"me"} key={uuidv4()} >
                <S.ChatUserId className={"userId"}>{el.sndPhnId}</S.ChatUserId>
                <S.ChatMsg className={"me"}>{el.msg}</S.ChatMsg>
                <S.ChatDate>{el.rcvDttm}</S.ChatDate>
              </S.ChatLi>
            )
          }
          return (
            <S.ChatLi className={"other"}  key={uuidv4()}>
              <S.ChatUserId className={"userId"}>{el.sndPhnId}</S.ChatUserId>
              <S.ChatDate>{el.rcvDttm}</S.ChatDate>
              <S.ChatMsg >{el.msg}</S.ChatMsg>
            </S.ChatLi>
          )
        })
      ) : (
        <span>.</span>
      )}
    </S.ChatWrap>
  )
}
export default SEEDetailIndex;