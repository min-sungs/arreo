import * as yup from 'yup'

export const tableAddSchema = yup.object().shape({
  buddyNm: yup.string().required(),
  keyCommNo: yup.string().matches(/^[0-9]+$/).required(),
  emailId: yup.string().test((value) => {
    if(value === null || value === "") return true;
    const trimmedValue = value?.trim() || '';
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedValue);
  }),
  etcInfo: yup.string()
})