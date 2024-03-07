import { createContext } from "react";
import { useState } from "react";

const PageLoaderContext = createContext();

const PageLoaderProvider = ({ children }) => {

  const [pageLoader, setPageLoader] = useState("korteles");

  return (
    <PageLoaderContext.Provider
      value={{
        pageLoader,
        setPageLoader
      }}
    >
      {children}
    </PageLoaderContext.Provider>
  )
}

export { PageLoaderProvider };
export default PageLoaderContext;