import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";
import {useModal} from "../../customs/useModal.tsx";
import {messageEstimateApi, messageSendApi} from "../../../../apis/api/excelMessenger/excelMessengerApis.ts";

interface IUseMutationMessageSend {
  setPopupToggle: Dispatch<SetStateAction<boolean>>
}

export const useMutationMessageEstimate = () => {

  const {mutate:estimateMutate,data:estimateData,} = useMutation((data:any)=> messageEstimateApi(data), {
    onSuccess: (res:any) => {
      // setPopupToggle(false);
      // successModal('전송 성공', '메세지 전송 성공', true);
    },
    // onError: (err:any) => {
    //   setPopupToggle(false);
    //   const msg = err.response.data[0];
    //   const rowKeyArr = err.response.data;
    //   console.log(rowKeyArr)
    //   // warningModal('전송 실패', err.message, true);
    //   warningModal('전송 실패', `메세지 전송에 실패했습니다. </br>${msg.rowKey}번째 줄 ${msg.errorMessage}</br>수정 후 다시 전송해주시기 바랍니다.`, true);
    // }
  });

  return {
    estimateMutate,
    estimateData
  }
}