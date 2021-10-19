// 00 so one of the great things
// 00 about styled-components
// 00 is that you can pass props
// 00 into them so that you can 
// 00 render some declaration differently
// 00 or even modify the rule
// 00 lets take a look at our title
// 00 to see what i mean
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

// 01 lets create a styled component
// 01 and copy over some of the styles
// 01 and we will add a prop for the color of the text
export const MainText = styled.h1`
  padding: 20px 20px 10px 20px;
  /* 01 let's dynamically change the color of our text */
  /* color: ${props => props.fontColor}; */

  /* 03 or we can handle that conditionally up here*/
  color: ${props => props.isDark ? "white": "#252525"};
  font-weight: 500;
  ${TopBar} > & {
    flex-basis: 50%;
    font-size: 28px;
  }
`;


 

const Header = (props) => {
  const { theme, setTheme } = props;

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <TopBar>
      {/* 02  and we will go ahead and add that to our component*/}
      <MainText isDark={theme === 'dark'}>Mulder's Books</MainText>
      {/* 04 now this isn't how we would do this regularly */}
      {/* 04 but we will talk about that when we get to themes */}
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