/* eslint-disable */
import {useEffect, useRef, useState} from "react";

export const audioController = () => {
  // 오디오 REF
  const audioRef = useRef<HTMLAudioElement>(null);
  /* 오디오 실행 시간 표출 STATE */
  const [audioTime, setAudioTime] = useState<string>("00:00"); // 실행시간
  /* 오디오 전체 시간 표출 STATE */
  const [durationView, setDurationView] = useState<string>("00:00"); // 전체 시간

  /* 오디오 실행 시간 STATE */
  const [currentTime, setCurrentTime] = useState(0);
  /* 오디오 전체 시간 STATE */
  const [duration, setDuration] = useState(0);
  /* 오디오 재생버튼 STATE */
  const [playSwitchBtn, setPlaySwitchBtn] = useState<boolean>(false);
  /* 오디오 src STATE */
  const [audioUrl, setAudioUrl] = useState<any>(null);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.load(); // 새로운 소스 로드

      const updateCurrentTime = () => {
        if (audioRef.current) setCurrentTime(Math.floor(audioRef.current.currentTime))
      };

      const updateDuration = () => {
        if (audioRef.current) setDuration(Math.floor(audioRef.current.duration));
      };

      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
      audioRef.current.addEventListener('loadedmetadata', updateDuration);
      return () => {
        if (!audioRef.current) return;
        audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
        audioRef.current.removeEventListener('loadedmetadata', updateDuration);
      };
    }

  }, [audioRef, audioUrl]);

  /* 표출 시간 포맷 Hook */
  const formatTime = (duration: number) => {
    const minutes = Math.floor(duration / 60).toString().padStart(2, '0');
    const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  /* 오디오 실행 핸들러 Hook */
  const handlePlay = () => {
    setPlaySwitchBtn((prevState: boolean) => {
      if (!audioRef.current) return !prevState;
      if (prevState) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      return !prevState
    });
  };
  /* 오디오 실행 시간 핸들러 Hook */
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    setAudioTime(formatTime(currentTime))
  };
  /* 오디오 전체 시간 핸들러 Hook */
  const handleLoadedMetadata = () => {
    if (audioRef.current) setDurationView(formatTime(audioRef.current.duration));
  };

  /* 오디오 되감기 핸들러 Hook */
  const handleBackTime = () => {
    if (audioRef.current) audioRef.current.currentTime -= 10; // 10초씩 되감기
  };
  /* 오디오 빨리 감기 핸들러 Hook */
  const handleFrontTime = () => {
    if (audioRef.current) audioRef.current.currentTime += 10; // 10초씩 되감기
  };
  /* 오디오 종료 핸들러 Hook */
  const handleEnded = () => {
    setPlaySwitchBtn(false);
    setCurrentTime(duration);
  };

  return {
    handlePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleBackTime,
    handleFrontTime,
    handleEnded,
    audioRef,
    audioTime,
    durationView,
    currentTime,
    duration,
    playSwitchBtn,
    audioUrl,
    setAudioUrl
  }


}