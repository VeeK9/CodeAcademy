import { createContext } from "react";
import { useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {

  const [formInputs, setFormInputs] = useState({
    pavadinimas: "",
    nuotrauka: "",
    kiekisNuo: "",
    kiekisIki: "",
    amziusNuo: "",
    aprasymas: ""
  })

  return (
    <FormContext.Provider
      value={{
        formInputs,
        setFormInputs
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export { FormProvider };
export default FormContext;