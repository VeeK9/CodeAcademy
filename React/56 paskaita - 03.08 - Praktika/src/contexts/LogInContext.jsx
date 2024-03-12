import { createContext, useState } from "react";

const LogInContext = createContext()

const LogInProvider = ({ children }) => {

  const [logInFormInputs, setLogInFormInputs] = useState({
    id: "",
    userName: "",
    firstName: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
    type: "user",
    plantIDs: []
  })

  const onChangeFunc = e => {
    setLogInFormInputs({
      ...logInFormInputs,
      [e.target.name]: e.target.value
    })
  }

  const resetLogInFormInputs = () => {
    setLogInFormInputs({
      id: "",
      userName: "",
      firstName: "",
      email: "",
      avatar: "",
      password: "",
      confirmPassword: "",
      type: "user",
      plantIDs: []
    })
  }

  return (
    <LogInContext.Provider
      value={{
        logInFormInputs,
        onChangeFunc,
        resetLogInFormInputs
      }}
    >
      {children}
    </LogInContext.Provider>
  );
}
 
export { LogInProvider };
export default LogInContext;