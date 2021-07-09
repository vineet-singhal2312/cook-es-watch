import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { LoginFailedModel } from "../../components/loginfailed/LoginFailedModel";
import { SideNav } from "../../components/sideNav/SideNav";
import { useAuth } from "../../providers/AuthProvider";

export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    setToken,
    setLogin,
    isUserLogin,
    setUserName,
    loginFailedModel,
    setLoginFailedModel,
  } = useAuth();

  const LogInHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        // "http://localhost:8000/login",
        `https://cook-es-watch.herokuapp.com/login`,

        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");
      loginUser(res);
    } catch (error) {
      setLoginFailedModel(true);
      setEmail("");
      setPassword("");
    }
    function loginUser(res) {
      setLogin(true);

      setToken(res.data.token);
      navigate("/");
      setUserName(res.data.userName);

      localStorage?.setItem(
        "login",
        JSON.stringify({
          isUserLoggedIn: true,
          token: res.data.token,
          name: res.data.userName,
        })
      );
    }
  };

  function Logout() {
    localStorage?.removeItem("login");
    setLogin(false);
    setToken(null);
  }
  return (
    <div className="log-in">
      <Header />
      {loginFailedModel && <LoginFailedModel />}
      <SideNav />
      <div className="contact-us">
        <form action="#" className="log-in-form">
          <label htmlFor="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            required=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="customerPhone">
            PASSWORD <em>&#x2a;</em>
          </label>
          <input
            id="customerPhone"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-signup-button-div">
            {isUserLogin ? (
              <button
                id="customerOrder"
                onClick={
                  () => Logout()

                  // setToken, setLogin
                }
              >
                LOG OUT
              </button>
            ) : (
              <button
                id="customerOrder"
                onClick={(e) =>
                  LogInHandler(
                    e
                    // email,
                    // password,
                    // setEmail,
                    // setPassword,
                    // navigate,
                    // setToken,
                    // setUserName,
                    // setLogin,
                    // setLoginFailedModel
                  )
                }
              >
                LOG IN
              </button>
            )}{" "}
            <Link to="/signup">
              <button id="customerOrder">SIGN UP</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
