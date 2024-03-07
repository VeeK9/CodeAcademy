import { createContext } from "react";
import { useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {

  const [formInputs, setFormInputs] = useState({
    id: "",
    pavadinimas: "",
    pazymetas: false,
    nuotrauka: "",
    kiekisNuo: "",
    kiekisIki: "",
    amziusNuo: "",
    aprasymas: ""
  })

  const onChangeF = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  const resetFormInputs = () => {
    setFormInputs({
      id: "",
      pavadinimas: "",
      pazymetas: false,
      nuotrauka: "",
      kiekisNuo: "",
      kiekisIki: "",
      amziusNuo: "",
      aprasymas: ""
    })
  }

  const setFormInputsToCardInfo = game => {
    setFormInputs({
      id: game.id,
      pavadinimas: game.pavadinimas,
      pazymetas: game.pazymetas,
      nuotrauka: game.nuotrauka,
      kiekisNuo: game.zaidejai.kiekisNuo,
      kiekisIki: game.zaidejai.kiekisIki,
      amziusNuo: game.zaidejai.amziusNuo,
      aprasymas: game.aprasymas
    })

  }

  return (
    <FormContext.Provider
      value={{
        formInputs,
        onChangeF,
        resetFormInputs,
        setFormInputsToCardInfo
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export { FormProvider };
export default FormContext;