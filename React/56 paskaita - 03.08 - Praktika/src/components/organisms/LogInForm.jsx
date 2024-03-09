import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const LogInForm = () => {
  return (
    <StyledForm>
      <input type="text" />
    </StyledForm>
  );
}
 
export default LogInForm;