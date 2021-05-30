import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { SideNav } from "../../components/sideNav/SideNav";
export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        // "http://localhost:8000/signup",
        `https://cook-es-watch.herokuapp.com/signup`,

        {
          userName,
          email,
          password: password1,
          confirmPassword: password2,
        }
      );

      setUserName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      console.log(error.data);
    }
  };

  return (
    <div className="sign-up">
      <Header />
      <SideNav />
      <div className="contact-us">
        <form>
          <label>
            NAME <em>&#x2a;</em>
          </label>
          <input
            id="customerName"
            required=""
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            required=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            id="customerPhone"
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <label>CONFIRM PASSWORD</label>
          <input
            id="customerPhone"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />

          <div className="login-signup-button-div">
            <button id="customerOrder" onClick={(e) => SignUpHandler(e)}>
              SIGN UP
            </button>
            <Link to="/login">
              <button id="customerOrder">LOG IN</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
