import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import PageLoaderContext from "./PageLoaderContext";

const PlantsContext = createContext()

const PlantsProvider = ({ children }) => {

  const { pageLoader } = useContext(PageLoaderContext)

  const [plants, setPlants] = useState([])
  const [userPlants, setUserPlants] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/plants`)
      .then(res => res.json())
      .then(data => setPlants(data))
  }, []);

  useEffect(() => {
    
  }, []);

  return (
    <PlantsContext.Provider
      value={{
        plants
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
}
 
export { PlantsProvider };
export default PlantsContext;