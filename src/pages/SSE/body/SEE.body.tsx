import React, {useEffect, useRef, useState} from "react"
import * as S from "./SEE.styles.ts";
import {v4 as uuidv4} from "uuid"
import {useFetch} from "../../../apis/utils/reactQuery.ts";
import SEEDetailIndex from "../detail/SEEDetail.index.tsx";
import {useMutation} from "@tanstack/react-query";
import {client} from "../../../apis/api/clientAxios.ts";

const SEEBody = () => {
  const chatRoomRef = useRef<HTMLDivElement>(null);

  const [sndPhnId, setSndPhnId] = useState("");
  const [rcvPhnId, setRcvPhnId] = useState("");
  const [sndMsg, setSndMsg] = useState("");

  const [toggle, setToggle] = useState<boolean>(false);
  const [chatRoomId, setChatRoomId] = useState<string>("");
  const {data: chatRoomsData, isLoading: chatRoomsLoading} = useFetch<Array<any>>("/chat/rooms", undefined, {
    retry: false,
  })



  const chatSend = async ({sndPhnId, rcvPhnId, sndMsg}: any) => {
    const params = {sndPhnId, rcvPhnId, sndMsg}
    const response = await client.post("/chat/send", params);
    return response.data;
  }

  const {data, mutate} = useMutation(({sndPhnId, rcvPhnId, sndMsg}: any) => chatSend({sndPhnId, rcvPhnId, sndMsg}))

  const onClickSend = (e: any) => {
    mutate({sndPhnId, rcvPhnId, sndMsg})
  }

  const onClickChatRoomItem = (roomId:any) => {
    const newChatRoomId = roomId;
    setChatRoomId(newChatRoomId);

    const splitRoomId = newChatRoomId.split("_");
    setSndPhnId(splitRoomId[0]);
    setRcvPhnId(splitRoomId[1]);
    setToggle(true);
  };

  return (
    <S.ChatRoomWrap>
      <S.Wrap ref={chatRoomRef}>
        <S.ChatListContainer>

          {toggle ?
            (
              <SEEDetailIndex chatRoomId={chatRoomId} chatRoomRef={chatRoomRef}/>
            ) : (
              <S.ChatUl>
                {chatRoomsData?.map((el: any) => (
                  <S.ChatLl key={uuidv4()} onClick={() =>onClickChatRoomItem(el.roomId)}>
                    <S.ChatIconCircle>
                      <S.ChatIcon src={'./img/ARREO.svg'}/>
                    </S.ChatIconCircle>

                    <S.ChatChatInfoWrap>
                      <S.ChatName>{el.roomId}</S.ChatName>
                      <S.ChatText>{el?.latestMsg}</S.ChatText>
                    </S.ChatChatInfoWrap>

                    <S.RightWrap>
                      <S.ChatDate>{el?.latestRcvDttm}</S.ChatDate>
                      {el?.unreadCount > 0 && (
                        <S.AlertMsgDiv>
                          <S.AlertMsgCount>{el?.unreadCount}</S.AlertMsgCount>
                        </S.AlertMsgDiv>
                      )}
                    </S.RightWrap>
                  </S.ChatLl>
                ))}

              </S.ChatUl>
            )
          }
        </S.ChatListContainer>
      </S.Wrap>
      {toggle && (
        <S.ChatSendWrap>
          <S.ChatSendInput type={"text"} onChange={(event:any)=>{ setSndMsg(event.currentTarget.value)}}/>
          <S.ChatSendButton onClick={onClickSend}>전송</S.ChatSendButton>
        </S.ChatSendWrap>
      )}
    </S.ChatRoomWrap>
  )
}

export default SEEBody