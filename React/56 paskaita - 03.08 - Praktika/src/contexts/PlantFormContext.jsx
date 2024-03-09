import { useContext } from "react";
import { createContext } from "react";

const PlantFormContext = createContext()

const PlantFormProvider = ({ children }) => {
  return (
    <PlantFormContext.Provider
      value={{}}
    >
      {children}
    </PlantFormContext.Provider>
  );
}
 
export { PlantFormProvider };
export default PlantFormContext;