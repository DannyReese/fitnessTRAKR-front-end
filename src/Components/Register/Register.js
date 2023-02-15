import React from "react";
import { Navigate } from "react-router-dom";
import { register } from "../../Api.fetch";

const Register = ({username,setUsername,password,setPassword,setToken,token}) => {

    if (!token) {
    return (
      <div>
        <form id = 'register'
          onSubmit = {async(event)=>{
            event.preventDefault();
  
            try {
                  const response = await register(username,password)
                    
                  const json = await response.json();
                  const responseToken = json.data.token;

                  setToken(responseToken);
                  console.log('Registered successfully');
  
                } catch (error) {
                  console.log('Failed to register/User Exists');
                  console.log(error);
                  }  
          }}>
          <label>
            Name:
            <input
              placeholder = 'Enter name'
              value={username}
              onChange={setUsername}
              />
          </label>
          <label >
            Password:
            <input
              placeholder = 'Enter password'
              value={password}
              type = {'password'}
              onChange={setPassword}
            />
          </label>
          <button id = 'submit'>Submit</button>
        </form>
      </div>
    )};  
    
    return (
      <Navigate to="/home" />
    )
  
  };
  
  export default Register;
  