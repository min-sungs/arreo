import React, { useState } from 'react';
import * as S from './styles/Say015OK.styles.ts';
import MusicPlayer from './components/MusicPlayer.tsx';
import BigImageModal from './components/BigImageModal.tsx';
import Loader from 'components/common/Loader.tsx';
import { formatPhoneNumber } from 'apis/utils/formats/phoneNumberFormatUtil.ts';

const Say015OK = ({ msgDetailData, msgDetailIsLoading }: any) => {
  const [modalSwitchBtn, setModalSwitchBtn] = useState<boolean>(false);
  return (
    <S.Say015OKWrap>
      {msgDetailIsLoading && <Loader />}
      <S.Say015OKLeftZone>
        <S.HeadTextZone>
          <S.NumberText>
            <span>{formatPhoneNumber(msgDetailData?.sndPhnId)}</span>님에게서 온 메시지
          </S.NumberText>
          <S.TimeWrap>{msgDetailData?.receiveDatetime}</S.TimeWrap>
        </S.HeadTextZone>
        <S.MessageContent>
          {msgDetailData && msgDetailData?.imageData && (
            <S.MessageImageWrap>
              {/* <img src="/img/say015ok/cat.png" alt="catImage" /> */}
              <img src={`data:image/jpeg;base64,${msgDetailData?.imageData}`} alt="이미지" />
              <S.ViewLargerBtn
                onClick={() => {
                  setModalSwitchBtn((prev) => !prev && true);
                }}
              >
                전체보기
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <path
                    d="M5.2032 1.39876C4.16822 1.39876 3.17563 1.80993 2.44378 2.54181C1.71194 3.2737 1.3008 4.26634 1.3008 5.30138C1.3008 6.33642 1.71194 7.32907 2.44378 8.06095C3.17563 8.79284 4.16822 9.204 5.2032 9.204C6.23818 9.204 7.23077 8.79284 7.96261 8.06095C8.69445 7.32907 9.10559 6.33642 9.10559 5.30138C9.10559 4.26634 8.69445 3.2737 7.96261 2.54181C7.23077 1.80993 6.23818 1.39876 5.2032 1.39876ZM3.21403e-08 5.30138C0.000118585 4.47329 0.197863 3.65718 0.5768 2.92088C0.955737 2.18458 1.50492 1.54936 2.17871 1.06801C2.8525 0.586653 3.63144 0.273073 4.45078 0.153326C5.27013 0.0335781 6.10623 0.111122 6.88958 0.379512C7.67293 0.647902 8.38092 1.09939 8.9547 1.69645C9.52849 2.2935 9.9515 3.01889 10.1886 3.81232C10.4257 4.60575 10.47 5.44431 10.3178 6.25831C10.1656 7.07231 9.8214 7.83823 9.31372 8.49243L12.8174 11.9963C12.9359 12.119 13.0015 12.2833 13 12.4538C12.9985 12.6244 12.9301 12.7875 12.8095 12.9081C12.6889 13.0287 12.5258 13.0971 12.3553 13.0986C12.1847 13.1001 12.0204 13.0345 11.8978 12.916L8.39406 9.41214C7.62493 10.0093 6.70368 10.3787 5.73507 10.4782C4.76646 10.5777 3.78935 10.4035 2.91486 9.97521C2.04037 9.54696 1.30359 8.88189 0.7883 8.05565C0.273011 7.22941 -0.000108175 6.27515 3.21403e-08 5.30138Z"
                    fill="white"
                  />
                </svg>
              </S.ViewLargerBtn>
            </S.MessageImageWrap>
          )}

          <S.MessageTextWrap>
            <S.MessageText>
              {msgDetailData && msgDetailData?.subject && <p>{msgDetailData?.subject}</p>}
              {/* SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.) */}
              {msgDetailData?.sndMsg}
            </S.MessageText>
          </S.MessageTextWrap>
        </S.MessageContent>
        {/* Start Music Player */}
        {msgDetailData?.vmsFilePath && <MusicPlayer filename={msgDetailData?.vmsFilePath} />}

        {/* End Music Player */}
        {/* Start BigSizeImageModal */}
        {msgDetailData && msgDetailData?.imageData && modalSwitchBtn ? (
          <BigImageModal setModalSwitchBtn={setModalSwitchBtn} imageData={msgDetailData?.imageData} />
        ) : null}
        {/* End BigSizeImageModal */}
      </S.Say015OKLeftZone>
    </S.Say015OKWrap>
  );
};

export default Say015OK;
