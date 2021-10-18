import styled, { css } from 'styled-components';

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.welcome.palette.heroBg};
  padding: 40px 60px;
`;

export const SpecialText = styled.h2`
  font-size: 74px;
  font-family: 'Abril Fatface', cursive;
  width: 50%;
  color: ${props => props.theme.welcome.palette.heading};
`

export const Paragraph = styled.p`
  font-size: 18px;
  color: ${props => props.theme.welcome.palette.description};
  padding-top: 20px;
  width: 60%;
  font-weight: 200;
  line-height: 24px;
`

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.welcome.palette.buttonBg};
  color: ${props => props.theme.welcome.palette.buttonText};
  border: 2px solid ${props => props.theme.welcome.palette.buttonBorder};
  padding: 10px 15px;
  border-radius: 3px;
  ${props => props.secondary && css`
    background-color: ${props => props.theme.welcome.palette.buttonBgSecondary};
    border: 2px solid ${props => props.theme.welcome.palette.buttonBorderSecondary};
    color: ${props => props.theme.welcome.palette.buttonTextSecondary};
  `}
`