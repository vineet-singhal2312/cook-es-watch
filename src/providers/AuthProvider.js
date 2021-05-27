import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    isUserLoggedIn,
    token: savedToken,
    name: savedUserName,
  } = JSON.parse(localStorage?.getItem("login")) || {
    isUserLoggedIn: false,
    token: null,
    name: null,
  };

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [userName, setUserName] = useState(savedUserName);

  console.log(isUserLogin, token, userName);

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        token,
        // loginUserWithCredentials,
        // logout,
        setToken,
        setLogin,
        userName,
        setUserName
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
