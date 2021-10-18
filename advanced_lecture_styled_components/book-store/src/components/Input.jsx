import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 60px;
`
export const StyledInput = styled.input`
  padding: 10px 15px;
  border: solid 2px ${props => props.theme.input.palette.inputBorder};
  background: inherit;
  border-radius: 3px;
  color: ${props => props.theme.input.palette.inputText};
  position: absolute;
  top: 8px;
  z-index: 1;
`;

export const Label = styled.label`
  color: ${props => props.theme.input.palette.labelText};
  position: absolute;
  background: ${props => props.theme.input.palette.labelBg};
  font-size: 12px;
  left: 5px;
  top: 2px;
  z-index: 2;
  padding: 2px;
  width: max-content;
`
  
const Input = (props) => {
  const {label, className, ...rest} = props;
  return (
    <Wrapper className={className}>
      <Label>
        {label}
      </Label>
      <StyledInput {...rest} />
    </Wrapper>
  )
}

export default Input;

