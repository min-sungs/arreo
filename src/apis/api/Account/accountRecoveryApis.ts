import { client } from '../clientAxios';

export const accountRecovery = async (data: string[]) => {
  try {
    const response = await client.post('contacts/deleteBuddy', {
      data: {
        buddySeqNo: JSON.stringify(data),
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

// 복원 인증문자 검증
export const postCertifyMessage = async (props: any) => {
  const response = await client.post('/sleep/restore/check-message', props);
  return response.data;
};

// 휴면아이디 복원 (나이스 인증 사용 번호와 다른 경우)
export const postCertifyNum = async ({ props }: any) => {
  const response = await client.post('/sleep/restore/send-message', props);
  return response.data;
};

// 비밀번호 재설정
export const postResetPassword = async (props: any) => {
  const response = await client.post('/users/password', props);
  return response.data;
};
