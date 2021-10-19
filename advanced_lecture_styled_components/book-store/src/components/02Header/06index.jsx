// 00 we can even style our styled components
// 00 let's create a couple more to see how this works
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './02header.scss';

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

const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.textcolor};
  &:hover {
    color: #ca8aff;
  }
`
// 01 so we have this login button
// 01 which is just a Link from 
// 01 react-router dom
// 01 let's go ahead and copy over the styles here
// 01 and lets see what that looks like
const NavButton = styled(Link)`
  background-color: #ca8aff;
  color: white;
  border: 2px solid #ca8aff;
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
`;

// 04 now, if we wanted to, 
// 04 we can actually create a new button
// 04 with the scaffolding from the previously
// 04 styled styled component
// 04 extending our styles to a slightly different button
const NavButtonDisabled = styled(NavButton)`
  cursor: not-allowed;
  background-color: lightgray;
  border-color: lightgray;
`
// 06 now the last thing i want to do is actually
// 06 add our themeButton
export const ThemeButton = styled.button`
  background: none;
  color: ${props => props.isDark ? "white": "#252525"};;
  border: none;
`


const Header = (props) => {
  const { theme, setTheme } = props;

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <TopBar>
      <MainText isDark={theme === 'dark'}>Mulder's Books</MainText>
      <Nav>
        {/* 07 and we cant forget to add it in */}
        <ThemeButton isDark={theme === 'dark'} onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</ThemeButton>        
        <NavLink to="/books" textcolor={theme === 'dark' ? 'white' : '#252525'}>my books</NavLink>
        <NavLink to="/favorites" textcolor={theme === 'dark' ? 'white' : '#252525'}>favorites</NavLink>
        <NavLink to="/wish" textcolor={theme === 'dark' ? 'white' : '#252525'}>wish list</NavLink>
        {/* 03 let's see if that works */}
        <NavButton to="/login">login</NavButton>

        {/* 05 and we can check that out here*/}
        {/* <NavButtonDisabled to="/login">login</NavButtonDisabled> */}
      </Nav>
  </TopBar>
  )
}

export default Header;