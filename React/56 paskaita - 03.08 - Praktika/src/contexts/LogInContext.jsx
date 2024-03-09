import { useContext } from "react";
import { createContext } from "react";

const LogInContext = createContext()

const LogInProvider = ({ children }) => {
  return (
    <LogInContext.Provider
      value={{}}
    >
      {children}
    </LogInContext.Provider>
  );
}
 
export { LogInProvider };
export default LogInContext;