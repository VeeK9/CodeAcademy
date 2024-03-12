import { useContext } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import LogInContext from "../../contexts/LogInContext";
import {v4 as uuid} from "uuid"
import PageLoaderContext from "../../contexts/PageLoaderContext";

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

  const { registerNewUser, users, setCurrentUser } = useContext(UsersContext)
  const { logInFormInputs, onChangeFunc, resetLogInFormInputs } = useContext(LogInContext)
  const { setPageLoader } = useContext(PageLoaderContext)

  const registerNewUserSubmit = e => {
    e.preventDefault();
    if(users.some(user => user.userName === logInFormInputs.userName)){
      alert('This user name is already taken.')
    } else if(logInFormInputs.password === logInFormInputs.confirmPassword){
      const newUser = {
        id: uuid(),
        userName: logInFormInputs.userName,
        firstName: logInFormInputs.firstName,
        email: logInFormInputs.email,
        avatar: logInFormInputs.avatar,
        password: logInFormInputs.password,
        type: "user",
        water: "",
        plantIDs: []
      }
      console.log(newUser);
      registerNewUser(newUser);
      setCurrentUser(newUser);
      setPageLoader('allPlants');
      resetLogInFormInputs();
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <StyledDiv>
    <form
      onSubmit={registerNewUserSubmit}
    >
      <label htmlFor="userName">Your desired user name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="e.g. ultra3000user"
        value={logInFormInputs.userName}
        onChange={onChangeFunc}
      />
      <label htmlFor="firstName">Your first name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="e.g. William"
        value={logInFormInputs.firstName}
        onChange={onChangeFunc}
      />
      <label htmlFor="email">Your email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. william.attenborough@idk.com"
        value={logInFormInputs.email}
        onChange={onChangeFunc}
      />
      <label htmlFor="avatar">Your avatar:</label>
      <input
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Please paste your avatars URL here"
        value={logInFormInputs.avatar}
        onChange={onChangeFunc}
      />
      <label htmlFor="password">Create your password:</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="********"
        value={logInFormInputs.password}
        onChange={onChangeFunc}
      />
      <label htmlFor="confirmPassword">Confirm your password:</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="********"
        value={logInFormInputs.confirmPassword}
        onChange={onChangeFunc}
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