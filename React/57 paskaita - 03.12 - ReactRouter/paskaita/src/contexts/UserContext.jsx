import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

  const [loggedInUser, setLoggedInUser] = useState(false)
  const login = (user) => {
    setLoggedInUser(user);
  }
  const logout = () => {
    setLoggedInUser(false);
  }
  
  const [users, setUsers] = useState([])
  const addNewUser = newUser => {
    setUsers([...users, newUser]);
    fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser)
    });
  }

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
        loggedInUser,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
 
export { UserProvider };
export default UserContext;