import { useEffect, useState } from 'react';
import { useNiceCertification } from '../../../../apis/hooks/useNiceCertification';
import { usePost } from '../../../../apis/hooks/usePost';
import { useModal } from '../useModal';

export const usePhoneNumberChange = () => {
  const [popupData, setPopupData] = useState(null);
  const { mutate } = usePost('/profile/phone');
  const { niceCertification } = useNiceCertification();
  const { warningModal } = useModal();

  const popupFunc = async () => {
    await niceCertification();
  };

  const translateNumber = async () => {
    try {
      if (popupData !== null) {
        const encData = {
          encodeData: popupData,
        };
        mutate(encData, {
          onSuccess: (response) => {
            if (response.data === 201) {
              warningModal('경고', '현재계정의 명의와 일치하지않습니다.', true);
            } else if (response.data === 202) {
              warningModal('경고', '현재번호와 동일합니다.', true);
            }
          },
          onError: (res) => {
            console.error('번호변경 실패', res);
          },
        });

        // clearInterval(localData);
        return null;
      }
    } catch (error) {
      return error;
    }
    return null;
  };

  // 팝업에서 보내온 메시지를 받는 이벤트 리스너
  const messageListener = (event: any) => {
    if (event.data.sEncodeData) {
      setPopupData(event.data.sEncodeData);
    }
  };

  useEffect(() => {
    // message 이벤트 리스너를 등록
    window.addEventListener('message', messageListener);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('message', messageListener);
    };
  }, []);

  useEffect(() => {
    if (popupData) {
      translateNumber();
    }
  }, [popupData]);

  return { popupFunc };
};
