/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import {useChargePopup} from '../../hooks/customs/charge/chargeStation/useChargePopup';

interface IPopupProps {
  firstDataState: any;
  isChargeKiccLoading: boolean;
  closePopup: () => void;
}

const ChargePopup = ({firstDataState, isChargeKiccLoading, closePopup}: IPopupProps) => {
  const {paymentUIUrlState} = useChargePopup({firstDataState, isChargeKiccLoading, closePopup});

  const IframeWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
  `;

  const Iframe = styled.iframe`
    border-radius: 0 0 20px 20px;
    box-shadow: 7px 7px 16px -11px rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
    width: 1000px;
    height: 900px;
    padding-left: 7.5%;
    padding-top: 10%;
    background-color: #fff;
  `;

  const SpanWrap = styled.span`
    display: block;
    border-radius: 20px 20px 0 0;
    width: 1000px;
    line-height: 50px;
    text-align: right;
    font-size: 24px;
    top: 30px;
    right: 500px;
    font-weight: bold;
    z-index: 9999;
    background-color: #fff;
  `

  const Span = styled.span`
    margin-right : 15px;
    cursor: pointer;
  `

  return (
      <IframeWrapper>
        <SpanWrap>

          <Span onClick={closePopup}>X</Span>
        </SpanWrap>
        <Iframe id="myIframe" src={paymentUIUrlState ?? ''} title="Easypay UI"/>
      </IframeWrapper>
  );
};

export default ChargePopup;
