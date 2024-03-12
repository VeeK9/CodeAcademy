import { createContext, useState, useEffect } from "react";

const PlantsContext = createContext();

const PlantsProvider = ({children}) => {

  const [plants, setPlants] = useState([]);

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
    fetch(`http://localhost:8080/plants`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPlant)
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/plants`)
      .then(res => res.json())
      .then(data => setPlants(data))
  }, []);

  return (
    <PlantsContext.Provider
      value={{
        plants,
        addPlant
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
 
export { PlantsProvider };
export default PlantsContext;