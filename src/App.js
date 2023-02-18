
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

  const [routineId, setRoutineId] = useState('')
  const [routineName, setRoutineName] = useState('')
  const [goal, setGoal] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [activityId, setActivityId] = useState('')
  const [actName,setActName]=useState('')
  const [count,setCount] = useState('')
  const [dur,setDur] = useState('')
  console.log(activityId)

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
            setUser={setUser}
            setRoutineId={setRoutineId}
            setRoutineName={setRoutineName}
            setGoal={setGoal}
            setActivityId={setActivityId}
            setIsPublic={setIsPublic}
            routineId={routineId}
            setActName={setActName}
            setCount={setCount}
            setDur={setDur}
            activityId={activityId}

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
            routineId={routineId}
            setRoutineId={setRoutineId}
            routineName={routineName}
            setRoutineName={setRoutineName}
            goal={goal}
            setGoal={setGoal}
            activityId={activityId}
            setActivityId={setActivityId}
            isPublic={isPublic}
            setIsPublic={setIsPublic}
          />
        } />
        <Route path='/routine-activities-add' element={
          <AddActivity
            setRoutineName={setRoutineName}
            routineName={routineName}
            setUser={setUser}
            routineId={routineId}
          />

        } />
        <Route path='/routine-activity-edit' element={
          <EditRoutineActivity
            setUser={setUser}
            activityId={activityId}
            actName={actName}
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

