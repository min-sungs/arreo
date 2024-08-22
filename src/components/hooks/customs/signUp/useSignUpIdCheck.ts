import { useLocation, useNavigate } from 'react-router-dom';
import useRecoveryAccount from '../../../../apis/hooks/useRecoveryAccount';
import { useModal } from '../useModal';
import { useDeleteAccount } from '../../../../apis/hooks/useDeleteAccount';
import { useFetch } from '../../../../apis/utils/reactQuery';

export const useSignUpIdCheck = () => {
  const location = useLocation();
  const signUpInfo = location.state;

  const { confirmModal } = useModal();
  const { handleAccountDelete, deleteLoading } = useDeleteAccount();
  const { handleIdRecovery } = useRecoveryAccount();

  const { data: fetchData, isLoading: dataListLoading } = useFetch<any>(`/users/id`, {
    encodeData: signUpInfo.data.encodeData,
  });

  const navigate = useNavigate();

  const keepSignUp = () => {
    confirmModal(
      () =>
        navigate('/signUpForm', {
          state: { data: fetchData.encodeData, data2: 'A' },
        }),
      '회원가입',
      `이미 사용중인 계정이 존재합니다. </br>
       계속 가입하실 경우 기존 계정은 휴면처리되고 진행합니다.`,
      true,
    );
  };

  return { handleIdRecovery, handleAccountDelete, keepSignUp, signUpInfo, fetchData, dataListLoading, deleteLoading };
};
