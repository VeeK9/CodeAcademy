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

  const editPlant = editedPlant => {
    fetch(`http://localhost:8080/plants/${editedPlant.id}`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(editedPlant)
    });
    setPlants(plants.map(plant => {
      if(plant.id === editedPlant.id){
        return editedPlant;
      } else {
        return plant;
      }
    }))
  }

  const deletePlant = id => {
    fetch(`http://localhost:8080/plants/${id}`, {
      method: "DELETE"
    });
    setPlants(plants.filter(plant => plant.id !== id))
  }

  useEffect(() => {
    fetch(`http://localhost:8080/plants`)
      .then(res => res.json())
      .then(data => setPlants(data))
  }, []);

  return (
    <PlantsContext.Provider
      value={{
        plants,
        addPlant,
        editPlant,
        deletePlant
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
 
export { PlantsProvider };
export default PlantsContext;