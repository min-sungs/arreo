import React from 'react';
import styled from 'styled-components';

import AgreementCheckBoxInner from '../../Atom/SignUp/AgreementCheckBoxInner';
import { SignUpDataProps } from '../../../apis/utils/typeGuard/signUpGuard';

const AgreementInner = styled.li``;

const AgreementTitle = styled.h3`
  color: #000;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.6vw;
`;

const AgreementContent = styled.p`
  width: 100%;
  height: 121px;
  overflow-y: scroll;
  background-color: #e9e9e9;
  padding: 1vw;
  box-sizing: border-box;
  font-size: 9px;
  margin-bottom: 0.6vw;
`;
const AgreementCheck = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2vw;
`;

const Agreement = ({ element, checkItemHandler, checked }: SignUpDataProps) => {
  const { id, checkLabel, children, contents } = element;
  // console.log("checkItemHandler", checkItemHandler);
  return (
    <AgreementInner>
      <AgreementTitle>{children}</AgreementTitle>
      <iframe title="Terms and Conditions" src={contents} width="100%" height="150px" />
      <AgreementCheck>
        <AgreementCheckBoxInner id={id} checkLabel={checkLabel} checkItemHandler={checkItemHandler} checked={checked} />
      </AgreementCheck>
    </AgreementInner>
  );
};

export default Agreement;
