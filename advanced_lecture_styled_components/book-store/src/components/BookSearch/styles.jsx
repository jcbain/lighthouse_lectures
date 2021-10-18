import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 0px 60px;
  color: ${props => props.theme.bookSearch.palette.text};
  background: ${props => props.theme.bookSearch.palette.bg};
`

export const Heading = styled.h2`
  font-size: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 80%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${props => props.theme.bookSearch.palette.buttonBorder};
  color: ${props => props.theme.bookSearch.palette.buttonText};
  padding: 8px 15px;
  border-radius: 3px;
`