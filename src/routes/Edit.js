import { useEffect,useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { addActivity, updateRoutine, updateRoutineActivity,getRoutineById } from '../Api.fetch'

const Edit = ({
    setUser,
    routineId,
    setRoutineId,
    routineName,
    setRoutineName,
    goal,
    setGoal,
    activityId,
    setActivityId,
    isPublic,
    setIsPublic
}) => {
    const [routine,setRoutine]= useState([]);
console.log(routineId)
console.log(routineName)
console.log(isPublic)

    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };

    const handleChange = () => {
        setIsPublic(!isPublic);
      };

    useEffect(() => { nameTheUser()},[] );
   

    return (
        <>
            <div><h2>Edit Page</h2></div>
            {routine?<div>{routine}</div>:null}
            <form>
            <div>
                <input
                    value={routineName}
                    placeholder={`${routineName}`}
                    onChange={event => setRoutineName(event.target.value)}>

                </input>
                <input value={goal}
                    placeholder='description..'
                    onChange={event => setGoal(event.target.value)}>

                </input>
                <label>
                public
                <input type="checkbox"
                 checked={isPublic}
                 onChange={handleChange} />
                </label>

            </div>
            
                <Link to='/routines-user' onMouseDown={() => {
                    updateRoutine(
                        routineId,
                        routineName,
                        goal,
                        isPublic
                    )

                }}> Submit Changes</Link>
            </form>
        </>
    )
}

export default Edit 