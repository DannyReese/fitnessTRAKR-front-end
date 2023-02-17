import React from "react";
import { Navigate } from "react-router-dom";
import { login } from "../Api.fetch";
import LoginCss from '../css/Login.module.css'

const Login = ({ username, setUsername, password, setPassword, token,setToken }) => {

  if (!token) {
  return (
    <>
      <form
        className={LoginCss.login}
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const response = await login(username,password)

            const responseToken = response.token;

            setToken(responseToken);
            console.log("Logged in successfully");
            
          } catch (error) {
            console.log("Failed to login");
            console.log(error);
          }
        }}
      >
        <label>
          Name:
          <input  placeholder = 'Enter name' value={username} onChange={setUsername} />
        </label>
        <label>
          Password:
          <input placeholder = 'Enter password' value={password} onChange={setPassword} />
        </label>
        <button id = "submit">Submit</button>
      </form>
    </>
  );}

return (
  <Navigate to="/home" />
)

};

export default Login;
