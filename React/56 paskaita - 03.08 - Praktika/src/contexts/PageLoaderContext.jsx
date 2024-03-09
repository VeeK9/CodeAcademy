import { useState } from "react";
import { createContext } from "react";

const PageLoaderContext = createContext()

const PageLoaderProvider = ({ children }) => {

  const [pageLoader, setPageLoader] = useState('allPlants')

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