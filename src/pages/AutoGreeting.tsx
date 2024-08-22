import React, { JSX } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getIs015 } from '../apis/api/say015Apis';
import Loader from '../components/common/Loader';
import ObjectComponent from './test/ObjectComponent ';

const AutoGreeting = (): JSX.Element => {
  const { data: getUse015, isLoading, isError }: any = useQuery(['use015'], () => getIs015());

  if (isLoading) {
    <Loader />;
  }

  return <ObjectComponent data={`https://say015.com/arsSetting?accessKey=${getUse015?.data}`} />;
};

export default AutoGreeting;
