import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {v4 as uuid} from "uuid";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";

const StyledArticle = styled.article`
> form {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;
    text-align: end;
    > label {
      width: 30%;
    }
    > input, textarea {
      width: 80%;
      padding: 5px 10px;
      border: 1px solid lightgray;
      border-radius: 10px;
    }
    > textarea {
      height: 5lh;
      resize: none;
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
span {
  color: red;
  align-self: center;
}
`

const Register = () => {

  const {registerUser, setLoggedInUser} = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      username: "",
      password:"",
      passwordConfirm:"",
      name:"",
      email:"",
      avatar:"",
      description:""
    },
    onSubmit: values => {
      const newUser = {
        id: uuid(),
        type:"user",
        ...values,
        avatar: values.avatar ? values.avatar : "https://www.new.ox.ac.uk/sites/default/files/styles/large_navigation/public/default_images/Fellows%20placeholder_0.jpg.webp?itok=Ldi7pvRW",
        description: values.description ? values.description : "Author did not provide any additional info about Himself/Herself"
      }
      registerUser(newUser);
      setLoggedInUser(newUser);
      navigate('/')
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 symbols.')
        .max(25, 'Username must be less than 25 symbols')
        .required('Username is required')
        .trim(),
      email: Yup.string()
        .email('Enter a valid email!')
        .required('Email is required')
        .trim(),
      name: Yup.string().trim().required('Please enter your real name'),
      avatar: Yup.string()
        .url('Must be a valid URL')
        .default('https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png')
        .trim(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Password must be between 8 and 25 symbols. It must include a lowercase and uppercase letters, a number and a special symbol.'
        )
        .required('Required')
        .trim(),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords don't match.")
        .required('Required'),
      description: Yup.string()
    })
  })

  return (
    <StyledArticle>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            name="username" id="username"
            placeholder="Create your username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
          {formik.touched.username && formik.errors.username && <span>{formik.errors.username}</span>}
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email" id="email"
            placeholder="email@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            name="name" id="name"
            placeholder="Thomas Johnson"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
          {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <input 
            type="url"
            name="avatar" id="avatar"
            placeholder="Paste the URL of your profile picture"
            value={formik.values.avatar}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.avatar && formik.errors.avatar && <span>{formik.errors.avatar}</span>}
        <div>
          <label htmlFor="description">Describe yourself as a writer:</label>
          <textarea 
            type="url"
            name="description" id="description"
            placeholder="e.g. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium, expedita, eos cupiditate cumque nam dolor minima nesciunt quis, neque iusto? Est minima itaque facilis!"
            value={formik.values.description}
            onChange={formik.handleChange}
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
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input 
            type="password"
            name="passwordConfirm" id="passwordConfirm"
            placeholder="********"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm && <span>{formik.errors.passwordConfirm}</span>}
        <input type="submit" value="Register"/>
      </form>
    </StyledArticle>
  );
}
 
export default Register;