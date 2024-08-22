import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getIs015 } from '../apis/api/say015Apis';
import Loader from '../components/common/Loader';

const ObjectComponent = ({ data }: any) => {
  const { data: getUse015, isLoading, isError } = useQuery(['use015'], () => getIs015());

  if (isLoading) {
    <Loader />;
  }

  return (
    <object data={data} type="text/html" style={{ width: '100%', height: '768px' }}>
      <p>해당 웹 페이지를 로드할 수 없습니다.</p>
    </object>
  );
};
export default ObjectComponent;
