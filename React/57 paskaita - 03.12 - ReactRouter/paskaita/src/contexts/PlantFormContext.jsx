import { createContext, useState } from "react";

const PlantFormContext = createContext();

const PlantFormProvider = ({children}) => {

  const [plantFormInputs, setPlantFormInputs] = useState({
    id: "",
    name: "",
    photo: "",
    description: ""
  });

  const onChangeFunc = e => {
    setPlantFormInputs({
      ...plantFormInputs,
      [e.target.name]: e.target.value
    })
  }

  const resetPlantFormInputs = () => {
    setPlantFormInputs({
      id: "",
      name: "",
      photo: "",
      description: ""
    })
  }

  return (
    <PlantFormContext.Provider
      value={{
        plantFormInputs,
        onChangeFunc,
        resetPlantFormInputs
      }}
    >
      {children}
    </PlantFormContext.Provider>
  );
};
 
export { PlantFormProvider };
export default PlantFormContext;