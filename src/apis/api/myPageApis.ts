import { pwDataProps } from '../../components/Organism/MyPage/types/MyPage.types';
import { instance } from './clientAxios';

// 회원정보 get
export const getProfileInfo = async () => {
  const response = await instance.get('profile/info');
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

// 회원탈퇴페이지 정보 get
export const getUseLeaveInfo = async () => {
  const response = await instance.get('profile/leave');
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

// 회원탈퇴페이지 탈퇴 요청 post
export const postUserPw = async (userPw: string) => {
  const response = await instance.post('/profile/leave', { inputPass: userPw });
  return response.data;
};

// 회원 정보 수정
export const postModifyInfo = async (porps: any) => {
  const data = JSON.parse(porps);
  const response: any = await instance.post('/profile/info', data);
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

// 비밀번호 변경
export const postChangePw = async (props: pwDataProps) => {
  const response: any = await instance.post('/profile/password', props);
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

export const getMyPageChangePhone = async () => {
  const response: any = await instance.post('/profile/phone');
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};
