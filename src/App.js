
import { Routes, Route } from 'react-router-dom';
import Edit from './routes/Edit';
import Home from "./routes/Home";
import RegisterPage from './routes/Register';
import Login from './routes/Login'
import RoutinePage from './routes/RoutinePage';
import ActivityPage from './routes/ActivityPage'
import UserHome from './routes/UserHome';
import UserRoutines from './routes/UserRoutine';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import Create from './routes/Create';
import AddActivity from './routes/AddActivity'
import EditRoutineActivity from './routes/EditRoutineActivity';
import CreateActiviy from './routes/CreateActivity';



const App = () => {

  const [user, setUser] = useState('')
  const [routineName, setRoutineName] = useState('')
  const [goal, setGoal] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [count, setCount] = useState('')
  const [dur, setDur] = useState('')
  const [routineId, setRoutineId] = useState('')
  const [activityId, setActivityId] =useState('')

  return (

    <>
      <NavBar user={user} setUser={setUser} />

      <Routes>
        <Route exact path={'/'} element={
          <Home user={user} />}
        />

        <Route path={'/login'} element={
          <Login user={user} setUser={setUser} />}
        />

        <Route path={'/register'} element={
          <RegisterPage />}
        />

        <Route exact path={'/routines'} element={
          <RoutinePage
            setUser={setUser} user={user} />}
        />

        <Route path={'/activities'} element={
          <ActivityPage
            setUser={setUser} user={user} />}
        />

        <Route path={'/user'} element={
          <UserHome
            user={user}
            setUser={setUser} />}
        />

        <Route exact path={'/routines-user'} element={
          <UserRoutines
          activityId={activityId}
          setActivityId={setActivityId}
            setRoutineId={setRoutineId}
            routineId={routineId}
            setUser={setUser}
            setGoal={setGoal}
            setIsPublic={setIsPublic}
            setCount={setCount}
            setDur={setDur}
          />}
        />

        <Route path={'/routines-create'} element={
          <Create
            setUser={setUser} />}
        />
        <Route path={'/activities-create'} element={
          <CreateActiviy
            setUser={setUser} />}
        />
        <Route path={'/edit-routine'} element={
          <Edit
            setUser={setUser}
            routineName={routineName}
            setRoutineName={setRoutineName}
            goal={goal}
            setGoal={setGoal}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
          />
        } />
        <Route path='/routine-activities-add' element={
          <AddActivity
            setRoutineName={setRoutineName}
            routineName={routineName}
            setUser={setUser}
           />

        } />
        <Route path='/routine-activity-edit' element={
          <EditRoutineActivity
            setUser={setUser}
            setCount={setCount}
            count={count}
            setDur={setDur}
            dur={dur}
          />}
        />

      </Routes>

    </>
  );
}

export default App;


           

           



