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
      margin-bottom: 5px;
      width: 70%;
      &:last-child {
        margin-top: 10px;
        margin-bottom: 15px;
        width: 30%;
      }
    }
  }
`

const LogInForm = () => {
  return (
    <StyledDiv>
      <form>
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="e.g. ultra3000user"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
        <input
          type="submit"
          value="Log In"
        />
      </form>
    </StyledDiv>
  );
}
 
export default LogInForm;