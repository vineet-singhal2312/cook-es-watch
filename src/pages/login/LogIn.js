import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import "./LogIn.css";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setLogin, isUserLogin } = useAuth();
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
      localStorage?.setItem(
        "login",
        JSON.stringify({ isUserLoggedIn: true, token: res.data.token })
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

          {isUserLogin ? (
            <button id="customerOrder" onClick={() => Logout()}>
              LOG OUT
            </button>
          ) : (
            <button id="customerOrder" onClick={(e) => LogInHandler(e)}>
              LOG IN
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
