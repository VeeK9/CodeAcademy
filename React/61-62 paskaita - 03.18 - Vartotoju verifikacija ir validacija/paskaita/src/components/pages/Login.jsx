import { useContext, useState } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 3rem;
  }
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
      }
    }
    > input {
      margin-top: 20px;
      align-self: center;
      padding: 5px 10px;
      border: 1px solid black;
      cursor: pointer;
      background-color: white;
      &:hover {
        background-color: #b8deb8;
      }
    }
  }
  p, span {
    text-align: center;
    color: red;
  }
`

const Login = () => {

  const {users, setLoggedInUser} = useContext(UsersContext);
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      username: "",
      password: ""
    },
    onSubmit:(values) => {
      const loggingUser = users.find(user => user.username === values.username && user.password === values.password);

      if(loggingUser){
        setLoggedInUser(loggingUser);
        navigate('/');
      } else {
        setFailedLogin(true)
      }
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required('This field is required'),
      password: Yup.string().trim().required('This field is required')
    })
  })

  return (
    <StyledSection>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.username && formik.errors.username && <span>{formik.errors.username}</span>}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
        <input type="submit"  value="Log In"/>
      </form>
        {
          failedLogin &&
          <p>Wrong username and/or password</p>
        }
    </StyledSection>
  );
}
 
export default Login;