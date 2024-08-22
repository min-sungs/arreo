import * as yup from 'yup';

const useTaxValidation = () => {
  const schema = yup.object().shape({
    // 사업자등록번호(주민번호)
    corpNum: yup
      .string()
      .required('반드시 입력해주세요.')
      .test('is-valid-length', '사업자등록번호(주민번호)를 확인해주세요.', (value) => {
        // 10자리 또는 13자리인 경우 유효
        return value.length === 10 || value.length === 13;
      }),
    // 범인명
    corpName: yup.string().required('반드시 입력해주세요'),
    // 대표명
    corpCeo: yup.string().required('반드시 입력해주세요').min(2, '2글자 이상 입력해주세요.'),
    // 사업장주소
    postCode: yup.string().required('반드시 입력해주세요'),
    address: yup.string().required('반드시 입력해주세요'),
    // 업태
    corpType: yup.string().required('반드시 입력해주세요'),
    // 업종
    corpClass: yup.string().required('반드시 입력해주세요'),
    // 사업자등록증 첨부
    //   corpFile: yup
    // .mixed()
    // .test('required', '반드시 등록해주세요.', (value) => {
    //   return value && value.length > 0; // 파일이 존재하고 비어있지 않은지 확인
    // })
    // .required('반드시 입력해주세요'),
    // 부서
    managerDept: yup.string().required('반드시 입력해주세요'),
    // 담당자
    managerName: yup.string().required('반드시 입력해주세요'),
    // 연락처
    managerPhone: yup
      .string()
      .required('반드시 입력해주세요')
      .test('is-valid-length', '연락처를 확인해주세요.', (value) => {
        if (value && !/^\d+$/.test(value)) {
          // 숫자가 아닌 경우 에러 메시지 반환
          return new yup.ValidationError('숫자만 입력해주세요', null, 'managerPhone');
        }

        return value.length === 11;
      }),
    // 이메일
    managerEmail: yup.string().required('반드시 입력해주세요').email('이메일을 확인해주세요.'),
  });

  return { schema };
};

export default useTaxValidation;
