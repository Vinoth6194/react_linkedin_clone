import React from "react";
import "./login.css";
function Login() {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      ></img>
      <form>
        <input type="text" placeholder="Full name if registering"></input>
        <input type="text" placeholder="Profile Pic URL"></input>
        <input type="email" placeholder="Your Email"></input>
        <input type="password" placeholder="Your password"></input>
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
