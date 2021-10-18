import styled from 'styled-components';

import { TopBar as Sticky } from './Header/styles';

const Wrapper = styled.main`
  padding: 20px 20px; 
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around; 
  gap: 20px; 
  background: ${props => props.theme.booksContainer.palette.bg};
`;

const BooksContainer = (props) => {
  const {children, ...rest} = props;
  return (
    <Wrapper {...rest}>
    <Sticky isSticky/>
      {children}
    </Wrapper>
  )
}

export default BooksContainer;