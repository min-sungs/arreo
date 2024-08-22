import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { instance, instanceFile } from '../../../../../apis/api/clientAxios';
import { useQueryClient } from '@tanstack/react-query';
import useTaxValidation from '../useTaxValidation';
import { useModal } from '../../useModal';

interface FormData {
  corpName: string;
  corpNum: string;
  corpFile: any;
  confirmState: string;
  corpCeo: string;
  corpType: string;
  corpClass: string;
  postCode: string;
  address: string;
  address2: string;
  managerDept: string;
  managerName: string;
  managerPhone: string;
  managerEmail: string;
}

const useMbrCorpInsert = (
  isInsertVisible: boolean,
  setIsInsertVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [modalState, setModalState] = useState(false);
  const { confirmModal, warningModal, successModal } = useModal();

  const queryClient = useQueryClient();

  // 주소창
  const postCodeStyle: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  const { schema } = useTaxValidation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
    mode: 'onSubmit',
    shouldFocusError: false, // 옵션 추가
    defaultValues: {
      corpName: ``,
      corpNum: ``,
      confirmState: 'R',
      corpCeo: ``,
      // corpFile: undefined,
      postCode: ``,
      address: ``,
      address2: ``,
      corpType: ``,
      corpClass: ``,
      managerDept: ``,
      managerName: ``,
      managerPhone: ``,
      managerEmail: ``,
      // email2: `${selectEmail2}`,
    },
  });

  const closeOverlay = () => {
    setModalState(false);
  };

  const addressValidation = async (value: string) => {
    try {
      await schema.validate({ postCode: value });
      return true; // 유효성 검사 통과
    } catch (error) {
      return false; // 유효성 검사 실패
    }
  };
  useEffect(() => {
    register('postCode', { validate: addressValidation });
  }, [register, addressValidation]);

  const onCompletePost = (data: any) => {
    setModalState(false);

    setValue('address', data.address);
    setValue('address2', data.buildingName);
    setValue('postCode', data.zonecode);

    // 특정 필드에 대한 유효성 검사 다시 트리거
    clearErrors('postCode');
  };

  const onSubmit = async (data: FormData) => {
    if (data.corpFile.length === 0) {
      warningModal('사업자 등록', '파일을 첨부 해 주세요.', true);
      return;
    }

    confirmModal(
      async () => {
        try {
          // 주소 관련 필드를 합쳐서 corpAddress로 설정
          const corpInfoData: any = {
            corpId: 1,
            corpName: data.corpName,
            corpNum: data.corpNum,
            confirmState: data.confirmState,
            // corpFile: data.corpFile[0],
            corpCeo: data.corpCeo,
            corpType: data.corpType,
            corpClass: data.corpClass,
            corpAddress: `(${data.postCode}) ${data.address} ${data.address2}`,
            managerDept: data.managerDept,
            managerName: data.managerName,
            managerPhone: data.managerPhone,
            managerEmail: data.managerEmail,
          };

          // 폼 데이터 생성
          const formData = new FormData();
          // formData.append('corpInfoDTO', JSON.stringify(corpInfoData));
          // formData.append('corpInfoDTO', corpInfoData);
          const json = JSON.stringify(corpInfoData);
          const blob = new Blob([json], { type: 'application/json' });
          formData.append('corpInfoDTO', blob);
          formData.append('file', data.corpFile[0]); // 파일은 배열로 전송됩니다.

          // Axios를 사용하여 서버로 데이터 전송
          await instanceFile.post(`/saveMbrCorpInfo`, formData);

          successModal('사업자 등록', '사업자 등록을 완료했습니다.', true);

          queryClient.invalidateQueries(['MbrCorpList']);
          setIsInsertVisible(false);
        } catch (error) {
          console.log(error);
          warningModal('사업자 등록', '사업자 등록에 실패했습니다.', true);
        }
      },
      '사업자 등록',
      '사업자를 등록 하시겠습니까?',
      true,
    );
  };

  const fileInputValue = document.getElementsByTagName('input');

  return {
    modalState,
    closeOverlay,
    postCodeStyle,
    onCompletePost,
    register,
    errors,
    setModalState,
    handleSubmit,
    onSubmit,
  };
};

export default useMbrCorpInsert;
