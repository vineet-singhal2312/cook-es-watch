import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [isLoader, setIsLoader] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        isLoader,
        setIsLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
