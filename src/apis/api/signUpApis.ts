import axios from 'axios';

/**
 *
 * @param callbackUrl : 인증 후 콜백 url
 * @param errorUrl  : 인증 실패 시 콜백 url
 * @returns
 */
// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const encodeData = (callbackUrl: string | number | boolean, errorUrl: string | number | boolean) => {
  const callback: String = encodeURIComponent(callbackUrl);
  const error: String = encodeURIComponent(errorUrl);
  return axios({
    url: `${process.env.REACT_APP_SERVER_URL}/nice/authorize?callbackUrl=${callback}&errorUrl=${error}`,
    method: 'GET',
  });
};

export const postNiceValidate = async (nInfo: any) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup/identity-verification`, {
      encodeData: JSON.parse(nInfo),
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

// 회원가입 완료
export const postSignUpComplete = async (props: any) => {
  const data = {
    phnId: props.phnId,
    usrNm: props.usrNm,
    usrEmail: props.usrEmail,
    smsRcvYn: props.smsRcvYn,
    emailRcvYn: props.emailRcvYn,
    usrPass: props.usrPass,
    encodeData: props.encodeData,
  };

  const response = await axios.post(
    // `${process.env.REACT_APP_SERVER_URL}/signup/confirm?phnId=${props.phnId}&phnId=${props.usrNm}&usrEmail=${props.usrEmail}&smsRcvYn=${props.emailRcvYn}&usrPass=${props.usrPass}&encodeData=${props.encodeData}`,
    `${process.env.REACT_APP_SERVER_URL}/signup/confirm`,
    data,
  );

  return response.data;
};

// 아이디 복원
export const postRecoveryId = async (props: any) => {
  const data = {
    encodeData: props.parseInfo.EncodeData,
    phnId: props.handleNumber,
  };

  const response = await axios.put(
    // `${process.env.REACT_APP_SERVER_URL}/signup/confirm?phnId=${props.phnId}&phnId=${props.usrNm}&usrEmail=${props.usrEmail}&smsRcvYn=${props.emailRcvYn}&usrPass=${props.usrPass}&encodeData=${props.encodeData}`,
    `${process.env.REACT_APP_SERVER_URL}/sleep/restore`,
    data,
  );

  return response;
};

// 계정 삭제
export const postDeleteId = async (props: any) => {
  const data = {
    encodeData: props.parseInfo.EncodeData,
    phnId: props.handleNumber,
  };

  const response = await axios.put(
    // `${process.env.REACT_APP_SERVER_URL}/signup/confirm?phnId=${props.phnId}&phnId=${props.usrNm}&usrEmail=${props.usrEmail}&smsRcvYn=${props.emailRcvYn}&usrPass=${props.usrPass}&encodeData=${props.encodeData}`,
    `${process.env.REACT_APP_SERVER_URL}/sleep/leave`,
    data,
  );

  return response;
};

// const findUserByDigit = (digit) => {
//     digit = encodeURIComponent(digit);
//     return axios({
//         headers: cloud.headers(),
//         url : `${root}/nice/user?digit=${digit}`,
//         method : 'GET'
//     });
// }
