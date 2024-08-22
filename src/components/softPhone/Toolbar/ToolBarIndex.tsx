import React, { useEffect, useState } from 'react';
import * as S from './ToolBarIndex.styles';
import ToolBarListPage from './ToolBarListPage/ToolBarListPage';
import TooBarCustomerPage from './TooBarCustomerPage/TooBarCustomerPage';
import POBox015 from '../DisplayGroups/POBox015/POBox015.tsx';
import MessageSendHistory from '../DisplayGroups/MessageSendHistory/MessageSendHistory.tsx';
import MessageManagement from '../DisplayGroups/MessageManagement/MessageManagement.tsx';
import CustomerService from '../DisplayGroups/CustomerService/CustomerService.tsx';

const ToolBarIndex = ({ children }: any) => {
  const [componentToRender, setComponentToRender] = useState<any>();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/customer') {
        setComponentToRender(<TooBarCustomerPage />);
      } else {
        setComponentToRender(<ToolBarListPage />);
      }
    }
  }, [window.location.pathname]);
  return <S.ToolBarListPageContainer>{componentToRender}</S.ToolBarListPageContainer>;
};

export default ToolBarIndex;
