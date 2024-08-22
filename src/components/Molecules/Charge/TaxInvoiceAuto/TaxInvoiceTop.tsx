import React from 'react';
import * as S from './style/TaxInvoiceTop.styles';
import BaseGuide from '../../../Atom/BaseGuide';


const TaxInvoiceAuto = () => {

  return (

    <S.TopTextContainer>
      <BaseGuide text='
          - 자동 발행 기능이 들어간 새로운 세금계산서 신청 페이지 입니다.<br/>
          - 첫 신청시에만 회사 정보를 기입 해주시면 됩니다.<br/>
          - 세금계산서는 다음달 10일까지 발행됩니다.<br/>
            (ex. 2011년 1월 2일 결제 후 세금계산서 발행 시, 다음 달 2월 10일자로 발행됩니다.)<br/>
          - 신규발행회원은 반드시 사업자등록증을 첨부파일에 등록 부탁 드립니다.<br/>
        '/>
      <S.TextBlue>
        - 신용카드 결제는 세금계산서 발행이 불가능하며 영수증은 충전소 &gt; 결제내역에서 출력하거나 카드사 홈페이지를 방문하여 주시기 바랍니다.<br />
        - 회사 정보는 사업자등록증에 있는 내용과 동일하게 작성 해주셔야 세금계산서가 정상적으로 자동 발행이 됩니다.<br />
        - 첫 요청 시 관리자 승인 후 자동 발행이 됩니다. 그 후 값이 변경될 때마다 관리자 승인을 받아야 합니다.<br />
        <span>- 아레오 현금영수증 발행 후 세금계산서 신청시 중복 발행 되실 수 있습니다.</span>
      </S.TextBlue>
    </S.TopTextContainer>

  );
};

export default TaxInvoiceAuto;
