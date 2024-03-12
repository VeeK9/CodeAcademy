import { createContext, useState } from "react";

const UserFormContext = createContext();

const UserFormProvider = ({children}) => {

  const [formInputs, setFormInputs] = useState({
    id: "",
    username: "",
    name: "",
    avatar: "",
    password: "",
    passwordRepeat: "",
    email: ""
  });

  const onChangeFunc = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    })
  }

  const resetFormInputs = () => {
    setFormInputs({
      id: "",
      username: "",
      name: "",
      avatar: "",
      password: "",
      passwordRepeat: "",
      email: ""
    })
  }

  return (
    <UserFormContext.Provider
      value={{
        formInputs,
        onChangeFunc,
        resetFormInputs
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
};
 
export { UserFormProvider };
export default UserFormContext;