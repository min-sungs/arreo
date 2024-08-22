import * as yup from 'yup';

export interface IChargeOnlienYupSchema {
  name: string;
  phoneNumber: string;
}

export const chargeOnlienYupSchema = yup.object({
  name: yup.string().required('입금자명을 입력해주세요.').min(2, '').max(7, ''),
  phoneNumber: yup.string().test((value) => {
    if (value?.length) {
      if (value.length === 11) {
        return true;
      }
      return false;
    }
    return true;
  }),
});
