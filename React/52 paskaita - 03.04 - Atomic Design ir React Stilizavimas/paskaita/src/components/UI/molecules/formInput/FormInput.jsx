import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import styled from "styled-components";

const StyledFormInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  > input{
    width: 300px;
    margin: 0;
  }
`;

const FormInput = ({nameId, labelText, inputType, placeholderText, value, onChangeF}) => {
  return (
    <StyledFormInput>
      <Label
        text={labelText}
        inputName={nameId}
      />
      <Input
        type={inputType}
        name={nameId}
        id={nameId}
        placeholder={placeholderText}
        valueState={value}
        onChangeF={onChangeF}
      />
    </StyledFormInput>
  );
}
 
export default FormInput;