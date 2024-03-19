import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext();

const UsersActionTypes = {
  getAll: 'fetches all data on initial load',
  addNew: 'adds new user data',
  changeData: 'change one thing of user data'
}

const reducer = (state, action) => {
  switch(action.type){
    case UsersActionTypes.getAll:
      return action.data;
    case UsersActionTypes.addNew:
      fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      })
      return [...state, action.data];
    case UsersActionTypes.changeData:
      fetch(`http://localhost:8080/users/${action.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      })
      return state.map(user => {
        if(user.id === action.id){
          return {
            ...user,
            ...action.data
          } 
        } else {
          return user;
        }
      })
    default:
      console.error(`No such action: ${action.type}`);
      return state;
  }
}

const UsersProvider = ({children}) => {

  const [loggedInUser, setLoggedInUser] = useState(false);

  const [users, setUsers] = useReducer(reducer, []);

  useEffect(()=>{
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers({
        type: UsersActionTypes.getAll,
        data: data
      }))
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
 
export { UsersProvider, UsersActionTypes }
export default UsersContext;