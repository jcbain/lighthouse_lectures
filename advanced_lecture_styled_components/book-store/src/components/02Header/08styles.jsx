import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBar = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: fixed;
  top: 0;
  height: 100px;
  z-index: 100;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: baseline;
  ${TopBar} & {
    flex-basis: 50%;
  }
`;

export const MainText = styled.h1`
  padding: 20px 20px 10px 20px;
  color: ${props => props.isDark ? "white": "#252525"};
  font-weight: 500;
  ${TopBar} > & {
    flex-basis: 50%;
    font-size: 28px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.textcolor};
  &:hover {
    color: #ca8aff;
  }
`

export const NavButton = styled(Link)`
  background-color: #ca8aff;
  color: white;
  border: 2px solid #ca8aff;
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
`;

export const NavButtonDisabled = styled(NavButton)`
  cursor: not-allowed;
  background-color: lightgray;
  border-color: lightgray;
`

export const ThemeButton = styled.button`
  background: none;
  color: ${props => props.isDark ? "white": "#252525"};;
  border: none;
`