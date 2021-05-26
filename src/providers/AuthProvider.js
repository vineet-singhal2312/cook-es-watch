import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
// import { fakeAuthApi } from "./fakeAuthApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isUserLoggedIn, token: savedToken } = JSON.parse(
    localStorage?.getItem("login")
  ) || { isUserLoggedIn: false, token: null };

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);

  console.log(isUserLogin, token);

  //   async function loginUserWithCredentials(username, password) {
  //     try {
  //       const response = await fakeAuthApi(username, password);
  //       if (response.success) {
  //         loginUser(response);
  //       }
  //     } catch (error) {
  //       console.log("Sahi username password nahi pata kya?", error);
  //     }

  //     function loginUser({ token }) {
  //       setToken(token);
  //       setLogin(true);
  //       localStorage?.setItem(
  //         "login",
  //         JSON.stringify({ isUserLoggedIn: true, token })
  //       );
  //     }
  //   }

  //   const LogInHandler = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.post("http://localhost:8000/login", {
  //         email,
  //         password,
  //       });

  //       setEmail("");
  //       setPassword("");
  //       console.log(res);

  //       function loginUser(res) {
  //         setToken(token);
  //         setLogin(true);
  //         localStorage?.setItem(
  //           "login",
  //           JSON.stringify({ isUserLoggedIn: true, token: res.data.token })
  //         );
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       console.log(error.data);
  //     }
  //   };

  //   function logout() {
  //     localStorage?.removeItem("login");
  //     setLogin(false);
  //     setToken(null);
  //   }

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        token,
        // loginUserWithCredentials,
        // logout,
        setToken,
        setLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
