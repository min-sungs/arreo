import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface ISOneTapSideNav {
  list: {
    label: string;
    to: string;
    children?: {
      label: string;
      to: string;
    }[];
  }[];
}

const Ul = styled.ul`
	@media screen and (max-width:1440px){
		display: flex;
		flex-wrap: wrap;
	}
		`;
const Li = styled.li`
  font-size: 1.6rem;
	margin-bottom: 1.6rem;
	@media screen and (max-width:1440px){
		:last-child{
			a{
				border-right: 0;
			}
		}
		a{
			position: relative;
			border-right: 1px solid #333;
			margin-right: .5rem;
			padding-right: .5rem;
		}
		a.active{
			::after{
				content: "";
				width: calc(100% - .5rem);
				height: 2px;
				display: block;
				position: absolute;
				bottom: -2px;
				left: 0;
				background: #0D42E5;
			}
		}
	}
  /* line-height: 32px; */
  /* width: 120px; */
  /* &:hover {
    font-weight: bold;
  } */
`;

const SubLi = styled.li`
  font-size: 1.6rem;
  line-height: 30px;
  width: 120px;
  /* white-space: nowrap; */
  margin-left: 20px;
  &:hover {
    font-weight: bold;
  }
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  white-space: nowrap;
  text-decoration: none;
  color: ${(props) => props.color};

  &.active {
    font-weight: bold;
  }
`;

const OneDepthSideNav = (props: ISOneTapSideNav) => {
  return (
    <Ul>
      {props.list.map((el) => (
        <Li key={uuidv4()}>
          {el.children ? (
            <div>
              <StyledNavLink color="black" activeClassName="active" to={el.to}>
                {el.label}
              </StyledNavLink>
              <Ul>
                {el.children.map((child) => (
                  <SubLi key={uuidv4()}>
                    <StyledNavLink
                      color="gray"
                      activeClassName="active"
                      style={{
                        fontWeight: window.location.pathname === '/payment' && child.label === '결제내역' ? 'bold' : '',
                      }}
                      to={child.to}
                    >
                      {child.label}
                    </StyledNavLink>
                  </SubLi>
                ))}
              </Ul>
            </div>
          ) : (
            <StyledNavLink activeClassName="active" to={el.to}>
              {el.label}
            </StyledNavLink>
          )}
        </Li>
      ))}
    </Ul>
  );
};

export default OneDepthSideNav;
