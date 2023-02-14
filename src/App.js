// import './App.css';

// import React, { useState } from "react";
import {Switch,Route,HashRouter } from 'react-router-dom';

// import Welcome from "./Components/Welcome";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
import Home from "./routes/Home";
// import Logout from "./Logout/Logout";

// import { myUser } from './Api';
 
// const TOKEN = 'stranger_token';

function App() {



  return (
    <div>
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

