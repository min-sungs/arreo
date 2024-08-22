import { useRecoilState } from 'recoil';
import {callbackNumberState, selectNumberState} from '../../../../recoil/atoms/addressList';
import { useNavigate } from 'react-router-dom';

export const useMessageSender = () => {
  // 발신번호 배열
  const [callbackNumbers, setCallbackNumbers] = useRecoilState<any[] | undefined>(callbackNumberState);
  // 선택한 발신번호 상태
  // const [selectNumber, setSelectNumber] = useState<any>(callbackNumbers?.[0]);
  const [selectNumber, setSelectNumber] = useRecoilState(selectNumberState);

  const navigate = useNavigate();

  // 발신인 선택 이벤트
  const callbackNumHandle = (number: any) => {
    setSelectNumber(number);
  };

  // 번호등록 버튼 이벤트
  const addCallbackNumHandle = () => {
    navigate('/callingnumber');
  };

  return { callbackNumbers, selectNumber, callbackNumHandle, addCallbackNumHandle };
};
