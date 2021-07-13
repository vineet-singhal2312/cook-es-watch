import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [isLoader, setIsLoader] = useState(true);
  const [isAddLoader, setIsAddLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        isLoader,
        setIsLoader,
        isAddLoader,
        setIsAddLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
