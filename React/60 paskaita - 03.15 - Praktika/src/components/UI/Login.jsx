import styled from "styled-components";
import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";

const StyledArticle = styled.article`
> form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
    > input {
      width: 70%;
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

  const {users, setLoggedInUser} = useContext(UserContext);
  const navigate = useNavigate();

  const formik  = useFormik({
    initialValues:{
      username: "",
      password: ""
    },
    onSubmit: values => {
      const loggingUser = users.find(user => 
        user.username === values.username && user.password === values.password
      );
      loggingUser && setLoggedInUser(loggingUser);
      loggingUser && navigate('/') 
    }
  })

  return (
    <StyledArticle>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            name="username" id="username"
            placeholder="Enter your username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            name="password" id="password"
            placeholder="********"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <input type="submit" value="Login"/>
      </form>
    </StyledArticle>
  );
}
 
export default Login;