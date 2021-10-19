import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './02header.scss';

// 00 we first have to begin by importing 
// 00 styled from styled-components
// 00 but then we can begin by replacing
// 00 our provided components with styled-components
// 01 then all we have to do is bring over our styles
const TopBar = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: fixed;
  top: 0;
  height: 100px;
  z-index: 100;
`;

// 04 and while we are at it,
// 04 we might as well do our navigation
// 04 as well
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: baseline;
  /* 05 but since we are no longer  */
  /* 05 specifying class names */
  /* how do we make a nested rule? */
  ${TopBar} & {
    /* 06 this will take the  */
    flex-basis: 50%;
  }
`;

const Header = (props) => {
  const { theme, setTheme } = props;

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    // 02 and then we can just replace this 
    // 02 header with our newly created 
    // 02 styled.header called TopBar
    // 03 and then from there, since
    // 03 our styled-components is taking 
    // 03 care of our styles
    // 03 we can remove the classnames
    <TopBar>
      <h2 className={classNames({"header__title": true, 'dark': theme === 'dark'})}>Mulder's Books</h2>
      <Nav>
        <button className={classNames({"header__theme-button": true, 'dark':  theme === 'dark'})} onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</button>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/books">my books</Link>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/favorites">favorites</Link>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/wish">wish list</Link>
        <Link className={classNames({"header__nav-button": true, "dark":  theme === 'dark'})} to="/login">login</Link>
      </Nav>
  </TopBar>
  )
}

export default Header;