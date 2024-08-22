/* eslint-disable */
import {ChangeEvent, useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {get015ArsTTS, update015ArsRecord} from "../../../../../apis/api/say015Apis.ts";
import {NextItem} from "../say015ARS/use015ARS.ts";
import {getUnixTime} from "../../../../../apis/utils/time/unix.ts";
import {useArsInitData} from "./useArsInitData.ts";

interface IUseArsGuideTTS {
  node: NextItem
  nodeChild: NextItem

  updatedJsonFile(): void

  phone015Number: string
}

/**
 * @title 015 안내멘트 - 텍스트 tts Hooks
 * */
export const useArsGuideTts = ({nodeChild, node, updatedJsonFile, phone015Number}: IUseArsGuideTTS) => {
  /* 안내멘트 TTS text STATE */
  const [ttsTextState, setTtsTextState] = useState<string>("");
  /* Ars 초기 데이터 */
  const {initNextData} = useArsInitData({id: node.id});
  /* 안내멘트 TTS GET API */
  const {mutate: mutateArsTTS} = useMutation(() => get015ArsTTS({text: ttsTextState}), {
    onSuccess: async (res) => {
      if (ttsTextState === "") return;
      const audioBlob = await handleGetTTS({ttsData: res});
      handleSaveTTS({audioBlob})
    }
  });
  /* 음성파일 저장 Mutation */
  const {mutate: mutateUpdateRecord} = useMutation(update015ArsRecord, {
    onSuccess: (res) => {
      const unixTime = getUnixTime();
      const fileName = `${phone015Number}_tts_${unixTime}.wav`
      node.target.type = "READ";
      node.s015Data.action = node.id === 'root' ? '인사말' : "안내멘트";
      node.s015Data.type = "READ";
      node.s015Data.ttsText = ttsTextState;
      node.target.level = fileName;
      const nodeNextCheck = node.next.filter((el: any) => el.target.type !== "BLANK")
      if (node.id !== 'root' && !(nodeNextCheck.length > 0)) {
        // 인사말이 아니고 우측에 데이터가 없다면
        node.next = initNextData;
      }
      if (node.id !== 'root' && nodeChild.target.type === "BLANK") {
        nodeChild.target.type = "BLANK_ADD";
        nodeChild.source.userinput = "none"
      }
      updatedJsonFile();
    }
  });

  useEffect(() => {
    setTtsTextState(node.s015Data.ttsText)
  }, [node]);

  /* 안내멘트 TTS GET Hook */
  const handleGetTTS = ({ttsData}: any) => {
    const decodedData = atob(ttsData);
    const dataArray = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      dataArray[i] = decodedData.charCodeAt(i);
    }
    const audioBlob: any = new Blob([dataArray], {type: 'audio/wav'});
    return audioBlob;
  }
  /* 안내멘트 TTS 저장 핸들러 Hook */
  const handleSaveTTS = ({audioBlob}: any) => {
    const unixTime = getUnixTime();
    const formData = new FormData();
    const fileName = `${phone015Number}_tts_${unixTime}.wav`
    formData.append('file', audioBlob);
    formData.append('filename', fileName);
    mutateUpdateRecord({formData});
  }

  /* 안내멘트 TTS 저장 Hook */
  const handleSave = () => {
    if (ttsTextState === "") return;
    mutateArsTTS();
  }

  /* 안내멘트 TTS STATE 핸들러 Hook */
  const handleTtsText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTtsTextState(e.currentTarget.value);
  }

  return {
    ttsTextState,
    handleTtsText,
    handleSave,
  }
}