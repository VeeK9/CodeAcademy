import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  height: fit-content;
  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    > input {
      margin-bottom: 15px;
      width: 70%;
      &:last-child {
        margin-top: 50px;
        width: 30%;
      }
    }
  }
`

const SignUpForm = () => {
  return (
    <StyledDiv>
    <form>
      <label htmlFor="userName">Your desired user name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="e.g. ultra3000user"
      />
      <label htmlFor="firstName">Your first name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="e.g. William"
      />
      <label htmlFor="email">Your email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. william.attenborough@idk.com"
      />
      <label htmlFor="avatar">Your avatar:</label>
      <input
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Please paste your avatars URL here"
      />
      <label htmlFor="password">Create your password:</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="********"
      />
      <label htmlFor="confirmPassword">Password confirmation:</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="********"
      />
      <input
        type="submit"
        value="Sign up"
      />
    </form>
    </StyledDiv>
  );
}
 
export default SignUpForm;