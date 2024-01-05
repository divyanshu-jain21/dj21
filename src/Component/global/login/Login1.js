import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./authService";

function Login1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="col-sm-6 offset-sm-3 border border-primary mt-5 shadow-lg rounded">
      <h1 className="m-3 p-3 text-light">Login</h1>
      <form className="m-3 p-3">
        <div className="mb-3 text-light">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={username}
          onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-light">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 text-light">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary text-light">
          Login
        </button>
      </form>

      {/* <input
       type="text"
       placeholder="Username"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
     />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin} className="btn btn-success">Login</button> */}
    </div>
  );
}

export default Login1;
