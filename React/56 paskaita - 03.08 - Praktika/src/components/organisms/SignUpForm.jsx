import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

const SignUpForm = () => {
  return (
    <StyledForm>
      <input type="text" />
    </StyledForm>
  );
}
 
export default SignUpForm;