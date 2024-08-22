import { spawn } from 'child_process';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
`;
// 테이블 헤더
const BContentsHead = styled.tbody`
  width: 100%;
`;

// 테이블 행
const BContentsRow = styled.tr`
  width: 100%;
`;

// 테이블 헤더 셀
const BContentsHeadCell = styled.th`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100% - 0.5rem;
  padding: 1.2rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.4rem;
  font-weight: bold;
  border-right: 1px solid #a1a1a1;
`;
// 테이블 바디 셀
const BContentsBodyCell = styled.td`
  /* display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center; */
  width: 100% - 0.5rem;
  padding: 1.25rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;


const PhoneNumberInput = styled.input`
  width: 20%;
  padding: 0.5rem;
  border: none;
  background-color: #e9e9e9;
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
  ::placeholder {
    color: #a1a1a1;
  }
`;

const PhoneNumberTextarea = styled.textarea`
  width: 80%;
  padding: 0.5rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: start;
  font-size: 12px;
  color: #000000;
  font-weight: lighter;
  resize: none;
`;

const ValidationError = styled.span`
  font-size: 1rem;
  color: red;
  margin-left: 10px;
`;

const CallingNumberInput = ({ register, errors }: { register: any, errors: any }) => {
  return (
    // <Wrap>

    <BContentsHead>
      <BContentsRow>
        <BContentsHeadCell>등록할 발신번호</BContentsHeadCell>
        <BContentsBodyCell>
          <PhoneNumberInput
            id="postcallnumber"
            type="text"
            maxLength={11}
            onChange={() => { }}
            placeholder="숫자만 입력해주세요."
            {...register('callbackNo')}
          />
          <ValidationError>{errors.callbackNo?.message}</ValidationError>
        </BContentsBodyCell>
      </BContentsRow>

      <BContentsRow>
        <BContentsHeadCell>결과통지번호</BContentsHeadCell>
        <BContentsBodyCell>
          <PhoneNumberInput
            id="postalarmPhone"
            name="alarmPhone"
            type="text"
            maxLength={11}
            onChange={() => { }}
            placeholder="숫자만 입력해주세요."
            {...register('alarmPhone')}
          />
          <ValidationError>{errors.alarmPhone?.message}</ValidationError>
        </BContentsBodyCell>
      </BContentsRow>

      <BContentsRow>
        <BContentsHeadCell>등록할 서류</BContentsHeadCell>
        <BContentsBodyCell>
          <PhoneNumberInput
            style={{ width: '40%' }}
            id="postfile"
            type="file"
            onChange={() => { }}
            {...register('file')}
          />
          <span style={{ color: 'red' }}> 10MB이하 파일 첨부 가능</span>
        </BContentsBodyCell>
      </BContentsRow>

      <BContentsRow>
        <BContentsHeadCell style={{ verticalAlign: 'middle' }}>메모</BContentsHeadCell>
        <BContentsBodyCell>
          <PhoneNumberTextarea
            id="postremark"
            onChange={() => { }}
            {...register('remark')}
          // placeholder="숫자만 입력해주세요."
          />
        </BContentsBodyCell>
      </BContentsRow>
    </BContentsHead>
    // </Wrap>
  );
};

//   return (

//       {radioValue === 'PHONE' ? (
//         <BContentsBodyCell>
//           <PhoneNumberInput
//             id="postcallnumber"
//             name="postcallnumber"
//             type="text"
//             maxLength={11}
//             onChange={() => {}}
//             placeholder="숫자만 입력해주세요."
//           />
//         </BContentsBodyCell>
//       ) : (
//         <>
//           <BContentsBodyCell>
//             <PhoneNumberInput
//               id="postcallnumber"
//               name="postcallnumber"
//               type="text"
//               maxLength={11}
//               onChange={() => {}}
//               placeholder="숫자만 입력해주세요."
//             />
//           </BContentsBodyCell>
//           <BContentsBodyCell>
//             <PhoneNumberInput
//               id="postcallnumber"
//               name="postcallnumber"
//               type="text"
//               maxLength={11}
//               onChange={() => {}}
//               placeholder="숫자만 입력해주세요."
//             />
//           </BContentsBodyCell>
//           <BContentsBodyCell>
//             <PhoneNumberInput
//               id="postcallnumber"
//               name="postcallnumber"
//               type="text"
//               maxLength={11}
//               onChange={()=>{}}
//               placeholder="숫자만 입력해주세요."
//             />
//           </BContentsBodyCell>
//         </>
//         )
//       }
//         )
//       }
//       )

export default CallingNumberInput;
