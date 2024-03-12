import { useContext, useState } from "react";
import UserFormContext from "../../contexts/UserFormContext";
import UserContext from "../../contexts/UserContext";
import {v4 as uuid} from "uuid";
import {useNavigate } from "react-router-dom";
import styled from "styled-components"

const StyledSection = styled.section`
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

const Register = () => {

  const [ diffPassError, setdDiffPassError ] = useState(false);
  const { formInputs, onChangeFunc, resetFormInputs } = useContext(UserFormContext);
  const { addNewUser, login } = useContext(UserContext);
  const navigate = useNavigate();

  const registerFormSubmit = e => {
    e.preventDefault();

    if(formInputs.password !== formInputs.passwordRepeat){
      setdDiffPassError(true);
      return;
    }

    const newUser = {
      id: uuid(),
      username: formInputs.username,
      name: formInputs.name,
      avatar: formInputs.avatar,
      password: formInputs.password,
      email: formInputs.email
    }

    addNewUser(newUser);
    login(newUser);
    resetFormInputs();
    navigate('/');
  }

  return (
    <StyledSection>
      <h1>Register</h1>
      <form onSubmit={registerFormSubmit}>
        <div>
          <label htmlFor="username">Create your username</label>
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
          <label htmlFor="email">Enter your email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. teta-sveta@one.lt"
            value={formInputs.email}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. William"
            value={formInputs.name}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="photo">Paste the URL of your avatar:</label>
          <input
            type="url"
            name="photo"
            id="photo"
            value={formInputs.name}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="password">Create a secure password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            value={formInputs.password}
            onChange={onChangeFunc}
          />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Confirm your password:</label>
          <input
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            placeholder="*********"
            value={formInputs.passwordRepeat}
            onChange={onChangeFunc}
          />
        </div>
        <input
          type="submit"
          value="Register"
        />
      </form>
      {
        diffPassError && <p>Passwords don't match</p>
      }
    </StyledSection>
  );
}
 
export default Register;