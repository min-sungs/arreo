import {useMutation} from "@tanstack/react-query";
import {get015ArsTTSWav} from "../../../../../apis/api/say015Apis.ts";
import React, {useEffect, useState} from "react";
import {NextItem} from "../say015ARS/use015ARS.ts";
import {audioController} from "../../../../../apis/utils/audio/audioController.ts";

interface IUseArsGuidePlayAudio {
  node: NextItem
  setTapState: React.Dispatch<React.SetStateAction<string>>
}

export const useArsGuidePlayAudio = ({node,setTapState}:IUseArsGuidePlayAudio) => {

  const {audioRef,setAudioUrl,audioTime,currentTime,playSwitchBtn,handlePlay,handleTimeUpdate,handleBackTime,handleFrontTime,handleEnded,handleLoadedMetadata,duration,durationView} = audioController();
  /* TTS 음성 url */
  const [ttsAudioUrl, setTTSAudioUrl] = useState<string | null>(null);
  /* Record 음성 URL */
  const [recordAudioUrl, setRecordAudioUrl] = useState<string | null>(null);
  /* File 음성 url */
  const [fileAudioUrl, setFileAudioUrl] = useState<string | null>(null);
  const { mutate: mutateGetArsTTSWav, data, isLoading } = useMutation(get015ArsTTSWav);
  const playAudio = ({ fileName }: { fileName: string }) => {
    mutateGetArsTTSWav({ filename: fileName });
  }

  useEffect(() => {
    if (node.target.level !== "") {
      playAudio({ fileName: `${node.target.level}` })
      setTapState(node.target.level.split('_')[1]);
    }
  }, [node.target.level]);

  useEffect(() => {
    if (data && !isLoading) {
      const tap = node.target.level.split('_')[1];
      const audioUrl = URL.createObjectURL(data);

      if(tap === 'tts'){
        setTTSAudioUrl(audioUrl);
      }else if(tap === 'record'){
        setRecordAudioUrl(audioUrl);
      }else if(tap === 'file'){
        setFileAudioUrl(audioUrl)
      }
      setAudioUrl(audioUrl)
    }
  }, [data, isLoading]);

  return {
    audioRef,
    audioTime,
    currentTime,
    playSwitchBtn,
    handlePlay,
    handleTimeUpdate,
    handleBackTime,
    handleFrontTime,
    handleEnded,
    handleLoadedMetadata,
    duration,
    durationView,
    ttsAudioUrl,
    recordAudioUrl,
    fileAudioUrl,
    setRecordAudioUrl,
    setTTSAudioUrl,
    setFileAudioUrl,
    setAudioUrl
  }
}