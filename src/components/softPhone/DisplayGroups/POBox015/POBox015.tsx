import Loader from 'components/common/Loader';
import {usePOBox015} from 'components/hooks/customs/say015/pobox015/usePOBox015';
import React, {useEffect, useState} from 'react';
import ReSubscription from '../ReSubscription/ReSubscription';
import POBox015Mailbox from './POBox015Mailbox';
import SignUp015Page from './SignUp015Page/SignUp015Page';

interface IauthorityData {
  availabilityStatus: boolean;
  monthlyPrice: number;
  number015: string;
  say015User: boolean;
  subsEndDate: string;
  subscriptionStatus: boolean;
}

const POBox015 = () => {
  const {pageState, setPageState, authorityData, authorityDataIsLoading, authorityDataRefetch} = usePOBox015();
  const storageUser = localStorage.getItem('user'); // 현재 로그인중인 user

  const [authorityDataState, setAuthorityDataState] = useState<IauthorityData | null>(null);
  useEffect(() => {
    if(authorityData) {
      const initailAuthorityData: IauthorityData = {
        availabilityStatus: authorityData.availabilityStatus,
        monthlyPrice: authorityData.monthlyPrice,
        number015: authorityData.number015,
        say015User: authorityData.say015User,
        subsEndDate: authorityData.subsEndDate,
        subscriptionStatus: authorityData.subscriptionStatus,
      };
      setAuthorityDataState(initailAuthorityData);
    }
  }, [authorityData]);

  /*
    availabilityStatus
    : 
    true
    monthlyPrice
    : 
    3000
    number015
    : 
    "01585049153"
    say015User
    : 
    true
    subsEndDate
    : 
    "20240327"
    subscriptionStatus
    : 
    true
  */

  let componentToRender;

  if (pageState && pageState === '구독') {
    componentToRender = <POBox015Mailbox/>;
  }
  if (pageState && pageState === '미구독') {
    componentToRender = <ReSubscription/>;
  }
  if (pageState && pageState === '미가입') {
    componentToRender = (
      <SignUp015Page
        authorityDataRefetch={authorityDataRefetch}
        storageUser={storageUser}
        authorityDataState={authorityDataState}
      />
    );
  }
  return authorityDataIsLoading ? <Loader/> : componentToRender;
};

export default POBox015;
