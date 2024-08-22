import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';

const Container = styled.footer`
  width: 100%;
	margin-top: 3rem;
  /* height: 180px; */
  background-color: #222;
  position: relative;
  /* position: absolute;
  left: 0;
  bottom:0; */
  /* box-shadow: 0px -2px 10px -4px rgba(0, 0, 0, 0.75); */
  z-index: 10;
  font-size: 1.4rem;
  color: #adb5bd;

  /* @media screen and (max-height: 750px) {
    height: 4rem;
  } */
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
  width: 95%;
  height: 100%;
  margin: 0 auto;
	@media screen and (max-width: 760px){
		flex-wrap: wrap;
	}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
	@media screen and (max-width: 760px){
		padding-top: 0;
		margin-bottom: 2rem;
	}
`;

const Left = styled.div``;

const Right = styled.div`
	@media screen and (max-width: 760px){
		order: -1;
	}
`;

const H3 = styled.h3`
  font-weight: bold;
  color: #f5f5f5;
`;

const Top = styled.div`
  display: flex;
	flex-wrap: wrap;
  padding: 12px 0;
	gap: 1rem;
`;

const TopEl = styled.div`
  color: #f5f5f5;
  padding-right: 30px;
`;

const Bottom = styled.div``;

const Info = styled.div`
  display: flex;
  padding: 12px 0;
  color: #f5f5f5;
	@media screen and (max-width: 760px){
		flex-wrap: wrap;
		gap: 1rem;
	}
`;

const BottomEl = styled(Link)`
  padding: 0 1.4rem;
  text-decoration: underline;
  border-right: 1px solid #ccc;
  color: #f5f5f5;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    border: none;
  }
	@media screen and (max-width: 760px){
		flex-wrap: wrap;
		padding: 0;
		padding-right: 1rem;
		padding-left: 0;
	}
`;

const CopyRight = styled.p``;

const Footer = () => {
  const topEl = [
    '대표이사 : 이주호',
    '서울시 강남구 봉은사로 18길 84 4층',
    '사업자등록번호 : 114-86-19326',
    '통신판매업신고번호 : 강남-11625',
  ];
  const bottomEl = ['이용약관', '개인정보처리방침', '청소년보호정책', '스팸정책', '전자메일무단수집거부'];

  const LinkList = ['ComUseContent', 'ComProtect', 'ComYouthpolicy', 'ComSpampolicy', 'ComEmailveto'];

  const [pathName, setPathName] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathName(window.location.pathname);
    }
  }, [navigate]);


  return (
    ((pathName === "/") || (pathName === "/addressbook")) ? null : (
      <Container>
        <Inner>
          <Left>
            <H3>회사 소개</H3>
            <Top>
              {topEl.map((el) => {
                return (
                  <TopEl key={el}>
                    {el}
                  </TopEl>
                );
              })}
            </Top>
            <H3>고객센터 : 1670-3480</H3>
            <Bottom>
              <Info>
                {bottomEl.map((el, idx) => {
                  // eslint-disable-next-line react/no-array-index-key
                  return <BottomEl to={`/${LinkList[idx]}`} key={idx}>{el}</BottomEl>;
                })}
              </Info>
            </Bottom>
            <CopyRight>COPYRIGHT © 2007 NETIAN.COM.INC.ALL RIGHTS RESERVED webmaster@arreo.com</CopyRight>
          </Left>
          <Right>
            <LogoWrapper>
              <Link to="/">
                <img src="img/f_logo.png" alt="BigCo Inc. logo"/>
              </Link>
            </LogoWrapper>
          </Right>
        </Inner>
      </Container>
    )
  );
};

export default Footer;
