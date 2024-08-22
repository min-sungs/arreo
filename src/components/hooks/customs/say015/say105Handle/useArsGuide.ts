import {useEffect, useState} from "react";
import {useArsGuideTts} from "./useArsGuideTts.ts";
import {useArsGuideRecord} from "./useArsGuideRecord.ts";
import {NextItem} from "../say015ARS/use015ARS.ts";
import {useArsGuidePlayAudio} from "./useArsGuidePlayAudio.ts";

type ModalAction = '안내멘트' | '';

interface IUseArsGuide {
  node: NextItem
  nodeChild: NextItem
  updatedJsonFile(): void
  phone015Number: string
  setSelectButton3: any
  setModalValue: (action: ModalAction) => void
}

export const useArsGuide = ({phone015Number,node,nodeChild,updatedJsonFile,setSelectButton3,setModalValue}:IUseArsGuide) => {
  /* 탭 상태 관리 STATE */
  const [tapState, setTapState] = useState<string>('tts');
  /* 음성 파일 실행 Hooks */
  const audioPlayHooks = useArsGuidePlayAudio({node,setTapState});
  /* 텍스트 Hooks */
  const ttsHooks = useArsGuideTts({ phone015Number, node, updatedJsonFile, nodeChild });
  /* 녹음 Hooks */
  const recordHooks = useArsGuideRecord({ phone015Number, node, updatedJsonFile, nodeChild,audioRef: audioPlayHooks.audioRef,setRecordAudioUrl: audioPlayHooks.setRecordAudioUrl  });

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

  const modalSave = () => {
    if(tapState === 'tts'){
      ttsHooks.handleSave()
    }else if(tapState === 'record'){
      recordHooks.uploadAudio()
    }
    setSelectButton3('');
  }
  const modalOff = () => {
    setModalValue('');
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