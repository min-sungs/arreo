import React from 'react';

import * as S from './MyPage.style.ts';
import UserInfoChange from '../../components/Organism/MyPage/UserInfoChange';
import PwChange from '../../components/Organism/MyPage/PwChange';
import PhoneNumberChange from '../../components/Organism/MyPage/PhoneNumberChange';
import UserNameChange from '../../components/Organism/MyPage/UserNameChange';
import CallingNumberAdmin from '../../components/Organism/MyPage/CallingNumberAdmin';
import WhiteDomain from '../../components/Organism/MyPage/WhiteDomain';
import MemberLeave from '../../components/Organism/MyPage/MemberLeave';
import OneDepthSideNav from '../../components/Molecules/Navigations/OneTapSideNav';
import TitleLine from '../../components/Molecules/Titles/TitleLine';
import WhiteDomainPost from '../../components/Organism/MyPage/WhiteDomainPost';

const MyPage = ({ link = 'mypage' }) => {
  const subNavLink = [
    { label: '회원정보 변경', to: '/userinfochange' },
    { label: '비밀번호 변경', to: '/passwordchange' },
    { label: '휴대폰번호 변경', to: '/phonenumberchange' },
    { label: '명의 변경', to: '/usernamechange' },
    { label: '발신번호 관리', to: '/callingnumber' },
    // { label: '화이트 도메인', to: '/whitedomain' },
    { label: '회원 탈퇴', to: '/memberleave' },
  ];

  const currComponent: { [key: string]: React.ReactElement } = {
    userinfochange: <UserInfoChange />,
    passwordchange: <PwChange />,
    phonenumberchange: <PhoneNumberChange />,
    usernamechange: <UserNameChange />,
    callingnumber: <CallingNumberAdmin />,
    whitedomain: <WhiteDomain />,
    whitedomainpost: <WhiteDomainPost />,
    memberleave: <MemberLeave />,
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <TitleLine text="마이페이지" type="main" marginBottom="10px" marginTop="10px" />
        </S.Title>
        <S.SubWrapper>
          <S.SideNav>
            <OneDepthSideNav list={subNavLink} />
          </S.SideNav>
          <S.Content>{currComponent[link]}</S.Content>
        </S.SubWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
