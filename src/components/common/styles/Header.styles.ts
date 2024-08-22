import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  /* padding:26px 0 34px 5%; */
  /* padding:2.6rem 0 3.4rem 0; */
  font-size:2.5rem;
  font-weight:600;
  color:#000;
	width: 100%;
	background-color:#F8F9FD;
  h1 {}
`
export const HeaderWrap = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 2.6rem 0 3.4rem;
	/* max-width: 1600px; */
`


export const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Chrome, Edge, Opera and Firefox */
`;

export const HeaderInner = styled.header`
  min-width: 1280px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1% 17px 1% 0;
  box-sizing: border-box;
  align-items: center;
  position: relative;

  @media (max-width: 1600px) {
    padding: 1% 5%;
  }
`;

export const HeaderTopLine = styled.div`
  width: 100%;
  height:10px;
  background-color: #0D42E5;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Inner = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:20px;
`;

export const Logo = styled(Link)`
  font-size: 4rem;
  font-weight: 900;
  color: #000;
`;

export const RightContents = styled.div`
  height: 100%;
`;
export const PointWrap = styled.div`
  color: #000;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;

export const Cash = styled.em`
  width: 18px;
  height: 18px;
  background-color: #fff;
  color: #000;
  display: inline-block;
  border-radius:50px;
  text-align: center;
  margin-right: 5px;
`;
export const Point = styled.em`
  width: 18px;
  height: 18px;
  background-color: #fff;
  color: #000;
  display: inline-block;
  border-radius:50px;
  text-align: center;
  margin: 0 5px 0 5px;
`;

export const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const SignInner = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  padding-top:4px;
`;

export const SignEl = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  margin: 0 1rem;

  :last-child {
    margin-right: 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const HeaderInnerBg = styled.div`
  position: absolute;
  width: 200%;
  height: 200px;
  left: -160px;
  top: 82%;
  z-index: 99;
  background-color: #ccc;
`;

export const StyledNavLink = styled.nav`
  position: relative;
	font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 99;
  line-height: 50px;
  display: table;
  padding: 0 18px;

  //&::before {
  //  content: '';
  //  position: absolute;
  //  top: 0;
  //  left: 50%;
  //  width: 10px;
  //  height: 10px;
  //  border-radius: 50%;
  //  background-color: red;
  //  transform: translate(200%,100%);
  //}

  &:last-child {
    padding: 0 25.5px;
  }

  &:hover {
    transition: all 0.3s;
    color: #000;

    ::after {
      content: '';
      position: absolute;
      bottom:10px;
      left: 0;
      width: 100%;
      opacity: 1;
      animation: fill 0.3s forwards;
      z-index: -1;
    }
  }

  & + & {
    margin-left:20px;
  }

  :first-child {
    margin-left: 0;
  }

  @keyframes fill {
    0% {
      width: 0%;
      height: 100%;
    }
    50% {
      width: 0%;
      height: 100%;
    }
    100% {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #000;
    }
  }

  & > a {
    display: block;
    padding: 0 18px;
  }
`;

export const StyledCateLinkWrap = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0%;
  display: table;
`;

export const StyledCateLink = styled.li`
  line-height: 20px;
  padding: 0.4vw 18px;
  font-size: 1.2rem;
  text-align: center;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const AlertMsgDiv = styled.div`
  position: absolute;
  background-color: red;
  text-align: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  right: 18px;
  top: 10px;
`;

export const AlertMsgCount = styled.span`
  display: block;
  line-height: 13px;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
`;
