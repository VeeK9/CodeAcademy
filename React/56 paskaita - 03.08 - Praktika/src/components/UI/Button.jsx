import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  &:active {
    color: white;
  }
`

const Button = ({text, func, info}) => {
  return (
    <StyledButton
      onClick={() => func(info)}  
    >
      {text}
    </StyledButton>
  );
}
 
export default Button;