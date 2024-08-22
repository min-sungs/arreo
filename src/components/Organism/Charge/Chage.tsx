/* eslint-disable react/button-has-type */
/* eslint-disable no-void */
import React from 'react';
import ChargeTopComponent from '../../Molecules/Charge/charge/top/ChargeTop.index';
import styled from 'styled-components';
import ChargeMidComponent from '../../Molecules/Charge/charge/mid/ChargeMid.index';
import ChageBottomComponent from '../../Molecules/Charge/charge/bottom/ChargeBottom.index';

const ChargePage = () => {
  const Section = styled.section`
    /* position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%; */
  `;

  return (
    <Section>
      <ChargeTopComponent />
      <ChargeMidComponent />
      <ChageBottomComponent />
    </Section>
  );
};

export default ChargePage;
