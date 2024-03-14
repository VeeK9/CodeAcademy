import { useFormik } from "formik";
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    width: 30vw;
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
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      > div {
        display: flex;
        justify-content: space-evenly;
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
    }
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
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email" id="email"
            placeholder="Enter You email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="avatarURL">Avatar:</label>
          <input 
            type="url"
            name="avatarURL" id="avatarURL"
            placeholder="Paste the URL of your profile picture"
            value={formik.values.avatarURL}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
            type="number"
            name="age" id="age"
            placeholder="Enter your age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
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
        </div>
        <div>
          <label htmlFor="language">Select your native language:</label>
          <select name="language"
            id="language"
            value={formik.values.language}
            onChange={formik.handleChange}
          >
            <option value="" disabled></option>
            <option value="lithuanian">Lithuanian</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="polish">Polish</option>
          </select>
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
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input 
            type="password"
            name="passwordConfirm" id="passwordConfirm"
            placeholder="********"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
          />
        </div>
          <input type="submit" value="Register"/>
      </form>
    </StyledSection>
  );
}
 
export default Register;