import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > input {
      width: 30%;
      align-self: center;
      padding: 5px 10px;
      background-color: white;
      cursor: pointer;
    }
    > div {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      > div {
        display: flex;
        justify-content: space-evenly;
      }
      > span {
        grid-column-start: span 2;
        text-align: center;
        color: red;
      }
    }
  }
`

const Register = () => {

  const formik = useFormik({
    initialValues:{
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarURL: "",
      age: "",
      gender: "",
      language: ""
    },
    onSubmit: values => {
      console.log(values);
      const newUser= {
        ...values,
        avatarURL: values.avatarURL ? values.avatarURL : 'https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
      }
      console.log(newUser)
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
      avatarURL: Yup.string()
        .url('Must be a valid URL')
        .default('https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png')
        .trim(),
      age: Yup.number()
        .integer('Must be a number without commas')
        .min(18, 'Must be at least 18yo')
        .required('Your age is required'),
      gender: Yup.string()
        .required('Must choose one'),
      language: Yup.string()
        .required('Must select a language'),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Password must be at least least 8 symbols but not exceed 25 symbols'
        )
        .required('Required')
        .trim(),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords don't match.")
        .required('Required')
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
            placeholder="Create your username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username && <span>{formik.errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email" id="email"
            placeholder="Enter You email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
        </div>
        <div>
          <label htmlFor="avatarURL">Avatar:</label>
          <input 
            type="url"
            name="avatarURL" id="avatarURL"
            placeholder="Paste the URL of your profile picture"
            value={formik.values.avatarURL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.avatarURL && formik.errors.avatarURL && <span>{formik.errors.avatarURL}</span>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
            type="number"
            name="age" id="age"
            placeholder="Enter your age"
            step={1}
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age && <span>{formik.errors.age}</span>}
        </div>
        <div>
          <label htmlFor="">Select your gender:</label>
          <div>
            <label htmlFor="woman">Woman</label>
            <input 
              type="radio"
              name="gender" id="woman"
              value="woman"
              onChange={formik.handleChange}
            />
            <label htmlFor="man">Man</label>
            <input 
              type="radio"
              name="gender" id="man"
              value="man"
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.gender && formik.errors.gender && <span>{formik.errors.gender}</span>}
        </div>
        <div>
          <label htmlFor="language">Select your native language:</label>
          <select name="language"
            id="language"
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled></option>
            <option value="lithuanian">Lithuanian</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="polish">Polish</option>
          </select>
          {formik.touched.language && formik.errors.language && <span>{formik.errors.language}</span>}
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
          {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
        </div>
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
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm && <span>{formik.errors.passwordConfirm}</span>}
        </div>
          <input type="submit" value="Register"/>
      </form>
    </StyledSection>
  );
}
 
export default Register;