/* eslint-disable */
import React, {useRef, useState} from "react";
import {getUnixTime} from "../../../../../apis/utils/time/unix.ts";
import {NextItem} from "../say015ARS/use015ARS.ts";
import {useMutation} from "@tanstack/react-query";
import {update015ArsRecord} from "../../../../../apis/api/say015Apis.ts";
import {useArsInitData} from "./useArsInitData.ts";
import {useModalHook} from "../../../../commons/modals/useModalHook.tsx";
import {convertBase64ToWavFile, convertBlobToBase64} from "../../../../../apis/utils/createWavFile.ts";
import toWav from 'audiobuffer-to-wav'

interface IUseRecord {
  node: NextItem
  nodeChild: NextItem

  updatedJsonFile(): void

  phone015Number: string
  audioRef: React.RefObject<HTMLAudioElement>
  setRecordAudioUrl: React.Dispatch<React.SetStateAction<string | null>>
}

/**
 * @title : say015 안내멘트 녹음 Hooks
 * */
export const useArsGuideRecord = ({phone015Number, node, updatedJsonFile, nodeChild, audioRef, setRecordAudioUrl}: IUseRecord) => {
  const {warningModal} = useModalHook();
  /* 녹음 태그 useRef */
  const mediaRecorder = useRef<any>(null);
  /* 녹음 아이콘 토글 STATE */
  const [audioIconToggle, setAudioIconToggle] = useState<boolean>(false);
  /* 재녹음 STATE */
  const [audioReRecordState, setAudioReRecordState] = useState<boolean>(false);
  /* 음성파일 Blob STATE */
  const [audioBlob, setAudioBlob] = useState<any>(null);
  /* Ars 초기 데이터 */
  const {initNextData} = useArsInitData({id: node.id});
  /* 음성파일 저장 Mutation */
  const {mutate: mutateUpdateRecord} = useMutation(update015ArsRecord, {
    onSuccess: () => {
      const unixTime = getUnixTime();
      const fileName = `${phone015Number}_record_${unixTime}.wav`
      node.target.type = "READ";
      node.s015Data.action = node.id === 'root' ? '인사말' : "안내멘트";
      node.s015Data.type = "READ";
      node.s015Data.ttsText = "";
      node.target.level = fileName;
      const nodeNextCheck = node.next.filter((el: any) => el.target.type !== "BLANK")
      if (node.id !== 'root' && !(nodeNextCheck.length > 0)) {
        // 인사말이 아니고 우측에 데이터가 없다면
        node.next = initNextData;
      }
      if (node.id !== 'root' && nodeChild.target.type === "BLANK") {
        nodeChild.target.type = "BLANK_ADD"
        nodeChild.source.userinput = "none"
      }
      updatedJsonFile();
    }
  });

  /* 녹음 시작 Hook */
  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({audio: true})
      .then(stream => {
        const recorder: any = new MediaRecorder(stream);
        const chunks: any = [];
        recorder.ondataavailable = (e: any) => {
          chunks.push(e.data);
        };
        recorder.onstop = () => {
          const audioBlob: any = new Blob(chunks, {type: 'audio/wav'});
          setAudioIconToggle(false);
          setAudioBlob(audioBlob);
          setRecordAudioUrl(URL.createObjectURL(audioBlob));
        };

        setAudioIconToggle(true);
        recorder.start();
        mediaRecorder.current = recorder;
      })
      .catch(error => {
        warningModal('녹음', '녹음을 하기 위해서는 마이크 허용을 해야합니다.', true);
      });
  };

  /* 녹음 중단 Hook */
  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
  };

  /* 녹음 저장 + Json 파일 수정 Hook */
  const uploadAudio = async () => {
    // 녹음 저장
    const unixTime = getUnixTime();
    const formData = new FormData();
    const fileName = `${phone015Number}_record_${unixTime}.wav`
    const response = new Response(audioBlob);
    const arrayBuffer: any = await response.arrayBuffer();

    const audioContext = new window.AudioContext();
    audioContext.decodeAudioData(arrayBuffer)
      .then(audioBuffer => {
        const wav = toWav(audioBuffer);
        const wavBlob = new Blob([wav], {type: 'audio/wav'});
        convertBlobToBase64(wavBlob)
          .then((r: any) => {
            return r.replace('data:audio/wav;base64,', '');
          })
          .then((base64Str: string) => {
            return convertBase64ToWavFile(base64Str, 'fileName');
          }).then((file: any) => {
          formData.append('file', file);
          formData.append('filename', fileName);
          mutateUpdateRecord({formData});
        })
        // 이제 wavBlob을 사용하여 원하는 작업을 수행할 수 있습니다.
      }).catch(err => console.error(err));
  };

  /* 재녹음 핸들러 Hook */
  const handleReRecord = () => {
    setAudioReRecordState(prevState => !prevState);
    stopRecording();
    if (audioRef && audioRef.current) audioRef.current.pause();
  }

  return {
    startRecording,
    stopRecording,
    uploadAudio,
    audioIconToggle,
    handleReRecord,
    audioReRecordState,
  }
};