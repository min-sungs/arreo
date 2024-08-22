import React, { useState } from 'react';
import ATitle from '../../components/Atom/ATitle';
import ListItem from '@mui/material';
import * as S from './style/ArsSetting.styles';
// import ArsTree from '../../components/Molecules/ArsSetting/ArsTree';
// import ArsTreeTest from '../../components/Molecules/ArsSetting/ArsTreeTest';
import ArsTreeTest2 from '../../components/Molecules/ArsSetting/ArsTreeTest2';
import { use015ARS } from '../../components/hooks/customs/say015/say015ARS/use015ARS';
import { usePOBox015 } from 'components/hooks/customs/say015/pobox015/usePOBox015';


const ArsSetting = () => {
  const { handleAddButtonClick, initialS015Data, postArsTree } = use015ARS({});
  const { authorityData, pageState, msgArsToggle } = usePOBox015();


  return (
    <div style={{ width: '70%', minHeight: 'calc(-230px + 100vh)' }}>
      <S.Title>
        <span>{authorityData.number015.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}</span>
        (으)로 전화가 오면, 다음을 실행합니다.
      </S.Title>

      {/* <div></div> */}
      {/* <button onClick={handleAddNode}>동일레벨추가</button> */}
      {/* <button onClick={() => handleAddButtonClick}>하위레벨추가</button> */}

      <S.ArsContainer>
        <ul>
          <li style={{ display: 'flex' }}>
            {/*<S.ActionWrap id={postArsTree.id}>*/}
            {/*  <S.ActionBox style={{ backgroundColor: ' rgba(255, 255, 255, 0.8)' }}>*/}
            {/*    <S.Action>{initialS015Data.action}</S.Action>*/}
            {/*    <S.Content>{initialS015Data.ttsText}</S.Content>*/}
            {/*    <S.menu>*/}
            {/*      <div />*/}
            {/*      <div />*/}
            {/*      <div />*/}
            {/*    </S.menu>*/}
            {/*  </S.ActionBox>*/}
            {/*</S.ActionWrap>*/}
            {/* <ArsTree /> */}
            <ArsTreeTest2 />
            {/* <ArsTreeTest /> */}
          </li>
        </ul>
      </S.ArsContainer>
    </div>
  );
};

export default ArsSetting;
