import { useState } from "react";
import { createContext } from "react";

const PageLoaderContext = createContext()

const PageLoaderProvider = ({ children }) => {

  const [pageLoader, setPageLoader] = useState({
    "name":"user",
    "type":"user",
    "plantIDs": ["0", "2"]
  })



  return (
    <PageLoaderContext.Provider
      value={{
        pageLoader,
        setPageLoader
      }}
    >
      {children}
    </PageLoaderContext.Provider>
  );
}
 
export { PageLoaderProvider };
export default PageLoaderContext;