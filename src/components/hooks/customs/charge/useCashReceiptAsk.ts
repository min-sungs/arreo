// import { useState } from 'react';
// import { registerTaxInvoice } from '../../../../apis/api/pointApi';
// import axios from 'axios';

// export const useCashReceiptAsk = () => {
//   const thead = ['신청구분', '이름', '연락처', '충전 금액'];

//   const tbody = [
//     { name1: 'actGb', id: 'actGb', label: '소비자 소득 공제용', value: 'P' },
//     { name1: 'actGb', label: '사업자 지출 증빙용', value: 'C' },
//     { name1: 'name', type: 'text', id: 'name', value: '' },
//     { name1: '연락처', type: 'text', id: 'number', value: '' },
//   ];

//   const [inputValue, setInputValue] = useState({
//     name: '',
//     number: '',
//     secondPhoneNum: '',
//     thirdPhoneNum: '',
//     payAmt: '',
//   });

//   const handleChange = (e: any) => {
//     const { value, name } = e.target;
//     setInputValue({ ...inputValue, [name]: value });
//     console.log(inputValue);
//   };

//   return {
//     thead,
//     tbody,
//     handleChange,
//     inputValue,
//     handleSubmit,
//   };
// };
