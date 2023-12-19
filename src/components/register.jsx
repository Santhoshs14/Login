import React, { useState } from "react";
import Axios  from "axios";
import img from "../assets/Untitled design.png";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      Email:emailReg,
      password: passwordReg,
     }).then((response) => {
        console.log(response);
     });
   };

  return (
    <div className="base-container">
      <div className="header">REGISTER</div>
      <div className="content">
        <div className="image">
          <img src={img} alt="img" className="register-img" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
