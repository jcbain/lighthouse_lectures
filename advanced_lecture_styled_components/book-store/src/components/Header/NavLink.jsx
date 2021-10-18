import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.navLink.palette.text};;
  &:hover {
    color: ${props => props.theme.navLink.palette.hoverText};
  }
`;

const NavLink = (props) => {
  const { children, ...rest } = props;

  return <Wrapper {...rest}>{children}</Wrapper>
}

export default NavLink;