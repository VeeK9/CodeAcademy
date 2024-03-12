import { useContext } from "react";
import styled from "styled-components";
import LogInContext from "../../contexts/LogInContext";
import PageLoaderContext from "../../contexts/PageLoaderContext"
import UsersContext from "../../contexts/UsersContext";
import PlantsContext from "../../contexts/PlantsContext";

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

  const { plants } = useContext(PlantsContext)
  const { logInFormInputs, onChangeFunc, resetLogInFormInputs } = useContext(LogInContext);
  const { setPageLoader } = useContext(PageLoaderContext);
  const { users, setCurrentUser, currentUser, setUserPlants } = useContext(UsersContext);

  const logInFormSubmit = e => {
    e.preventDefault();

    const userLogin = {
      userName: logInFormInputs.userName,
      password: logInFormInputs.password
    }

    console.log(userLogin)

    if(users.find(user => userLogin.userName === user.userName)) {
      if(users.find(user => user.userName === userLogin.userName && user.password === userLogin.password)) {
        setCurrentUser((users.find(user => user.userName === userLogin.userName && user.password === userLogin.password)))

        setPageLoader('allPlants')
      } else {
        alert('Wrong password')
      }
    } else {
      alert('User Not Found')
    }

    resetLogInFormInputs();
  }

  return (
    <StyledDiv>
      <form
        onSubmit={logInFormSubmit}
      >
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="e.g. ultra3000user"
          value={logInFormInputs.userName}
          onChange={onChangeFunc}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={logInFormInputs.password}
          onChange={onChangeFunc}
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