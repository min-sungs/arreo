import { useEffect, useState } from 'react';
import { useNiceCertification } from '../../../../apis/hooks/useNiceCertification';
import { useNoTokenPost } from '../../../../apis/hooks/usePost';
import { useModal } from '../useModal';
import { useNavigate } from 'react-router';

export const useSignUp = () => {
  const [checkItems, setCheckItems] = useState(new Set());
  const checkSize = checkItems.size;
  const [isAble, setIsAble] = useState<boolean>(true);
  const { confirmModal, successModal, warningModal } = useModal();
  const navigate = useNavigate();
  const { niceCertification } = useNiceCertification();
  const [niceData, setNiceData] = useState(null);
  const { mutate, isLoading: signUpLoading } = useNoTokenPost('/signup/identity-verification');

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set);

    if (updatedSet.has(id)) {
      updatedSet.delete(id);
    } else {
      updatedSet.add(id);
    }

    return updatedSet;
  };

  const signUpData: any = [
    {
      id: 1,
      checkLabel: 'agree1',
      children: '아레오 이용약관',
      contents: '/mbr_usecnt_msg.html',
    },
    { id: 2, checkLabel: 'agree2', children: '개인정보 취급방침', contents: '/com_protect_m.html' },
    {
      id: 3,
      checkLabel: 'agree3',
      children: '개인정보 수집/이용 동의서',
      contents: '/com_protect_per.html',
    },
    {
      id: 4,
      checkLabel: 'agree4',
      children: '개인정보 제3자 제공 및 활용 동의서',
      contents: '/com_protect_info3rd.html',
    },
  ];

  const checkItemHandler = (id: number) => {
    setCheckItems((prevSet: any) => updateSet(prevSet, id));
  };

  const toggleAllCheckedById = ({ target: { checked } }: any) => {
    if (checked) {
      const allChecked = new Set(signUpData.map(({ id }: any) => id));
      setCheckItems(allChecked);
    } else {
      setCheckItems(new Set());
    }
  };

  useEffect(() => {
    if (checkItems.size === 4) {
      setIsAble(false);
    } else {
      setIsAble(true);
    }
  }, [checkItems, isAble]);

  // 나이스 본인인증
  const onClickCertify = async () => {
    await niceCertification();
  };

  const messageListener = (event: any) => {
    if (event.data.sEncodeData) {
      setNiceData(event.data.sEncodeData);
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

  const signUpClick = async () => {
    try {
      if (niceData !== null) {
        const encData = {
          encodeData: niceData,
        };
        mutate(encData, {
          onSuccess: (response) => {
            if (response.data.code === '200') {
              successModal('성공', '인증이 완료되었습니다.', true);
              navigate('/signUpForm', {
                state: { data: response.data },
              });
            } else if (response.data.code === '201') {
              confirmModal(
                () => {
                  navigate('/SignUpIdCheck', {
                    state: { data: response.data },
                  });
                },
                '성공',
                '이미 계정이 존재합니다. </br>계정 정보를 확인하시겠습니까?',
                true,
              );
            } else if (response.data.code === '202') {
              warningModal('회원가입 실패', '14세 미만의 회원은 가입하실 수 없습니다.', true);
            } else if (response.data.code === '203') {
              warningModal('회원가입 실패', '동일한 가입정보로 1일 1회 가입이 가능합니다.', true);
            } else if (response.data.code === '204') {
              warningModal('회원가입 실패', '동일한 주민등록번호로 4개까지 가입할 수 있습니다.', true);
              navigate('/SignUp');
            } else if (response.data.code === '205') {
              warningModal('회원가입 실패', '가입 후 한달안에 재가입이 불가능합니다.', true);
            } else if (response.data.code === '206') {
              warningModal('회원가입 실패', '탈퇴 후 한달안에 재가입이 불가능합니다.', true);
            }
            // if (response) {
            //   successModal('성공', '인증이 완료되었습니다.', true);
            //   navigate('/SignUpIdCheck', {
            //     state: { data: response.data },
            //   });
            // }
          },
          onError: () => {
            warningModal('실패', '고객센터에 문의바랍니다.', true);
          },
        });

        return null;
      }
    } catch (error) {
      return error;
    }
    return null;
  };

  useEffect(() => {
    if (niceData) {
      signUpClick();
    }
  }, [niceData]);

  return {
    onClickCertify,
    checkItemHandler,
    isAble,
    setCheckItems,
    toggleAllCheckedById,
    checkSize,
    checkItems,
    signUpData,
    signUpLoading,
  };
};
