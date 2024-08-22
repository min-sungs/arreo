import Loader from 'components/common/Loader.tsx';
import { usePOBox015Detail } from 'components/hooks/customs/say015/pobox015/usePOBox015Detail.ts';
import React from 'react';
import { usePOBox015 } from '../../components/hooks/customs/say015/pobox015/usePOBox015.ts';
import SoftPhone from '../../components/softPhone/SoftPhone.tsx';
import ArsSetting from './ArsSetting.tsx';
import Say015Mock from './Say015Mock.tsx';
import Say015OK from './Say015OK.tsx';
import * as S from './styles/Say015.styles.ts';

const Say015 = () => {
  const { pageState, msgArsToggle, authorityDataIsLoading } = usePOBox015();
  const { msgDetailData, msgDetailIsLoading } = usePOBox015Detail();

  return (
    <S.Say015Wrap>
      {authorityDataIsLoading && <Loader />}
      {/* ARS 컴포넌트 자리 */}
      {pageState === null && null}
      {pageState === '구독' &&
        (msgArsToggle ? (
          <Say015OK msgDetailData={msgDetailData} msgDetailIsLoading={msgDetailIsLoading} />
        ) : (
          <ArsSetting />
        ))}
      {pageState === ('미가입' || '미구독') && <Say015Mock />}
      {/* SoftPhone 자리 */}
      <SoftPhone />
    </S.Say015Wrap>
  );
};

export default Say015;
