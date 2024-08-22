import React, { useEffect, useState } from 'react';

import ATitle from '../../Atom/ATitle';
import * as S from './style/TaxInvoiceAuto.styles';
import BaseGuide from '../../Atom/BaseGuide';

import TaxInvoiceTop from '../../Molecules/Charge/TaxInvoiceAuto/TaxInvoiceTop';
import MbrCorpInsert from '../../Molecules/Charge/TaxInvoiceAuto/MbrCorpInsert';
import PublishTaxBill from '../../Molecules/Charge/TaxInvoiceAuto/PublishTaxBill';
import BaseButton from '../../Atom/BaseButton';
import { getMbrCorpList } from '../../../apis/api/pointApi';
import { useQuery } from '@tanstack/react-query';
import { usePublishTaxBill } from "../../hooks/customs/charge/TaxInvoiceAuto/usePublishTaxBill";
import TaxInvoiceBottom from '../../Molecules/Charge/TaxInvoiceAuto/TaxInvoiceBottom';


const TaxInvoiceAuto = () => {

  const [isInsertVisible, setIsInsertVisible] = useState(false);

  const {
    MbrCorpData,
    handleInsertButtonClick,
  } = usePublishTaxBill(isInsertVisible, setIsInsertVisible);


  // useEffect(() => {
  //   getMbrCorpList();
  // })
  return (
    <>
      <ATitle type="main" text="세금계산서 자동 발행" color="#0D42E5" />
      <TaxInvoiceTop />

      {isInsertVisible &&
        <MbrCorpInsert
          isInsertVisible={isInsertVisible}
          setIsInsertVisible={setIsInsertVisible}
        />} {/* isInsertVisible이 true이면 MbrCorpInsert 표시합니다. */}


      {/* 사업자 등록 */}
      {/* {MbrCorpData?.msgId === null && isInsertVisible === false ? ( */}
      {MbrCorpData === undefined && isInsertVisible === false ? (
        <S.TextAreaContainer>
          <S.TextArea>
            등록된 사업자 정보가 없습니다.<br />
            사업자 정보를 등록해주세요.
          </S.TextArea>
          <BaseButton
            type='button'
            color='#fff'
            backgroundColor='#0D42E5'
            width='140px'
            height='30px'
            fontSize='1.4rem'
            fontWeight='bold'
            onClick={handleInsertButtonClick} // 이 클릭 핸들러를 추가합니다.
          >사업자 정보 등록하기</BaseButton>
        </S.TextAreaContainer>
      ) : (
        // 사업자 , 결제 리스트
        // MbrCorpData?.msgId !== null &&  
        <PublishTaxBill
          isInsertVisible={isInsertVisible}
          setIsInsertVisible={setIsInsertVisible}
        />
      )}



      <TaxInvoiceBottom />
    </>
  );
};

export default TaxInvoiceAuto;
