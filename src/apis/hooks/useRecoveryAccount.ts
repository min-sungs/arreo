import { useNavigate } from 'react-router-dom';
import { useNoTokenPost } from './usePost';

export default function useRecoveryAccount() {
  const navigate = useNavigate();

  const { mutate } = useNoTokenPost('/sleep/restore/send-message');

  const handleIdRecovery = (props: any, key: string, info: string, number: string, dealGb: string) => {
    const numberData = props.target.value.replace(/[a-zA-Z]+$/, '');
    const certifyData = {
      encodeData: info,
      phnId: props.target.value,
      rsrvdId: key,
      dealGb,
    };
    if (props.target.name === 'findPw') {
      if (numberData === number) {
        navigate('/SignUpRecovery', {
          state: { certifyData, type: 'Find', sameNumber: true, cert: true },
        });
      } else {
        navigate('/SignUpRecovery', {
          state: { certifyData, type: 'Find', sameNumber: false, cert: false },
        });
      }
    }
    if (props.target.name === 'RecoveryId') {
      if (numberData === number) {
        navigate('/SignUpRecovery', {
          state: { certifyData, type: 'Recovery', sameNumber: true, cert: true },
        });
      } else {
        navigate('/SignUpRecovery', {
          state: { certifyData, type: 'Recovery', sameNumber: false, cert: false },
        });
      }
    }
  };

  return { handleIdRecovery };
}
