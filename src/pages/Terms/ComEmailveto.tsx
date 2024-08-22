import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import { Link } from 'react-router-dom';

const ComEmailveto = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type='main' text='전자메일 무단수집거부' color='#000' />
      </S.TitleContainer>

      <S.MidText>
        <S.Licontainer style={{ marginTop: '50px' }}>
          <S.LiList>
            본 웹사이트에 게시된 이메일주소가 전자우편수집프로그램이나 그밖의 기술적 장치를 이용하여 무단으로 수집되는것을 거부하며, 이를 위반시 정보통신망이용촉진및정보보호등에관한법률에 의해 형사처벌됩니다.
          </S.LiList>
          <br />
          <S.LiList>
            <S.Title>게시일 : 2007년 9월 05일</S.Title>
          </S.LiList>
        </S.Licontainer>
      </S.MidText>
    </S.Container>
  )

}

export default ComEmailveto;