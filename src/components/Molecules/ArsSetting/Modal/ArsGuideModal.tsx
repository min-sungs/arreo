/* eslint-disable */
import React from 'react';
import * as S from './style/ArsGuideModal.styles';
import BaseButton from '../../../Atom/BaseButton';
import { NextItem } from "../../../hooks/customs/say015/say015ARS/use015ARS.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useArsGuide } from "../../../hooks/customs/say015/say105Handle/useArsGuide.ts";

type ModalAction = '안내멘트' | '';

interface modalOpenProps {
  setModalValue: (action: ModalAction) => void;
  addChild: () => void;
  node: NextItem; // 현재 수정 및 저장 타겟 node
  updatedJsonFile(): void; // 저장할 때 JSON File 을 수정해주는 함수
  nodeChild: NextItem; // node 의 다음 배열
  setSelectButton3: any;
}


const ArsGuideModal: React.FC<modalOpenProps> = ({ nodeChild, updatedJsonFile, node, setModalValue, setSelectButton3 }) => {


  const queryClient = useQueryClient();
  /* 015 번호 */
  const phone015Number: any = queryClient.getQueryData(["authorityData"]);

  /* 안내멘트 모달창 Hooks */
  const { tapState, modalSave, audioPlayHooks, ttsHooks, recordHooks, clickOff, modalOff } = useArsGuide({
    phone015Number: phone015Number.number015,
    node,
    updatedJsonFile,
    nodeChild,
    setSelectButton3,
    setModalValue
  })


  return (

    <S.SmsContainer id='smsContainer'>
      <S.SmsCover id='smsCover' onClick={clickOff}>
        <S.Title>안내멘트</S.Title>

        <S.TextCover className={tapState === 'tts' ? 'on' : 'off'}>
          <S.TapMenu>
            <li id='text' className={tapState === 'tts' ? 'on' : ''}>텍스트</li>
            <li id='voice' className={tapState === 'record' ? 'on' : ''}>녹음</li>
            {/*<li id='file' className={tapState === 'file' ? 'on' : ''}>음원파일</li>*/}
            <li>
              <ul>
                {
                  tapState === 'tts' && (
                    <>
                      {
                        audioPlayHooks.ttsAudioUrl && (
                          <>
                            <audio
                              style={{ display: 'none' }}
                              ref={audioPlayHooks.audioRef}
                              onTimeUpdate={audioPlayHooks.handleTimeUpdate}
                              onLoadedMetadata={audioPlayHooks.handleLoadedMetadata}
                              onEnded={audioPlayHooks.handleEnded}
                            >
                              <source src={audioPlayHooks.ttsAudioUrl} type="audio/wav" />
                            </audio>
                          </>
                        )
                      }
                      <li>
                        {/* 퍼블리싱 요청 - 텍스트 */}
                        <S.TextArea placeholder='음성변환할 텍스트를 입력해주세요.' value={ttsHooks.ttsTextState} onChange={ttsHooks.handleTtsText} />
                        {
                          (audioPlayHooks.ttsAudioUrl && node.s015Data.ttsText === ttsHooks.ttsTextState) &&
                          (
                            <S.StartButton>
                              <button className='voiceButton' onClick={audioPlayHooks.handlePlay}>
                                <span></span>
                              </button>
                            </S.StartButton>
                          )
                        }
                      </li>
                    </>
                  )
                }
                {
                  tapState === 'record' && (
                    <>
                      {
                        audioPlayHooks.recordAudioUrl && (
                          <>
                            <audio
                              style={{ display: 'none' }}
                              ref={audioPlayHooks.audioRef}
                              onTimeUpdate={audioPlayHooks.handleTimeUpdate}
                              onLoadedMetadata={audioPlayHooks.handleLoadedMetadata}
                              onEnded={audioPlayHooks.handleEnded}
                            >
                              <source src={audioPlayHooks.recordAudioUrl} type="audio/wav" />
                            </audio>
                          </>
                        )
                      }
                      <li className='recording'>
                        {/* 퍼블리싱 요청 - 녹음 */}
                        <div className="voiceGroup">
                          {(!recordHooks.audioReRecordState && audioPlayHooks.recordAudioUrl) ? (<p className="text">버튼 클릭하여 실행</p>) : (<p className="text">버튼 클릭하여 녹음 시작</p>)}

                          <div className="recordGroup">
                            <div className="recordBox">
                              {
                                // (!recordHooks.audioReRecordState && audioPlayHooks.audioUrl) ?
                                (!recordHooks.audioReRecordState && audioPlayHooks.recordAudioUrl) ?
                                  /* 음성 파일이 있을 경우 */
                                  (
                                    <>
                                      {/* 음성 파일 실행 SVG */}
                                      <button className={`recordButton recordStart ${!audioPlayHooks.playSwitchBtn ? 'active' : ''}`} onClick={audioPlayHooks.handlePlay}>
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M10.9955 4.77951C11.2989 4.94552 11.5526 5.19335 11.7296 5.49643C11.9065 5.79951 12 6.14643 12 6.50001C12 6.85359 11.9065 7.2005 11.7296 7.50359C11.5526 7.80667 11.2989 8.05449 10.9955 8.22051L2.90346 12.7489C1.60047 13.4788 0 12.5299 0 11.0291V1.97159C0 0.470136 1.60047 -0.478186 2.90346 0.250442L10.9955 4.77951Z"
                                            fill="#fff" />
                                        </svg>
                                      </button>
                                      {/* 음성 파일 실행중 SVG */}
                                      <button className={`recordButton recordStop ${audioPlayHooks.playSwitchBtn ? 'active' : ''}`} onClick={audioPlayHooks.handlePlay}>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M0 2.6C0 1.3741 -3.8743e-08 0.7618 0.3809 0.3809C0.7618 -3.8743e-08 1.3741 0 2.6 0C3.8259 0 4.4382 -3.8743e-08 4.8191 0.3809C5.2 0.7618 5.2 1.3741 5.2 2.6V10.4C5.2 11.6259 5.2 12.2382 4.8191 12.6191C4.4382 13 3.8259 13 2.6 13C1.3741 13 0.7618 13 0.3809 12.6191C-3.8743e-08 12.2382 0 11.6259 0 10.4V2.6ZM7.8 2.6C7.8 1.3741 7.8 0.7618 8.1809 0.3809C8.5618 -3.8743e-08 9.1741 0 10.4 0C11.6259 0 12.2382 -3.8743e-08 12.6191 0.3809C13 0.7618 13 1.3741 13 2.6V10.4C13 11.6259 13 12.2382 12.6191 12.6191C12.2382 13 11.6259 13 10.4 13C9.1741 13 8.5618 13 8.1809 12.6191C7.8 12.2382 7.8 11.6259 7.8 10.4V2.6Z"
                                            fill="#fff" />
                                        </svg>
                                      </button>
                                    </>
                                  ) :
                                  /* 음성 파일 없을 경우 */
                                  (
                                    <>
                                      {/* 녹음 마이크 SVG */}
                                      <button className={`recordButton recordStart ${!recordHooks.audioIconToggle ? 'active' : ''}`} onClick={recordHooks.startRecording}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 44" fill="none">
                                          <path d="M24 9C24 5.13401 20.866 2 17 2C13.134 2 10 5.13401 10 9V22C10 25.866 13.134 29 17 29C20.866 29 24 25.866 24 22V9Z" fill="#fff" stroke="#fff"
                                            strokeWidth="4" strokeLinejoin="round" />
                                          <path d="M2 21C2 29.284 8.716 36 17 36M17 36C25.284 36 32 29.284 32 21M17 36V42" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </button>
                                      {/* 녹음 정지 SVG */}
                                      <button className={`recordButton recordStop ${recordHooks.audioIconToggle ? 'active' : ''}`} onClick={recordHooks.stopRecording}><span /></button>
                                    </>
                                  )
                              }
                            </div>
                            {audioPlayHooks.recordAudioUrl && <button className='reRecordButton' onClick={recordHooks.handleReRecord}>{recordHooks.audioReRecordState ? "실행" : "재녹음"}</button>}
                          </div>
                        </div>
                      </li>
                    </>
                  )
                }
                {
                  // tapState === 'file' && (
                  //   <li className='fileGroup'>
                  //     <div className="fileBox">
                  //       <label htmlFor="fileInput" className='clipIcon'>
                  //         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44" fill="none">
                  //           <path
                  //             d="M24 13.1111V30.8889C24 33.8357 22.8411 36.6619 20.7782 38.7456C18.7153 40.8294 15.9174 42 13 42C10.0826 42 7.28473 40.8294 5.22183 38.7456C3.15892 36.6619 2 33.8357 2 30.8889V9.77778C2 7.71498 2.81125 5.73668 4.25528 4.27806C5.69931 2.81944 7.65783 2 9.7 2C11.7422 2 13.7007 2.81944 15.1447 4.27806C16.5888 5.73668 17.4 7.71498 17.4 9.77778V28.6667C17.4 29.8454 16.9364 30.9759 16.1113 31.8094C15.2861 32.6429 14.167 33.1111 13 33.1111C11.833 33.1111 10.7139 32.6429 9.88873 31.8094C9.06357 30.9759 8.6 29.8454 8.6 28.6667V13.1111"
                  //             stroke="#98999A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  //         </svg>
                  //       </label>
                  //       <input type="file" id="fileInput" title='asdadasdasd'/>
                  //     </div>
                  //     <S.StartButton>
                  //       <button className='musicButton'>
                  //         {/* 실행 SVG */}
                  //         <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  //           <path
                  //             d="M10.9955 4.77951C11.2989 4.94552 11.5526 5.19335 11.7296 5.49643C11.9065 5.79951 12 6.14643 12 6.50001C12 6.85359 11.9065 7.2005 11.7296 7.50359C11.5526 7.80667 11.2989 8.05449 10.9955 8.22051L2.90346 12.7489C1.60047 13.4788 0 12.5299 0 11.0291V1.97159C0 0.470136 1.60047 -0.478186 2.90346 0.250442L10.9955 4.77951Z"
                  //             fill="#fff"/>
                  //         </svg>
                  //         {/* 재생 SVG */}
                  //         {/*<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                  //         {/*  <path d="M0 2.6C0 1.3741 -3.8743e-08 0.7618 0.3809 0.3809C0.7618 -3.8743e-08 1.3741 0 2.6 0C3.8259 0 4.4382 -3.8743e-08 4.8191 0.3809C5.2 0.7618 5.2 1.3741 5.2 2.6V10.4C5.2 11.6259 5.2 12.2382 4.8191 12.6191C4.4382 13 3.8259 13 2.6 13C1.3741 13 0.7618 13 0.3809 12.6191C-3.8743e-08 12.2382 0 11.6259 0 10.4V2.6ZM7.8 2.6C7.8 1.3741 7.8 0.7618 8.1809 0.3809C8.5618 -3.8743e-08 9.1741 0 10.4 0C11.6259 0 12.2382 -3.8743e-08 12.6191 0.3809C13 0.7618 13 1.3741 13 2.6V10.4C13 11.6259 13 12.2382 12.6191 12.6191C12.2382 13 11.6259 13 10.4 13C9.1741 13 8.5618 13 8.1809 12.6191C7.8 12.2382 7.8 11.6259 7.8 10.4V2.6Z" fill="#fff"/>*/}
                  //         {/*</svg>*/}
                  //
                  //       </button>
                  //     </S.StartButton>
                  //   </li>
                  // )
                }
              </ul>
            </li>
          </S.TapMenu>

        </S.TextCover>
        <S.GuideBottom>
          {/*{*/}
          {/*  audioPlayHooks.audioUrl ? (<BaseButton onClick={modalSave}>수정</BaseButton>) : <BaseButton onClick={modalSave}>저장</BaseButton>*/}
          {/*}*/}
          <BaseButton onClick={modalSave}>저장</BaseButton>
          <BaseButton marginLeft='24px' onClick={modalOff}>취소</BaseButton>
        </S.GuideBottom>


      </S.SmsCover>
    </S.SmsContainer>


  )
}

export default ArsGuideModal;