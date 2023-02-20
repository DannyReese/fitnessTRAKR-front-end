import './App.css';

import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { myUser } from "./Api.user";

import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import HomeUser from "./Components/HomeUser.js";
import Logout from "./Components/Logout.js";
import Activities from './Components/Activities';
import Routines from './Components/Routines';
 
const TOKEN = 'fitnessTracker_token';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  const [me, setMe] = useState(''); 
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityDesc, setActivityDesc] = useState('');

  const storeToken =(responseToken) => {   
    localStorage.setItem(TOKEN,responseToken);
    setToken(responseToken)
  }
  
  useEffect (() => {
  const storedToken = localStorage.getItem(TOKEN);
  setToken(storedToken)
  }, [])

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

  
  const setValue = (func) => {
    return (event) => {func(event.target.value)};
  }

  return (
    <>
      <Routes>
        <Route 
          exact path="/" 
          element={
            <Home/>
          } 
        />
        <Route 
          exact path="/home" 
          element={
            <HomeUser
              me = {me}
              setMe = {setMe}
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
         <Route
          exact path="/activities"
          element={
            <Activities
            activities ={activities}
            setActivities ={setActivities}
            activityName ={activityName}
            setActivityName ={setActivityName}
            activityDesc = {activityDesc}
            setActivityDesc ={setActivityDesc}
            />
          } 
         /> 
         <Route
          exact path="/routines"
          element={
            <Routines
            routines ={routines}
            setRoutines ={setRoutines}
            />
          } 
         /> 
      </Routes>
    </>
  );
}

export default App;

