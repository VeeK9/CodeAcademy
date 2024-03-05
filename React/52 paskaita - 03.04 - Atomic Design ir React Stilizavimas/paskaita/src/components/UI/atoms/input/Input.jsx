import styled from "styled-components";

const StyledInput = styled.input`
  background-color: orange;
  color: black;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
  width: 100px;
  display: block;
  margin: 10px auto;
`;

const Input = ({type, name, id, placeholder, valueState, onChangeF}) => {

  // console.log(valueState);

  return (
    <StyledInput
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={valueState[name]}
      onChange={e => onChangeF({
        ...valueState,
        [name]: e.target.value
      })}
    />
  );
}
 
export default Input;