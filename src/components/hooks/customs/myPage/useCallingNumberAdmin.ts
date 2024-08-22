import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useModal } from '../useModal';
import { useFetch } from '../../../../apis/utils/reactQuery';
import useCallingValidation from './useCallingValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { instance, instanceFile } from '../../../../apis/api/clientAxios';

interface callingNumberListType {
  callback: string;
  phnId: string;
  regMethod: string;
  rsrvdId: string;
  usedDttm: string;
  verifiedYn: string;
  wrtDttm: string;
}

interface callingNumberType {
  callbackNo: string;
  alarmPhone: String;
  remark: String;
  callbackNumberCount: number;
  file: FileList;
}

export const useCallingNumberAdmin = () => {
  const [radioValue, setRadioValue] = useState('PHONE');
  const [selectOpen, setSelectOpen] = useState(false);
  const queryClient = useQueryClient();
  const { confirmModal, warningModal, successModal } = useModal();

  // 발신번호 리스트 불러오기
  const { data: callingNumberList } = useFetch<Array<callingNumberListType>>('/message/getCallbackList', undefined, {
    retry: false,
  });
  // 발신번호 승인중인 번호도 포함 리스트 불러오기
  const { data: allCallingNumberList, refetch: allCallingNumberListRefetch } = useFetch<any>(
    '/allCallbackList',
    undefined,
    {
      retry: false,
    },
  );
  console.log('allCallingNumberList', allCallingNumberList);

  const { schema } = useCallingValidation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<callingNumberType>({
    resolver: yupResolver(schema) as any,
    mode: 'onSubmit',
    defaultValues: {
      callbackNo: ``,
      alarmPhone: ``,
      remark: ``,
      callbackNumberCount: callingNumberList?.length,
    },
  });

  // 등록하기 버튼
  const handleCertifyClick = (data: callingNumberType) => {
    if (data.file.length === 0) {
      warningModal('발신번호 등록', '파일을 첨부 해 주세요.', true);
      return;
    }

    if (callingNumberList?.length === 10) {
      warningModal('발신번호 등록', '발신번호 등록은 최대 10개까지 가능합니다.', true);
      return;
    }

    confirmModal(
      async () => {
        try {
          // 주소 관련 필드를 합쳐서 corpAddress로 설정
          const callingNumberData: any = {
            callbackNo: data.callbackNo,
            alarmPhone: data.alarmPhone,
            remark: data.remark,
            callbackNumberCount: callingNumberList?.length,
          };

          // 폼 데이터 생성
          const formData = new FormData();
          const json = JSON.stringify(callingNumberData);
          const blob = new Blob([json], { type: 'application/json' });
          formData.append('requestDto', blob);
          formData.append('file', data.file[0]); // 파일은 배열로 전송됩니다.

          // Axios를 사용하여 서버로 데이터 전송
          await instanceFile.post('registerCallback', formData);
          successModal('발신번호 등록', '발신번호 등록을 완료했습니다.', true);
          queryClient.invalidateQueries(['/allCallbackList']);
        } catch (error) {
          console.log(error);
          warningModal('발신번호 등록', '발신번호 등록에 실패했습니다.', true);
        }
        allCallingNumberListRefetch();
      },
      '발신번호 등록',
      '발신번호 등록 하시겠습니까?',
      true,
    );
  };

  // 발신번호 삭제
  const handleDelete = async (e: any, callbackNo:string) => {
    console.log(callbackNo)
    e.preventDefault();
    confirmModal(
      async () => {
        try {
          await instance.post(`/deleteCallback?callbackNo=${callbackNo}`);
          successModal('발신번호 삭제', '선택한 발신번호가 삭제되었습니다.', true);
          queryClient.invalidateQueries(['/allCallbackList']);
        } catch (error) {
          console.log(error);
          warningModal('발신번호 삭제', '선택한 발신번호 삭제가 실패했습니다.', true);
        }
      },
      '발신번호 삭제',
      '선택한 발신번호를 삭제하시겠습니까?',
      true,
    );
  };

  const selectOpenHandle = () => {
    setSelectOpen((prev) => !prev);
  };

  return {
    callingNumberList,
    handleSubmit,
    handleDelete,
    register,
    errors,
    handleCertifyClick,
    selectOpenHandle,
    allCallingNumberList,
  };
};
