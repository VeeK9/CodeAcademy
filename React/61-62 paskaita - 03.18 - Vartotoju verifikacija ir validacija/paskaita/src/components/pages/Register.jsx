import { useContext, useState } from "react";
import styled from "styled-components";
import UsersContext, { UsersActionTypes } from "../../contexts/UsersContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import bcrypt from "bcryptjs";

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

const Register = () => {

  const [sameNameError, setSameNameError] = useState(false);
  const {users, setUsers, setLoggedInUser} = useContext(UsersContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      username: "",
      password: "",
      passwordConfirm: ""
    },
    onSubmit: (values) => {
      if(users.find(user => user.username === values.username)){
        setSameNameError(true)
      } else {
        const newUser = {
          username: values.username,
          passwordNoHash: values.password,
          password: bcrypt.hashSync(values.password, 8),
          id: uuid(),
          role: "user"
        }
        setUsers({
          type: UsersActionTypes.addNew,
          data: newUser
        })
        setLoggedInUser(newUser);
        navigate('/')
      }
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 symbols')
        .max(25, 'Username must be less than 25 symbols')
        .required('This field must be filled')
        .trim(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Password must be between 8 and 25 symbols. It must include a lowercase and uppercase letters, a number and a special symbol.'
        )
        .required('This field is required')
        .trim(),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords don't match.")
        .required('This field is required'),
    })
  });

  return (
    <StyledSection>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username" id="username"
            placeholder="Enter your username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.username && formik.errors.username && <span>{formik.errors.username}</span>}
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password" id="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
        <div>
          <label htmlFor="passwordConfirm">Confirm password:</label>
          <input
            type="password"
            name="passwordConfirm" id="passwordConfirm"
            placeholder="Confirm your password"
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && <span>{formik.errors.passwordConfirm}</span>}
        <input type="submit"  value="Register"/>
      </form>
        {
          sameNameError &&
          <p>Username is invalid</p>
        }
    </StyledSection>
  );
}
 
export default Register;