import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";
import "./LogIn.css";

export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setLogin, isUserLogin, setUserName } = useAuth();
  console.log(email);
  console.log(password);

  const LogInHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      setEmail("");
      setPassword("");
      console.log(res);
      loginUser(res);
    } catch (error) {
      console.log(error.message);
      console.log(error.data);
    }
    function loginUser(res) {
      setLogin(true);

      setToken(res.data.token);
      navigate("/");
      console.log(res.data.userName);
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
      <div className="contact-us">
        <form action="#" className="log-in-form">
          <label for="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            required=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="customerPhone">
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
              <button id="customerOrder" onClick={() => Logout()}>
                LOG OUT
              </button>
            ) : (
              <button id="customerOrder" onClick={(e) => LogInHandler(e)}>
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
