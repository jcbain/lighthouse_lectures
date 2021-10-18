import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  height: 350px;
  position: relative;
  background: ${props => props.theme.card.palette.cardBg};
  border: 2px solid ${props => props.theme.card.palette.cardBorder};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`
Wrapper.defaultProps = {
  theme: { card: { palette: { 
    cardBorder: '#252525'
  }}}
}

export const BookImg = styled.img`
  position: absolute;
  max-width: 128px;
  max-height: 150px;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
`

export const HalfDivs = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${props => props.dotted && css`
    background-image: radial-gradient(${props => props.theme.card.palette.dots} 20%, transparent 20%), radial-gradient(${props => props.theme.card.palette.dotsBg} 20%, transparent 20%);
    background-size: 5px 5px;
  `}
`;

HalfDivs.defaultProps = {
  theme: { card: { palette: { 
    cardBg: '#ffffff',
    dots: '#ca8aff',
    dotsBg: '#ffffff'
  }}}
}

export const Title = styled.h2`
  padding: 5px 10px;
  color: ${props => props.theme.card.palette.title};
  font-size: 24px;
`

Title.defaultProps = {
  theme: { card: { palette: { 
    title: '#252525'
  }}}
}

export const GeneralText = styled.p`
  padding: 5px 10px;
  color: ${props => props.theme.card.palette.description};
  font-size: 16px;
  font-weight: 200;
`

GeneralText.defaultProps = {
  theme: { card: { palette: { 
    description: '#252525'
  }}}
}
