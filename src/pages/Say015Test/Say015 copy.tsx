import React from 'react';
import { use015ARS } from '../../components/hooks/customs/say015/say015ARS/use015ARS.ts';
import SoftPhone from '../../components/softPhone/SoftPhone.tsx';
import * as S from './styles/Say015.styles.ts';
import { usePOBox015 } from '../../components/hooks/customs/say015/pobox015/usePOBox015.ts';
import ArsSetting from './ArsSetting.tsx';
import POBox015Mock from 'components/softPhone/DisplayGroups/POBox015/POBox015Mock.tsx';
import { usePOBox015Detail } from 'components/hooks/customs/say015/pobox015/usePOBox015Detail.ts';
import Say015OK from './Say015OK.tsx';
import TestComponent from './TestComponent.tsx';

const Say015 = () => {
  const { authorityData, pageState, msgArsToggle } = usePOBox015();
  const { msgDetailData, msgDetailIsLoading } = usePOBox015Detail();

  return (
    <S.Say015Wrap>
      <TestComponent />
      {/* ARS 컴포넌트 커스텀훅 테스트중 */}
      {/* <div>
        <button onClick={handleAddNode}>부모 노드 테스트</button>
        <button onClick={handleAddSubNode}>부모 하위 노드 테스트</button>
      </div> */}
      {/* Start ARS MOCKUP */}
      {pageState !== "구독" && (
        <S.MockupWrap>
          <S.MockupText>
            <span>Say 015</span> 가입 시 아래의 서비스 이용이 가능합니다.
          </S.MockupText>
          <S.MockupContent>
            <img src="/img/say015/say015.svg" alt="testd" />
          </S.MockupContent>
        </S.MockupWrap>
      )}
      {/* End ARS MOCKUP */}
      {/* ARS 컴포넌트 자리 */}
      {pageState === "구독" && (
        msgArsToggle ? (
          <Say015OK msgDetailData={msgDetailData} msgDetailIsLoading={msgDetailIsLoading} />
        ) : (
          <ArsSetting />

        )
      )
      }
      <SoftPhone />
    </S.Say015Wrap>
  );
};

export default Say015;
