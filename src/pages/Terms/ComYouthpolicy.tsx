import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import { Link } from 'react-router-dom';

const ComYouthpolicy = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type='main' text='청소년 보호정책' color='#000' />
      </S.TitleContainer>

      <S.MidText>
        <S.Licontainer style={{ marginTop: '50px' }}>
          <S.LiList>
            (주)서울이동통신(이하 “회사”)는 청소년들이 인터넷을 이용함에 있어, 밝고 건전한 환경을 조성하고, 올바른 인터넷 이용을 선도하며 청소년이 나와 타인을 존중할 수 있는 인격체로의 성장할 수 있도록 돕기 위해 정보통신윤리위원회 심의규정 및 청소년보호위원회 청소년유해매체물 심의규정 기준 등에 따라 19세 미만의 청소년들이 유해정보에 접근할 수 없도록 방지하고자 본 청소년 보호정책을 통하여 회사가 청소년보호를 위해 어떠한 조치를 취하고 있는지 알려드리며 청소년의 건전한 성장을 저해하는 음란/불법 등의 유해정보와 비윤리적/반사회적 행위에 대하여는 엄격하게 제재하기 위하여 다음과 같이 활동하고 있습니다.
          </S.LiList>
        </S.Licontainer>

        <S.Title>1. 청소년유해정보로부터 청소년보호계획의 수립</S.Title>
        <S.Title>2. 청소년유해정보에 대한 청소년접근제한 및 관리조치</S.Title>
        <S.Title>3. 정보통신업무 종사자에 대한 청소년유해정보로부터의 청소년보호를 위한 교육</S.Title>
        <S.Title>4. 청소년유해정보로 인한 피해상담 및 고충처리</S.Title>
        <S.MainTitle>5. 그 밖에 청소년유해정보로부터 청소년을 보호하기 위하여 필요한 사항</S.MainTitle>

        <S.SubTitle>회사는 아래에 해당하는 청소년유해정보에 대하여 청소년의 접근을 금지하고 있습니다.</S.SubTitle>
        <br />

        <S.Title>1. 청소년에게 성적인 욕구를 자극하는 선정적인 것이거나 음란한 것</S.Title>
        <S.Title>2. 청소년에게 폭악성이나 범죄의 충동을 일으킬 수 있는 것</S.Title>
        <S.Title>3. 성폭력을 포함한 각종 형태의 폭력 행사와 약물의 남용을 자극하거나 미화하는 것</S.Title>
        <S.Title>4. 청소년의 건전한 인격과 시민 의식의 형성을 저해하는 반사회적·비윤리적인 것</S.Title>
        <S.MainTitle>5. 기타 청소년의 정신적?신체적 건강에 명백히 해를 끼칠 우려가 있는 것</S.MainTitle>

        <S.Licontainer>
          <S.LiList>
            회사는 청소년 유해정보로 인한 피해 상담 및 고충 처리를 위한 전문 인력을 배치하여 그 피해가 확산되지 않도록 하고 있습니다. 이용자 분들께서는 하단에 명시한 &quot;청소년 보호 관리 책임자와 실무자&quot;의 전화나 전자우편을 통하여 피해 상담 및 고충 처리를 요청할 수 있습니다.
          </S.LiList>
        </S.Licontainer>

      </S.MidText>

      <S.BottomText>
        <S.SubTitle>청소년 보호 관리 책임자</S.SubTitle>
        <S.Licontainer>
          <S.LiList>이 름 : 원태연</S.LiList>
          <S.LiList>직위: 운영개발 2팀장</S.LiList>
          <S.LiList>전화 번호 : 02-3485-6714</S.LiList>
          <S.LiList>전자우편 : 01073680507@arreo.com</S.LiList>
          <S.LiList>FAX : 02-3485-6714</S.LiList>
        </S.Licontainer>
      </S.BottomText>




    </S.Container>
  )

}

export default ComYouthpolicy;