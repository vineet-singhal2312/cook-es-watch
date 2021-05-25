import React from "react";
import "./LogIn.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="contact-us">
        <form action="#" className="log-in-form">
          <label for="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            id="customerEmail"
            name="customerEmail"
            required=""
            type="email"
          />
          <label for="customerPhone">
            PASSWORD <em>&#x2a;</em>
          </label>
          <input id="customerPhone" name="customerPhone" type="password" />

          <button id="customerOrder">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
