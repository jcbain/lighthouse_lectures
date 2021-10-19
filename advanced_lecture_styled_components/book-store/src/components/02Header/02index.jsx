
// 00 up until this point, we are used
// 00 to adding styles somewhat like this
// 00 we have components that get mounted
// 00 to the dom and we add a classname
// 00 and bring in some external stylesheet to 
// 00 style these components
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './02header.scss';

const Header = (props) => {
  const { theme, setTheme } = props;

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    // 01 let's begin by updating our header
    <header className={classNames({"header__main": true})}>
      <h2 className={classNames({"header__title": true, 'dark': theme === 'dark'})}>Mulder's Books</h2>
      <nav className={classNames("header__nav")}>
        <button className={classNames({"header__theme-button": true, 'dark':  theme === 'dark'})} onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</button>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/books">my books</Link>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/favorites">favorites</Link>
        <Link className={classNames({"header__nav-link": true, "dark":  theme === 'dark'})} to="/wish">wish list</Link>
        <Link className={classNames({"header__nav-button": true, "dark":  theme === 'dark'})} to="/login">login</Link>
      </nav>
  </header>
  )
}

export default Header;