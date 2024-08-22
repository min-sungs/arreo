import React from 'react';

import * as S from './Charging.style';
import TitleLine from '../../components/Molecules/Titles/TitleLine';
import OneDepthSideNav from '../../components/Molecules/Navigations/OneTapSideNav';
import UsageHistoryTable from '../../components/Organism/Charge/UsageHistoryTable';
import PaymentHistoryTable from '../../components/Organism/Charge/PaymentHistoryTable';
import ChageInfo from '../../components/Organism/Charge/ChageInfo';
import TaxInvoiceList from '../../components/Organism/Charge/TaxInvoiceList';
import TaxInvoiceHistoryTable from '../../components/Organism/Charge/TaxInvoiceHistoryTable';
import TaxInvoiceAuto from '../../components/Organism/Charge/TaxInvoiceAuto';
import RegisterTaxInvoice from '../../components/Organism/Charge/RegisterTaxInvoice';
import ChargePage from '../../components/Organism/Charge/Chage';

const Charging = ({ link = 'charging' }) => {
  const subNavLink = [
    { label: '서비스 요금 충전소', to: '/charging' },
    { label: '충전소', to: '/charge' },
    { label: '결제내역', to: '/payment' },
    { label: '사용내역', to: '/usage' },
    { label: '세금계산서 자동 발행', to: '/TaxInvoiceAuto' },
    { label: '현금영수증 발행신청', to: '/registerTaxInvoice' },
    { label: '세금계산서/현금영수증 신청내역', to: '/taxCashReceiptsDetail' },
    { label: '세금계산서 발행내역', to: '/TaxInvoiceDetail' },
  ];

  // url 변동 가능성 대비 pathName 대신 props 사용
  const currComponent: { [key: string]: React.ReactElement } = {
    charging: <ChageInfo />,
    charge: <ChargePage />,
    payment: <PaymentHistoryTable />,
    detail: <PaymentHistoryTable />,
    usage: <UsageHistoryTable />,
    taxCashReceiptsDetail: <TaxInvoiceList />,
    taxInvoiceDetail: <TaxInvoiceHistoryTable />,
    TaxInvoiceAuto: <TaxInvoiceAuto />,
    RegisterTaxInvoice: <RegisterTaxInvoice />,
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <TitleLine text="충전소" type="main" marginBottom="10px" marginTop="10px" />
        </S.Title>
        <S.SubWrapper>
          <S.SideNav>
            <OneDepthSideNav list={subNavLink} />
          </S.SideNav>
          <S.Content>{currComponent[link]}</S.Content>
        </S.SubWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default Charging;
