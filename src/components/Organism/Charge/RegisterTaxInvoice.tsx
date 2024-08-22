import React, { useEffect, useRef, useState } from 'react';

import ATitle from '../../Atom/ATitle';
import * as S from './style/RegisterTaxInvoice.styles';
// import { useCashReceiptAsk } from '../../hooks/customs/charge/useCashReceiptAsk';
import { v4 as uuidv4 } from 'uuid';
import BaseInput from '../../Atom/BaseInput';
import BaseCheckBox from '../../Atom/BaseCheckBox';
import BaseGuide from '../../Atom/BaseGuide';
import BaseSelect from '../../Atom/BaseSelect';
import axios from 'axios';
import { instance } from '../../../apis/api/clientAxios';
import { useModal } from '../../hooks/customs/useModal';

const CashReceiptAsk = () => {
  const checkRef = useRef<HTMLInputElement | null>(null);
  const [isOn, setIsOn] = useState(0);

  const [flag, setFlag] = useState('off');

  const { confirmModal, successModal, warningModal } = useModal();

  const flagClick = () => {
    if (flag === 'off') {
      setFlag('on');
    } else {
      setFlag('off');
    }
  };

  const thead = ['신청구분', '이름', '연락처', '충전 금액'];

  const [inputValue, setInputValue] = useState({
    name: '',
    number: '',
    secondPhoneNum: '',
    thirdPhoneNum: '',
    taxNumber: '',
    secondTaxNum: '',
    thirdTaxNum: '',
    payAmt: '',
    actGb: 'P',
  });

  // 이름 2글자 이상
  const [showWarningName, setShowWarningName] = useState(false);
  const [showWarningNumber, setShowWarningNumber] = useState(false);
  const [showWarningTaxNumber, setShowWarningTaxNumber] = useState(false);
  const [showWarningPayAmt, setShowWarningPayAmt] = useState(false);

  // 숫자를 3자리마다 쉼표를 추가한 문자열로 변환하는 함수
  const numberWithCommas = (x: any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const NamehandleChange = (e: any) => {
    const { value, name } = e.target;

    // 이름 2글자 이상
    if (name === 'name') {
      setInputValue((prev) => ({ ...prev, [name]: value }));
      if (value.length >= 2) {
        setShowWarningName(false);
      }
    }
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;

    // 이름 2글자 이상
    // if (name === 'name' && value.length >= 2) {
    //   setInputValue(prev => ({ ...prev, [name]: value }));
    //   setShowWarningName(false);
    // } else {
    //   setInputValue(prev => ({ ...prev, [name]: value }));
    //   setShowWarningName(true);
    // }

    // payAmt 필드에 대한 처리
    if (name === 'payAmt') {
      // 숫자만 입력 가능
      const numericValue = value.replace(/\D/g, '');
      // 숫자만 남긴 후 3자리마다 쉼표 추가
      const formattedValue = numberWithCommas(numericValue);
      // 상태 업데이트
      setInputValue((prev) => ({ ...prev, [name]: formattedValue }));
      if (value.length > 0) {
        setShowWarningPayAmt(false);
      }
    }
  };

  const handleChangeNumber = (e: any) => {
    const { value, name } = e.target;

    if (name === 'number' || name === 'secondPhoneNum' || name === 'thirdPhoneNum') {
      // 숫자만 입력 가능하도록 정규 표현식 사용
      const numericValue = value.replace(/\D/g, '');
      // 최대 3자리까지 입력 허용
      if (name === 'number') {
        const truncatedValue = numericValue.slice(0, 3);
        setInputValue((prev) => ({ ...prev, [name]: truncatedValue }));
        // if (value.length >= 3) {
        //   setShowWarningNumber(false)
        // }
      } else {
        // 최대 4자리까지 입력 허용
        const truncatedValue = numericValue.slice(0, 4);
        setInputValue((prev) => ({ ...prev, [name]: truncatedValue }));
        // if (value.length >= 4) {
        //   setShowWarningNumber(false);
        // }
      }
    }

    if (inputValue.number.length >= 2 && inputValue.secondPhoneNum.length >= 3 && inputValue.thirdPhoneNum.length >= 3) {
      setShowWarningNumber(false);
    }
  };

  const handleChangeTaxNumber = (e: any) => {
    const { value, name } = e.target;

    if (name === 'taxNumber' || name === 'secondTaxNum' || name === 'thirdTaxNum') {
      // 숫자만 입력 가능하도록 정규 표현식 사용
      const numericValue = value.replace(/\D/g, '');
      // 최대 3자리까지 입력 허용
      if (name === 'taxNumber') {
        const truncatedValue = numericValue.slice(0, 3);
        setInputValue((prev) => ({ ...prev, [name]: truncatedValue }));
        // if (value.length >= 3) {
        //   setShowWarningTaxNumber(false);
        // }
      }
      if (name === 'secondTaxNum') {
        // 최대 2자리까지 입력 허용
        const truncatedValue = numericValue.slice(0, 2);
        setInputValue((prev) => ({ ...prev, [name]: truncatedValue }));
        // if (value.length >= 2) {
        //   setShowWarningTaxNumber(false);
        // }
      } else if (name === 'thirdTaxNum') {
        // 최대 5자리까지 입력 허용
        const truncatedValue = numericValue.slice(0, 5);
        setInputValue((prev) => ({ ...prev, [name]: truncatedValue }));
        // if (value.length >= 5) {
        //   setShowWarningTaxNumber(false);
        // }
      }
    }

    if (inputValue.thirdTaxNum.length >= 4 && inputValue.taxNumber.length >= 2 && inputValue.secondTaxNum.length >= 1) {
      setShowWarningTaxNumber(false);
    }
  };

  const [typeChange, setTypeChange] = useState('submit');

  const handleSubmit = async (event: React.FormEvent) => {
    console.log(isOn)
    event.preventDefault();
    if (isOn === 0) {
      inputValue.actGb = 'P'
    } else {
      inputValue.actGb = 'C'
    }

    console.log(inputValue)
    // 경고 메시지 표시
    if (inputValue.actGb !== '') {
      if (inputValue.name.length <= 1) {
        // setTypeChange('button')
        setShowWarningName(true);
        return
      }
      if (inputValue.payAmt.length === 0) {
        // setTypeChange('button')
        setShowWarningPayAmt(true);
        return
      }
      if (inputValue.actGb === 'P') {
        if (inputValue.number.length !== 3 || inputValue.secondPhoneNum.length !== 4 || inputValue.thirdPhoneNum.length !== 4) {
          // setTypeChange('button')
          setShowWarningNumber(true);
          return
        }
      }
      if (inputValue.actGb === 'C') {
        if (inputValue.taxNumber.length !== 3 || inputValue.secondTaxNum.length !== 2 || inputValue.thirdTaxNum.length !== 5) {
          // setTypeChange('button')
          setShowWarningTaxNumber(true);
          return
        }
      }
    }
    if (checkRef.current?.value !== 'on') {
      // setTypeChange('button')
      warningModal('현금영수증 발행신청', '개인정보 수집 및 이용에 대한 동의가 필요한 서비스 입니다.', true);
      return
    }


    confirmModal(
      async () => {
        try {
          // Axios를 사용하여 서버에 POST 요청을 보냅니다.
          if (inputValue.actGb === 'P') {
            inputValue.number += `-${inputValue.secondPhoneNum}-${inputValue.thirdPhoneNum}`;
          } else {
            inputValue.taxNumber += `-${inputValue.secondTaxNum}-${inputValue.thirdTaxNum}`;
          }

          await instance.post('/registerTaxInvoice', inputValue);
          successModal('현금연수증 발행신청', '현금영수증 발행신청이 완료되었습니다.', true);

          // 서버 응답을 처리하거나 다른 작업을 수행합니다.
          console.log('서버 응답:', inputValue);
          // alert('성공');
        } catch (error) {
          // alert('실패');
          warningModal('현금연수증 발행신청', '현금영수증 발행신청이 실패했습니다.', true);
        }
      },
      '현금영수증 발행신청',
      '현금영수증 발행을 하시겠습니까?',
      true,
    );
    // }

    //   try {

    //     // Axios를 사용하여 서버에 POST 요청을 보냅니다.
    //     inputValue.number += inputValue.secondPhoneNum + inputValue.thirdPhoneNum;
    //     const response = await instance.post('/registerTaxInvoice', inputValue);

    //     // 서버 응답을 처리하거나 다른 작업을 수행합니다.
    //     console.log('서버 응답:', response.data, inputValue, response);
    //     alert('성공');
    //     return response.data;
    //   } catch (error) {
    //     alert('실패');
    //     return error
    //   }

    // setTypeChange('submit')
  };

  return (
    <div>
      <ATitle type="sub" text="현금영수증 발행신청" color="#0D42E5" />
      <S.FormContainer>
        <S.CashReceiptForm onSubmit={handleSubmit}>
          <S.CRTable>
            <S.CRThead>
              <tr>
                {thead.map((el) => (
                  <th key={uuidv4()}>
                    {isOn === 1 && el === '연락처' ? (
                      // 특정 작업을 수행하거나 특정 내용을 표시하려면 여기에 작성
                      <span>사업자 등록번호</span>
                    ) : (
                      // 다른 경우에 대한 작업을 수행하거나 내용을 표시하려면 여기에 작성
                      <span>{el}</span>
                    )}
                  </th>
                ))}
              </tr>
            </S.CRThead>
            <S.CRTbody>
              <tr>
                <td>
                  <S.CheckBox
                    type="radio"
                    name="actGb"
                    value="P"
                    id="checkBoxP"
                    onClick={() => {
                      setIsOn(0);
                      setShowWarningTaxNumber(false);
                    }}
                    // onChange={handleChange}
                    defaultChecked
                    required
                  />
                  <S.CheckBoxLabel htmlFor="checkBoxP">소비자 소득공제용</S.CheckBoxLabel>
                  <S.CheckBox
                    type="radio"
                    name="actGb"
                    value="C"
                    id="checkBoxC"
                    onClick={() => {
                      setIsOn(1);
                      setShowWarningNumber(false);
                    }}
                    // onChange={handleChange}
                    required
                  />
                  <S.CheckBoxLabel htmlFor="checkBoxC">사업자 지출 증빙용</S.CheckBoxLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <BaseInput
                    name="name"
                    type="text"
                    value={inputValue.name}
                    width="160px"
                    height="22px"
                    placeholder="2글자 이상 입력하세요"
                    onChange={NamehandleChange}
                  />
                  {showWarningName && <p style={{ color: 'red', marginLeft: '10px' }}>이름을 정확히 입력해 주세요.</p>}
                </td>
              </tr>
              <tr>
                {isOn === 0 ? (
                  <td>
                    <BaseInput
                      name="number"
                      type="text"
                      value={inputValue.number}
                      width="69px"
                      height="22px"
                      onChange={handleChangeNumber}
                    />
                    <span>-</span>
                    <BaseInput
                      name="secondPhoneNum"
                      type="text"
                      value={inputValue.secondPhoneNum}
                      width="69px"
                      height="22px"
                      onChange={handleChangeNumber}
                    />
                    <span>-</span>
                    <BaseInput
                      name="thirdPhoneNum"
                      type="text"
                      value={inputValue.thirdPhoneNum}
                      width="69px"
                      height="22px"
                      onChange={handleChangeNumber}
                    />
                    {showWarningNumber && (
                      <p style={{ color: 'red', marginLeft: '10px' }}>연락처를 정확히 입력해 주세요.</p>
                    )}
                  </td>
                ) : (
                  <td>
                    <BaseInput
                      name="taxNumber"
                      type="text"
                      value={inputValue.taxNumber}
                      width="100px"
                      height="22px"
                      onChange={handleChangeTaxNumber}
                    />
                    <span>-</span>
                    <BaseInput
                      name="secondTaxNum"
                      type="text"
                      value={inputValue.secondTaxNum}
                      width="100px"
                      height="22px"
                      onChange={handleChangeTaxNumber}
                    />
                    <span>-</span>
                    <BaseInput
                      name="thirdTaxNum"
                      type="text"
                      value={inputValue.thirdTaxNum}
                      width="100px"
                      height="22px"
                      onChange={handleChangeTaxNumber}
                    />
                    {showWarningTaxNumber && (
                      <p style={{ color: 'red', marginLeft: '10px' }}>사업자 등록번호를 정확히 입력해 주세요.</p>
                    )}
                  </td>
                )}
              </tr>
              <tr>
                <td>
                  <BaseInput
                    name="payAmt"
                    type="text"
                    width="120px"
                    height="22px"
                    onChange={handleChange}
                    value={inputValue.payAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  />
                  {showWarningPayAmt && (
                    <p style={{ color: 'red', marginLeft: '10px' }}>충전 금액을 정확히 입력해 주세요.</p>
                  )}
                </td>
              </tr>
            </S.CRTbody>
          </S.CRTable>

          <ATitle type="sub" text="개인정보 수집 및 이용에 대한 안내" color="#000" />

          <S.TextP>
            수집하는 개인정보 항목당사는 현금영수증 발행요청을 위해 아래와 같은 개인정보를 수집하고 있습니다.
            <br />
            - 수집항목 : 사업자등록번호, 휴대폰번호, 성명
            <br />
            - 개인정보 수집방법 : 홈페이지(현금영수증 요청)
            <br />
            개인정보의 수집 및 이용목적당사는 수집한 개인정보를 다음 목적을 위해 활용합니다.
            <br />
            - 현금영수증 발행
            <br />
            개인정보의 보유 및 이용기간
            <br />
            - 당사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 파기합니다.
            <br />
            *그 밖의 사항은 개인정보취급방침을 준수합니다.
          </S.TextP>

          <S.CheckBoxCover>
            <S.CheckBox type="checkBox" id="check" ref={checkRef} value={flag} onChange={flagClick} />
            <S.CheckBoxLabel htmlFor="check" style={{ lineHeight: '21px' }}>
              <span>[필수]</span>위의 내용을 숙지하였으며, 5가지 항목에 대해 모두 동의합니다.
            </S.CheckBoxLabel>
          </S.CheckBoxCover>

          <S.SubmitInput type='submit' value="신청하기" />
        </S.CashReceiptForm>

        <S.BottomP>
          <BaseGuide text="현금영수증은 당일만 발행 가능합니다. (이전 날짜에 대한 충전금액 발행 불가)" />
          <p style={{ color: '#0D42E5' }}>
            신용카드 결제는 세금계산서 발행이 불가능하며 영수증은 충전소 &gt; 결제내역에서 출력하거나 카드사 홈페이지를
            방문하여 주시기 바랍니다.
          </p>
        </S.BottomP>
      </S.FormContainer>
    </div>
  );
};

export default CashReceiptAsk;
