import {instance, instanceFile} from './clientAxios';
import {IGet015ArsTTS, IGet015ArsTTSWav, IUpdate015JsonFile, IUpdate015Record} from "./types/say015Apis.types.ts";
/**
 * [2024-02-22] ~ : 미사용
 * response : say015용 토큰 발급
 */
export const getIs015 = () => {
  try {
    const response = instance.get('/say015/token');
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * [2024-02-22] ~ : 미사용
 * 015번호 추천 api
 */

export const get015ResNum = () => {
  const response = instance.get('/015-numbers?size=10');
  return response;
};

// 015메세지함 get
export interface IGet015Message {
  currentPage: number;
  keywordValue?: string | undefined;
  keyword?: string | undefined;
}

export const get015Message = async ({ currentPage, keywordValue, keyword }: IGet015Message) => {
  const response = await instance.get('/say015/allMessage', {
    params: {
      pageNumber: currentPage,
      pageSize: 10,
      keywordValue,
      keyword,
    },
  });
  return response.data;
};

// 015 사서함 클릭시 Data get
export const get015Authority = async () => {
  const response = await instance.get('/say015/check-registration');
  return response.data;
};

// 015 사서함 Message 클릭시 Detail get
export const get015DetailMessage = async (messageId: string | null) => {
  const response = await instance.get('/say015/messageDetail', { params: { messageId } });

  return response.data;
};

// 015 사서함 Mesaage Delete
export const delete015Message = async (messageId: number[]) => {
  const response = await instance.post('/say015/deleteMessage', messageId);
  return response.data;
};

// 015 사서함 JsonFile Update
export const update015JsonFile = async ({arsData,say015Number}:IUpdate015JsonFile) => {
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(arsData)], { type: 'application/json' });
  formData.append('file', blob);
  formData.append('filename', `${say015Number}.json`);

  const response = await instanceFile.post('/vms/json', formData);
  return response.data
}

// 015 사서함 안내멘트 녹음 Update
export const update015ArsRecord = async ({formData}:IUpdate015Record) => {
  console.log("forData 가져옴",formData)
  const response = await instance.post('/vms/wav', formData, {
    headers: {
      "Content-Type" : 'audio/x-wav'
    }
  });

  return response.data;
}

// 015 사서함 안내멘트 텍스트 TTS GET
export const get015ArsTTS = async ({text}:IGet015ArsTTS) => {
  console.log(text)
  const response = await instance.get('https://cloud.seoultel.co.kr/google/tts',{
    params: {
      language: 'ko-KR',
      voice: 'ko-KR-Wavenet-A',
      pitch: '1.0',
      speakingRate: '1.0',
      text
    }
  });
  return response.data;
}

// 015 사서함 안내멘트 TTS WAV 파일 가져오기
export const get015ArsTTSWav = async ({filename}:IGet015ArsTTSWav) => {
  const response = await instance.get(`/vms/wav/${filename}`, {
    responseType: 'blob',
  });
  return response.data
}

// 015 사서함 안내멘트 음성 녹음파일 가져오기