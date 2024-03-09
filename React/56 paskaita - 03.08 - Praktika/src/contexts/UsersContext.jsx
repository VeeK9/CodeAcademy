import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import PageLoaderContext from "./PageLoaderContext";

const UsersContext = createContext()

const UsersProvider = ({ children }) => {

  const { pageLoader } = useContext(PageLoaderContext)

  const [users, setUsers] = useState([])

  const [currentUser, setCurrentUser] = useState('')

  const [userPlants, setUserPlants] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  useEffect(() => {
    
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
 
export { UsersProvider };
export default UsersContext;