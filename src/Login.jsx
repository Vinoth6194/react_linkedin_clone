import React from "react";
import "./login.css";
function Login() {
  const loginToApp = () => {};
  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input type="text" placeholder="Your Name if registering" />
        <input type="text" placeholder="Your Profile Pic url" />
        <input type="email" placeholder="YourEmail" />
        <input type="password" placeholder="Your Password" />
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
