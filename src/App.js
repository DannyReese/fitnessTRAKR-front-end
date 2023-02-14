
import { Switch, Route, HashRouter } from 'react-router-dom';


import Home from "./routes/Home";
import RegisterPage from './routes/Register';
import Login from './routes/Login'
import RoutinePage from './routes/RoutinePage';
import ActivityPage from './routes/ActivityPage'
import UserHome from './routes/UserHome';


const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
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

