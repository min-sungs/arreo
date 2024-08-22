/* eslint-disable */
import {useEffect, useRef, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {instance} from "../../../../../apis/api/clientAxios.ts";
import {audioController} from "../../../../../apis/utils/audio/audioController.ts";

interface IUseMusicPlayer {
  filename: string
}
export const useMusicPlayer = ({filename}:IUseMusicPlayer) => {

  const {setAudioUrl, playSwitchBtn,handlePlay,handleTimeUpdate,handleBackTime,handleFrontTime,handleEnded,currentTime,handleLoadedMetadata,audioTime,audioUrl,audioRef,duration,durationView} = audioController();

  /* 오디오 파일 요청 API */
  const {data, isLoading} = useQuery(['audio'], async () => {
    const response = await instance.get(`/vms/voice-record/${filename}`, {
      responseType: 'blob',
    });
    return response.data;
  });

  // url 변환
  useEffect(() => {
    if (data && !isLoading) {

      const audioUrl = URL.createObjectURL(data);
      setAudioUrl(audioUrl);
    }
  }, [data, isLoading]);


  return {
    audioTime,
    durationView,
    currentTime,
    playSwitchBtn,
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleBackTime,
    handleFrontTime,
    handleEnded,
    audioRef,
    duration,
    audioUrl
  }

}