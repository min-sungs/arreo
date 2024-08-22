import React, {useEffect, useState} from "react";
import {useArsGuideTts} from "./useArsGuideTts.ts";
import {useArsGuideRecord} from "./useArsGuideRecord.ts";
import {NextItem} from "../say015ARS/use015ARS.ts";
import {useArsGuidePlayAudio} from "./useArsGuidePlayAudio.ts";


interface IUseArsMainModal {
  phone015Number: string
  node: NextItem; // 현재 수정 및 저장 타겟 node
  updatedJsonFile(): void; // 저장할 때 JSON File 을 수정해주는 함수
  arsData: any
  mainModalToggle:boolean
  setMainModalToggle: React.Dispatch<React.SetStateAction<boolean>>

}

export const useArsMainModal = ({arsData,phone015Number,updatedJsonFile,mainModalToggle,setMainModalToggle}:IUseArsMainModal) => {
  /* 탭 상태 관리 STATE */
  const [tapState, setTapState] = useState<string>('tts');
  /* 음성 파일 실행 Hooks */
  const audioPlayHooks = useArsGuidePlayAudio({node:arsData,setTapState});
  /* 텍스트 Hooks */
  const ttsHooks = useArsGuideTts({ phone015Number, node:arsData, updatedJsonFile, nodeChild: arsData.next });
  /* 녹음 Hooks */
  const recordHooks = useArsGuideRecord({ phone015Number, node:arsData, updatedJsonFile, nodeChild: arsData.next,audioRef: audioPlayHooks.audioRef,setRecordAudioUrl: audioPlayHooks.setRecordAudioUrl  });

  useEffect(() => {
    if(audioPlayHooks.audioRef.current && audioPlayHooks.audioRef) {
      audioPlayHooks.audioRef.current.load();
    }
  }, [audioPlayHooks.ttsAudioUrl,audioPlayHooks.recordAudioUrl,audioPlayHooks.fileAudioUrl]);

  /* 탭 상태 관리 Hook */
  const clickOff = (e: any) => {
    if (e.target.id === 'text') {
      setTapState('tts');
    } else if (e.target.id === 'voice') {
      setTapState('record')
    } else if (e.target.id === 'file') {
      setTapState('file');
    }
  }

  const modalOff = () => {
    setMainModalToggle(false)
  }

  const modalSave = () => {
    if(tapState === 'tts'){
      ttsHooks.handleSave();

    }else if(tapState === 'record'){
      recordHooks.uploadAudio()
    }
    modalOff()
  }

  return {
    ttsHooks,
    recordHooks,
    audioPlayHooks,
    clickOff,
    modalSave,
    tapState,
    modalOff
  }
}