import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface SubNavProps {
  links: { label: string; to: string }[];
  chiledren: string;
}

const NavWrap = styled.div`
  width: 20%;
  /* position: relative; */
  /* display: ; */
`;

const SubH2 = styled.h2`
  padding-top: 20px;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
`;
const Nav = styled.ul`
  /* position: absolute; */
  display: inline-block;
`;
const Depth = styled.li`
  font-size: 14px;
  line-height: 30px;
  width: 120px;
  &:hover {
    font-weight: bold;
  }
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
  }
`;

const SubNav: FC<SubNavProps> = ({ links, chiledren }) => (
  // <NavCenter>
  <NavWrap>
    {/* ul */}
    <Nav>
      {links.map((link) => (
        // li
        <Depth key={link.to}>
          <StyledNavLink activeClassName="active" to={link.to}>
            {link.label}
          </StyledNavLink>
        </Depth>
      ))}
    </Nav>
  </NavWrap>
  // </NavCenter>
);

export default SubNav;
