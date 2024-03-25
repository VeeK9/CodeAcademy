import { createContext, useState } from "react";

const UsersContext = createContext();

const UsersProvider = ({children}) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <UsersContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
 
export {UsersProvider};
export default UsersContext;