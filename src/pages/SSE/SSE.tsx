import React, {useState} from 'react';
import * as S from "./SSE.styles.ts"
import './SEE.styles.css';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {client} from "../../apis/api/clientAxios.ts";
import SEEHeader from "./header/SEE.header.tsx";
import SEEBody from "./body/SEE.body.tsx";

const SSE = () => {

  const queryClient = useQueryClient();


  const [sndPhnId, setSndPhnId] = useState("");
  const [rcvPhnId, setRcvPhnId] = useState("");
  const [sndMsg, setSndMsg] = useState("");
  const chatSend = async ({sndPhnId, rcvPhnId, sndMsg}: any) => {
    const params = {sndPhnId, rcvPhnId, sndMsg}
    const response = await client.post("/chat/send", params);
    return response.data;
  }
  const {mutate} =
    useMutation(({sndPhnId, rcvPhnId, sndMsg}: any) => chatSend({sndPhnId, rcvPhnId, sndMsg}));

  // ? MO 기능 테스트
  const onClickSend = (e: any) => {
    mutate({sndPhnId, rcvPhnId, sndMsg})
  }

  return (


    <S.Wrap>
      <input type="text" onChange={(e: any) => setSndPhnId(e.currentTarget?.value)}/>
      <input type="text" onChange={(e: any) => setRcvPhnId(e.currentTarget?.value)}/>
      <input type="text" onChange={(e: any) => setSndMsg(e.currentTarget?.value)}/>
      <button onClick={onClickSend}>전송</button>
      <S.ChatContainer>
        <SEEHeader/>
        <SEEBody/>
      </S.ChatContainer>
    </S.Wrap>


  );
};

export default SSE;