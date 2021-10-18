import styled , { css } from 'styled-components';

export const TopBar = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: fixed;
  top: 0;
  height: 100px;
  z-index: 100;
  ${props => props.isSticky && css`
    position: sticky;
    background-color: inherit;
    top: 0;
    z-index: 99;
  `}
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
`
export const MainText = styled.h1`
  padding: 20px 20px 10px 20px;
  color: ${props => props.theme.header.palette.title};
  font-weight: 500;
  ${TopBar} > & {
    flex-basis: 50%;
    font-size: 28px;
  }
`

export const ThemeButton = styled.button`
  background: none;
  color: ${props => props.theme.header.palette.buttonText};
  border: none;
`