// 00 now one of the cool things
// 00 that styled-components allows us to do
// 00 is to style other components 
// 00 from other librarys
// 00 take for example these Links
// 00 they are compnents created from 
// 00 react-router-dom and as long as they
// 00 pass down their className for us to 
// 00 set as a prop, then we can actually wrap
// 00 styled around it
// 00 let's look at the syntax
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

// 01 here is the syntax for this
// 01 it is actually pretty simple
// 01 we can just invoke styled using 
// 01 the parantheses syntax
// 01 pass in the component and voila!
const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.textcolor};
  &:hover {
    color: #ca8aff;
  }
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
        <button className={classNames({"header__theme-button": true, 'dark':  theme === 'dark'})} onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</button>
        {/* 02 and now we can just add our new styled-components */}
        <NavLink to="/books" textcolor={theme === 'dark' ? 'white' : '#252525'}>my books</NavLink>
        <NavLink to="/favorites" textcolor={theme === 'dark' ? 'white' : '#252525'}>favorites</NavLink>
        <NavLink to="/wish" textcolor={theme === 'dark' ? 'white' : '#252525'}>wish list</NavLink>
        <Link className={classNames({"header__nav-button": true, "dark":  theme === 'dark'})} to="/login">login</Link>
      </Nav>
  </TopBar>
  )
}

export default Header;