import { TopBar, MainText, Nav, ThemeButton } from './styles';
import NavLink from './NavLink';
import NavButton from './NavButton';

const Header = (props) => {
  const { theme, setTheme } = props;
  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <TopBar>
      <MainText>Mulder's Books</MainText>
      <Nav>
        <ThemeButton onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</ThemeButton>
        <NavLink to="/books">my books</NavLink>
        <NavLink to="/favorites">favorites</NavLink>
        <NavLink to="/wish">wish list</NavLink>
        <NavButton to="/login">login</NavButton>
      </Nav>
  </TopBar>
  )
}

export default Header;