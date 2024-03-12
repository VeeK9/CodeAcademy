import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import PageLoaderContext from "./PageLoaderContext";
import PlantsContext from "./PlantsContext";

const UsersContext = createContext()

const UsersProvider = ({ children }) => {

  const { plants } = useContext(PlantsContext)

  const [users, setUsers] = useState([])

  const [currentUser, setCurrentUser] = useState('')

  const [userPlants, setUserPlants] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  useEffect(() => {
     const newUserPlants = plants.filter(plant => currentUser.plantIDs.find(aaa => aaa == plant.id))
     setUserPlants(newUserPlants)
  }, [currentUser]);

  const waterUserPlants = (date) => {
    setCurrentUser({...currentUser, water:date})
    fetch(`http://localhost:8080/users/${currentUser.id}`, {
      method:"PATCH",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({...currentUser, water:date})
    })
    console.log(plants)
    console.log(userPlants)
    console.log('hello')
  }

  const addUserPlant = (id) => {
    setCurrentUser({...currentUser, plantIDs: [...currentUser.plantIDs, id]})
    fetch(`http://localhost:8080/users/${currentUser.id}`, {
      method:"PATCH",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({...currentUser, plantIDs: [...currentUser.plantIDs, id]})
    });
  }
  
  const removeUserPlant = (id) => {
    const newPlantIDs = currentUser.plantIDs.filter(plant => plant != id)
    setCurrentUser({...currentUser, plantIDs: newPlantIDs})
    fetch(`http://localhost:8080/users/${currentUser.id}`, {
      method:"PATCH",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({...currentUser, plantIDs: newPlantIDs})
    });
  }

  const registerNewUser = (newUser) => {
    fetch(`http://localhost:8080/users`, {
      method:"POST",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser)
    });
    setUsers([...users, newUser])
  }


  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        waterUserPlants,
        registerNewUser,
        addUserPlant,
        removeUserPlant,
        userPlants
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
 
export { UsersProvider };
export default UsersContext;