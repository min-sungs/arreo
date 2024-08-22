/* eslint-disable */
import React, { useState } from "react";
import * as S from '../styles/Say015OK.styles.ts';
import {useMusicPlayer} from "../../../components/hooks/customs/say015/say015Ok/useMusicPlayer.ts";

interface IMusicPlayer {
  filename: string
}
const MusicPlayer = ({filename}:IMusicPlayer) => {
    const hooks = useMusicPlayer({filename});
    return (
        <S.MusicPlayerWrap>
            {/* Start PlayLine */}
          <audio
            style={{display:'none'}}
            controls ref={hooks.audioRef}
            onTimeUpdate={hooks.handleTimeUpdate}
            onLoadedMetadata={hooks.handleLoadedMetadata}
            onEnded={hooks.handleEnded}
          >
            {/* 실제로 되야하는 코드  잘 되다가 갑자기 안됨 창훈님한테 월요일에 물어봐야함 -- 대박 창훈님 계정 음성파일인데 다른 계정이 쓸려니깐.....ㅎ*/}
            <source src={hooks.audioUrl} type="audio/wav"/>
            {/* 이거는 창민팀장님한테 받은 테스트용 음성파일 */}
            {/*<source src={"https://pbxfile.seoultel.co.kr/public/01585049388/01064649388_01585049388_20240221161117.wav?flag=download"} type="audio/wav"/>*/}
          </audio>
          <input
            type="range"
            min={0}
            max={hooks.duration}
            value={hooks.currentTime}
            // onChange={handleSeek}
          />
            <S.PlayRail style={{width:(hooks.currentTime / hooks.duration) * 100 + "%"}} />
            {/* End PlayLine */}
            {/* Start Play Time Text Zone */}
            <S.PlayerTimeTextZone>
              <S.PlayerStartTimeText>{hooks.audioTime}</S.PlayerStartTimeText>
              <S.PlayerEndTimeText>{hooks.durationView}</S.PlayerEndTimeText>
            </S.PlayerTimeTextZone>
            {/* End Play Time Text Zone */}
            {/* Start Btns Zone */}
            <S.BtnsZone>
              <S.Prev10Btn onClick={hooks.handleBackTime}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                        <path d="M12.0843 4.93852V0.752488C12.0843 0.0773208 11.2613 -0.252761 10.7888 0.227358L4.99719 5.91377C4.69236 6.21384 4.69236 6.67896 4.99719 6.97903L10.7736 12.6654C11.2613 13.1306 12.0843 12.8005 12.0843 12.1253V7.93927C17.7693 7.93927 22.2655 13.0705 21.0157 18.877C20.2993 22.2828 17.495 25.0285 14.0505 25.7337C8.60935 26.859 3.76265 23.183 3.03107 18.2168C2.97674 17.8642 2.79655 17.5421 2.52283 17.3084C2.24911 17.0747 1.89976 16.9446 1.53744 16.9415C0.622967 16.9415 -0.10861 17.7367 0.0133192 18.6369C0.958273 25.2235 7.32909 30.0998 14.5382 28.7194C19.2934 27.8042 23.119 24.0383 24.0487 19.3571C25.5576 11.6602 19.6135 4.93852 12.0843 4.93852Z" fill="black" />
                    </svg>
                    <span>10</span>
                </S.Prev10Btn>
                <S.StartAndStopBtn onClick={hooks.handlePlay}>
                    {
                        !hooks.playSwitchBtn ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                <path d="M22.9073 9.67572C23.5393 10.0118 24.068 10.5135 24.4366 11.1271C24.8052 11.7406 25 12.4429 25 13.1587C25 13.8745 24.8052 14.5768 24.4366 15.1904C24.068 15.804 23.5393 16.3057 22.9073 16.6417L6.04888 25.8091C3.33432 27.2868 0 25.3657 0 22.3274V3.99132C0 0.951752 3.33432 -0.968048 6.04888 0.507L22.9073 9.67572Z" fill="black" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M0 5.2C0 2.7482 -7.7486e-08 1.5236 0.7618 0.7618C1.5236 -7.7486e-08 2.7482 0 5.2 0C7.6518 0 8.8764 -7.7486e-08 9.6382 0.7618C10.4 1.5236 10.4 2.7482 10.4 5.2V20.8C10.4 23.2518 10.4 24.4764 9.6382 25.2382C8.8764 26 7.6518 26 5.2 26C2.7482 26 1.5236 26 0.7618 25.2382C-7.7486e-08 24.4764 0 23.2518 0 20.8V5.2ZM15.6 5.2C15.6 2.7482 15.6 1.5236 16.3618 0.7618C17.1236 -7.7486e-08 18.3482 0 20.8 0C23.2518 0 24.4764 -7.7486e-08 25.2382 0.7618C26 1.5236 26 2.7482 26 5.2V20.8C26 23.2518 26 24.4764 25.2382 25.2382C24.4764 26 23.2518 26 20.8 26C18.3482 26 17.1236 26 16.3618 25.2382C15.6 24.4764 15.6 23.2518 15.6 20.8V5.2Z" fill="black" />
                            </svg>
                    }
                </S.StartAndStopBtn>
                <S.Next10Btn onClick={hooks.handleFrontTime}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                        <path d="M12.9157 4.93852V0.752488C12.9157 0.0773208 13.7387 -0.252761 14.2112 0.227358L20.0028 5.91377C20.3076 6.21384 20.3076 6.67896 20.0028 6.97903L14.2264 12.6654C13.7387 13.1306 12.9157 12.8005 12.9157 12.1253V7.93927C7.2307 7.93927 2.73455 13.0705 3.98432 18.877C4.70066 22.2828 7.50504 25.0285 10.9495 25.7337C16.3907 26.859 21.2373 23.183 21.9689 18.2168C22.0233 17.8642 22.2034 17.5421 22.4772 17.3084C22.7509 17.0747 23.1002 16.9446 23.4626 16.9415C24.377 16.9415 25.1086 17.7367 24.9867 18.6369C24.0417 25.2235 17.6709 30.0998 10.4618 28.7194C5.70658 27.8042 1.88104 24.0383 0.951328 19.3571C-0.55755 11.6602 5.38651 4.93852 12.9157 4.93852Z" fill="black" />
                    </svg>
                    <span>10</span>
                </S.Next10Btn>
            </S.BtnsZone>
            {/* End Btns Zone */}
        </S.MusicPlayerWrap>
    )
}

export default MusicPlayer;