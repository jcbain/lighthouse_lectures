import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  background-color: ${props => props.theme.navButton.palette.bg};
  color: ${props => props.theme.navButton.palette.text};
  border: 2px solid ${props => props.theme.navButton.palette.border};
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
`

const NavButton = (props) => {
  const {children, ...rest} = props;

  return <Wrapper {...rest}>{children}</Wrapper>
}

export default NavButton;