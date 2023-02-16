import './App.css';

import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Home from "./Components/Home.js";
import Logout from "./Components/Logout.js";


import { myUser } from "./Api.fetch";
 
const TOKEN = 'stranger_token';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  const [me, setMe] = useState(''); 

  const storeToken =(responseToken) => {   
    localStorage.setItem(TOKEN,responseToken);
    setToken(responseToken)
  }
  
  useEffect (() => {
  const storedToken = localStorage.getItem(TOKEN);
  setToken(storedToken)
  }, [])
  
  const setValue = (func) => {
    return (event) => {func(event.target.value)};
  }

  useEffect(() => {
    if (token) {
      myUser(token)
        .then((me) => {
          setMe(me);
        })
        .catch((error) => {
          console.log(`Failed to fetch me.`);
        });
    }
  })

  return (
    <>
      <Routes>
        <Route 
          exact path="/" 
          element={
            <NavBar
            username={username} 
            setUsername={setUsername}
            />
          } 
        />
        <Route
          exact path="/login"
          element={
            <Login
              setUsername={setValue(setUsername)}
              setPassword={setValue(setPassword)}
              setToken={setToken}
              username={username}
              password={password}
              token={token}
            />
          }
        />
        <Route
          exact path="/register"
          element={
            <Register
              setUsername={setValue(setUsername)}
              setPassword={setValue(setPassword)}
              setToken={storeToken}
              username={username}
              password={password}
              token={token}
            />
          }
        />
        <Route
          exact path="/home"
          element={
            <Home
              setUsername={setValue(setUsername)}
              setPassword={setValue(setPassword)}
              setToken={storeToken}
              username={username}
              password={password}
              token={token}
            />
          }
        />
        <Route
          exact path="/logout"
          element={
            <Logout
            token={token}
            setToken={setToken}
            me={me}
            setMe={setMe}
            />
          } 
         /> 
      </Routes>
    </>
  );
}

export default App;

