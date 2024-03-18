import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {

  const [users, setUsers] = useState();
  const [loggedInUser, setLoggedInUser] = useState('');

  const registerUser = newUser => {
    setUsers([...users, newUser]);
    fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser)
    });
  };

  useEffect(()=>{
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  },[]);

  return (
    <UserContext.Provider
      value={{
        users,
        registerUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
 
export {UserContextProvider};
export default UserContext;