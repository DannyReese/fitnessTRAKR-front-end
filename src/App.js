
import { Routes, Route } from 'react-router-dom';

import Home from "./routes/Home";
import RegisterPage from './routes/Register';
import Login from './routes/Login'
import RoutinePage from './routes/RoutinePage';
import ActivityPage from './routes/ActivityPage'
import UserHome from './routes/UserHome';

import { useState } from 'react';
import { NavBar } from './components/NavBar';



const App = () => {
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

console.log(token)
  return (

    <>
      <NavBar user={user} setUser={setUser} />

      <Routes>
        <Route exact path='/' element={
          <Home user={user}  />}
        />

        <Route path='/login' element={
          <Login user={user} setToken={setToken} setUser={setUser} />}

        />
        <Route path='/register' element={
          <RegisterPage />}

        />
        <Route path='/routines' element={
          <RoutinePage setUser={setUser}/>}

        />
        <Route path='/activities' element={
          <ActivityPage setUser={setUser}/>}

        />
        <Route path='/user' element={
          <UserHome user={user} setUser={setUser} />}

        />
      </Routes>

    </>
  );
}

export default App;

