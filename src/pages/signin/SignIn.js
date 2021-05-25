import React, { useState } from "react";
import "./SignIn.css";
export const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const SubmitHander = () => {
    setUserName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
  };

  console.log(userName);
  console.log(email);
  console.log(password1);
  console.log(password2);

  return (
    <div className="sign-up">
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

          <button id="customerOrder" onClick={() => SubmitHander()}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
