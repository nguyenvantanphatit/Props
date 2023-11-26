import React from "react";
import "./index.css";
const Login = () => {
  return (
    <form className="container">
      <h4>Login Form</h4>
      <div className="form-input">
        <input type="text" placeholder="UserName"/>
      </div>
      <div className="form-input">
        <input type="text" placeholder="PassWord"/>
      </div>
     <a href="#">Forgot your password?</a>
      <div className="form-input">
        <button type="submit" className="button-submit">
          Submit Form
        </button>
      </div>
    </form>
  );
};
export default Login;
