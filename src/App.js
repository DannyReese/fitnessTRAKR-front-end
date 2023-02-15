
import { Switch, Route, HashRouter } from 'react-router-dom';


import Home from "./routes/Home";
import RegisterPage from './routes/Register';
import Login from './routes/Login'
import RoutinePage from './routes/RoutinePage';
import ActivityPage from './routes/ActivityPage'
import UserHome from './routes/UserHome';
import { token,isUser } from './Api.fetch';
import {  useState,useEffect } from 'react';
import { NavBar } from './components/NavBar';



const App = () => {
  const [user, setUser] = useState(false)

  const setIsUser = async(token)=>{
    const res = await isUser(token)
    setUser(res)
  }
useEffect(()=>{setIsUser(token)},[])
  return (
    <div>
    
      <HashRouter>
      <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path='/'>
            {user ? <UserHome user={user} setUser={setUser}/> : <Home />}
          </Route>
          <Route path='/login'>
            {user ? <UserHome /> : <Login setIsUser={setUser} />}
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/routines'>
            <RoutinePage />
          </Route>
          <Route path='/activities'>
            <ActivityPage />
          </Route>
          <Route path='/user'>
            <UserHome />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

