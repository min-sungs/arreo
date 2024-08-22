import { instance } from '../../../apis/api/clientAxios';

interface IUseMutationSaveOnlienCharge {
  accountNm: string; // 충전금액
  receiptAmount: number; // 입금자명
  enableAlarm: boolean; // 알림수신 설정
  alarmPhnId: string; // 알림받을 폰 번호
}

export const useMutationSaveOnlienCharge = async ({
  accountNm,
  alarmPhnId,
  enableAlarm,
  receiptAmount,
}: IUseMutationSaveOnlienCharge) => {
  const data = {
    accountNm,
    alarmPhnId,
    enableAlarm,
    receiptAmount,
  }
  const response = await instance.post(
    // `/saveOnlineCharge?accountNm=${accountNm}&alarmPhnId=${alarmPhnId}&enableAlarm=${enableAlarm}&receiptAmount=${receiptAmount}`,
    `/saveOnlineCharge?accountNm`,data
  );
  return response.data;
};
