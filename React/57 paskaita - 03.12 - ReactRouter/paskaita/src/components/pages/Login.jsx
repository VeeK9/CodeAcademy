import { useContext, useState } from "react";
import UserFormContext from "../../contexts/UserFormContext";
import UserContext from "../../contexts/UserContext";
import {useNavigate } from "react-router-dom";
import styled from "styled-components"

const StyledSection = styled.section`
  > p {
    text-align: center;
  }
  > form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > input {
        width: 60%;
        padding: 5px 10px;
        border: 1px solid lightgray;
        border-radius: 10px;
      }
    }
    > input {
      margin-top: 20px;
      align-self: center;
      padding: 5px 10px;
      border: 1px solid lightgray;
      border-radius: 10px;
      cursor: pointer;
      background-color: white;
      &:hover {
        background-color: #b8deb8;
      }
    }
  }
`

const Login = () => {

  const [ failedToLogin, setFailedToLogin ] = useState(false)
  const { formInputs, onChangeFunc, resetFormInputs } = useContext(UserFormContext);
  const { users, login } = useContext(UserContext);
  const navigate = useNavigate();

  const loginFormSubmit = e => {
    e.preventDefault();
    
    const user = users.find(user => user.username === formInputs.username);
    if(!user){
      setFailedToLogin(true)
      return;
    } else if(user.password === formInputs.password) {
      login(user);
      resetFormInputs();
      navigate('/');
      return;
    } else {
      setFailedToLogin(true)
      return;
    }
  };

  return (
    <StyledSection>
      <h1>Login</h1>
      <form onSubmit={loginFormSubmit}>
        <div>
          <label htmlFor="username">Your username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="e.g. superUser-3000"
            value={formInputs.username}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="password">Your password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={formInputs.password}
            onChange={onChangeFunc}
          />
        </div>
        <input
          type="submit"
          value="Login"
        />
      </form>
      {
        failedToLogin &&
        <p>Incorrect username or password.</p>
      }
    </StyledSection>
  );
}
 
export default Login;