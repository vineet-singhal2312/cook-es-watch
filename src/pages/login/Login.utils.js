// import axios from "axios";

// export const LogInHandler = async (
//   e,
//   email,
//   password,
//   setEmail,
//   setPassword,
//   loginUser,
//   navigate,
//   setToken,
//   setUserName,
//   setLogin,
//   setLoginFailedModel
// ) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post(
//       // "http://localhost:8000/login",
//       `https://cook-es-watch.herokuapp.com/login`,

//       {
//         email,
//         password,
//       }
//     );

//     setEmail("");
//     setPassword("");
//     loginUser(res, navigate, setToken, setUserName, setLogin);
//   } catch (error) {
//     console.log("here");

//     setEmail("");
//     setPassword("");
//     setLoginFailedModel(true);
//   }
//   function loginUser(res) {
//     setLogin(true);

//     setToken(res.data.token);
//     navigate("/");
//     setUserName(res.data.userName);

//     localStorage?.setItem(
//       "login",
//       JSON.stringify({
//         isUserLoggedIn: true,
//         token: res.data.token,
//         name: res.data.userName,
//       })
//     );
//   }
// };

// export function Logout(setToken, setLogin) {
//   localStorage?.removeItem("login");
//   setLogin(false);
//   setToken(null);
// }
