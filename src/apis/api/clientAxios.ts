import axios from 'axios';
import { useModal } from '../../components/hooks/customs/useModal';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const SSE_SERVER_URL = process.env.REACT_APP_SSE_URL;


export const instanceSSE = axios.create({
  baseURL: `${SSE_SERVER_URL}`,
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
});

export const instance = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authorizationToken')}`,
  },
});

export const client = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instanceFile = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('authorizationToken')}`,
  },
});

// refresh token api
export async function postRefreshToken() {
  try {
    const data = {
      refreshToken: localStorage.getItem('refreshToken'),
    };
    const response = await instance.post('signin/refresh', data);
    return response;
  } catch (error) {
    return error;
  }
}

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const token = localStorage.getItem('authorizationToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    // const { warningModal } = useModal();
    if (status === 401) {
      // if (error?.response?.data === 'Invalid Token') {
      const originRequest = config;

      try {
        const tokenResponse: any = await postRefreshToken();
        if (tokenResponse.status === 200) {
          const newAccessToken = tokenResponse.data.token;
          localStorage.setItem('authorizationToken', tokenResponse.data.token);
          localStorage.setItem('refreshToken', tokenResponse.data.refreshToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        }
        window.location.replace('/signin');
        // return warningModal('실패', '로그인이 필요한 서비스입니다.', true);
      } catch (errors) {
        window.location.replace('/signin');
      }
      // 토큰이 만료되었다는 오류 응답을 받으면, refreshToken을 사용하여 새 토큰을 발급받는다
    }
    return Promise.reject(error);
  },
);

instanceFile.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const token = localStorage.getItem('authorizationToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);
instanceFile.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    // const { warningModal } = useModal();
    if (status === 401) {
      // if (error?.response?.data === 'Invalid Token') {
      const originRequest = config;

      try {
        const tokenResponse: any = await postRefreshToken();
        if (tokenResponse.status === 200) {
          const newAccessToken = tokenResponse.data.token;
          localStorage.setItem('authorizationToken', tokenResponse.data.token);
          localStorage.setItem('refreshToken', tokenResponse.data.refreshToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        }
        window.location.replace('/signin');
        // return warningModal('실패', '로그인이 필요한 서비스입니다.', true);
      } catch (errors) {
        window.location.replace('/signin');
      }
      // 토큰이 만료되었다는 오류 응답을 받으면, refreshToken을 사용하여 새 토큰을 발급받는다
    }
    return Promise.reject(error);
  },
);

