import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const NewPlantForm = () => {
  return (
    <StyledForm>
      <input type="text" />
    </StyledForm>
  );
}
 
export default NewPlantForm;