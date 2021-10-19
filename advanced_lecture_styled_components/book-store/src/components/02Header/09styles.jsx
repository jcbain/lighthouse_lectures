// 00 so styled-components actually makes theming
// 00 pretty easy. In fact, all styled-components
// 00 get passed a theme prop which allows us
// 00 to give it an object
// 00 but first lets go take a look at a theme object
// 00 theme/light.js
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

// 01 so this was super ugly, but we can now change this
// 01 which is super nice
export const MainText = styled.h1`
  padding: 20px 20px 10px 20px;
  color: ${props => props.theme.header.palette.title};
  font-weight: 500;
  ${TopBar} > & {
    flex-basis: 50%;
    font-size: 28px;
  }
`;

// 02 and we can change it here
export const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.navLink.palette.text};
  &:hover {
    color: ${props => props.theme.navLink.palette.hoverText};
  }
`
// 03 and then this one
export const NavButton = styled(Link)`
  background-color: ${props => props.theme.navButton.palette.bg};
  color: ${props => props.theme.navButton.palette.text};
  border: 2px solid ${props => props.theme.navButton.palette.border};
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
`;

export const NavButtonDisabled = styled(NavButton)`
  cursor: not-allowed;
  background-color: lightgray;
  border-color: lightgray;
`

// 04 and finally our theme button
export const ThemeButton = styled.button`
  background: none;
  color: ${props => props.theme.header.palette.buttonText};
  border: none;
`

// 05 okay, but how is our theme being passed down
// 05 bring in the themeProvider component
// 05 this actually takes in the theme prop where you 
// 05 pass down the theme to the theme prop and it gets passed
// 05 to all of the styled-components