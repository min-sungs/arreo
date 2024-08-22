import React from 'react';
import * as S from './style/TaxInvoiceBottom.styles';
import BaseGuide from '../../../Atom/BaseGuide';


const TaxInvoiceAuto = () => {

  return (

    <S.BottomTextContainer>
      <span style={{ color: '#575657', fontSize: '1.6rem' }}>개인정보 수집 및 이용에 대한 안내</span>
      <S.TextP>
        수집하는 개인정보 항목_<br />
        당사는 세금계산서 발행요청을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br />
        - 수집항목 : 사업자등록번호, 상호명, 대표자명, 사업장 주소, 업태, 종목<br />
        - 개인정보 수집방법 : 홈페이지(세금계산서 요청)<br /><br />
        개인정보의 수집 및 이용목적_<br />
        당사는 수집한 개인정보를 다음 목적을 위해 활용합니다.<br />
        - 전자세금계산서 발행<br /><br />
        개인정보의 보유 및 이용기간_<br />
        - 당사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 파기합니다.<br /><br />

        *그 밖의 사항은 개인정보취급방침을 준수합니다.
      </S.TextP>
    </S.BottomTextContainer>

  );
};

export default TaxInvoiceAuto;
