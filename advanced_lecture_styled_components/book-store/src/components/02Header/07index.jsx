// 00 okay, so it is now time for some cleanup
// 00 first of all, we can get rid of some of these 
// 00 imports such as classNames
// 00 and the .scss file
// 03 and now we can remove these because they are elsewhere now
// 03 and then we just need to import our components
import {
  TopBar,
  Nav,
  MainText,
  NavLink,
  NavButton,
  ThemeButton
} from './08styles.jsx'
// 04 now this looks a lot better
// 04 and this is common. If our 
// 04 components are comprosied of 
// 04 many smaller styled-components
// 04 we can normally nest them under the same 
// 04 directory

// 01 but now you are also probably thinking
// 01 that your file is getting huge
// 01 so lets go ahead and pull
// 01 these styled-components out to their own 
// 01 file

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
        <ThemeButton isDark={theme === 'dark'} onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</ThemeButton>        
        <NavLink to="/books" textcolor={theme === 'dark' ? 'white' : '#252525'}>my books</NavLink>
        <NavLink to="/favorites" textcolor={theme === 'dark' ? 'white' : '#252525'}>favorites</NavLink>
        <NavLink to="/wish" textcolor={theme === 'dark' ? 'white' : '#252525'}>wish list</NavLink>
        <NavButton to="/login">login</NavButton>
      </Nav>
  </TopBar>
  )
}

export default Header;