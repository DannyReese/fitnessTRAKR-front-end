import { useEffect, useState } from "react";
import UserRoutinesCss from '../css/UserRoutine.module.css'
import { showUsersRoutines } from "../Api.fetch"
import { Navigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import ActDeleteButton from "../components/ActDeleteButton";
import { Link } from "react-router-dom";
const UserRoutines = ({ setUser,
    setRoutineId,
    setRoutineName,
    setGoal,
    setIsPublic,
    routineId,
    setActivityId,
    setActName,
    setCount,
    setDur,
    activityId
}) => {

    const user = localStorage.getItem('user')

    const [userRoutines, setUserRoutines] = useState([]);
    const [change, setChange] = useState(Math.random())

    const getRoutines = async () => {
        setUser(user)

        const resp = await showUsersRoutines(user);
        setUserRoutines(resp);

        return resp
    }
    // eslint-disable-next-line
    useEffect(() => { getRoutines() }, [change]);

    return (user ? <div >
        <div className={UserRoutinesCss.titleDiv}>
        <div className={UserRoutinesCss.titleBox}>
        <div className={UserRoutinesCss.headerBox}>
        <h1 className={UserRoutinesCss.title}>{`${user}'s Routines`}</h1>
        </div>
        <Link to='/routines-create' className={UserRoutinesCss.Link}>Create Routine</Link>
        </div>
        
        </div>
        <div >
           
        </div>
        <div className={UserRoutinesCss.container}>

            <div>{
                userRoutines.length ? userRoutines.map(ur => {
                    return (
                        <div className={UserRoutinesCss.routine} key={crypto.randomUUID()}
                            onMouseOver={() => {

                                setRoutineId(ur.id)
                                setRoutineName(ur.name)
                                setGoal(ur.goal)
                                setIsPublic(ur.isPublic)
                                localStorage.setItem('routineName', ur.name)
                            }}>
                            <div className={UserRoutinesCss.routineHead}><h2>{ur.name}</h2>
                                <div className={UserRoutinesCss.routineChangers}>
                                    <DeleteButton
                                        routineId={routineId}
                                        setChange={setChange}
                                        change={change}

                                    />
                                    <Link to="/edit-routine"
                                        className={UserRoutinesCss.Link}>edit
                                    </Link>
                                    <Link to='/routine-activities-add'
                                        className={UserRoutinesCss.Link}>Add Activity
                                    </Link>

                                </div>
                            </div>

                            <div>{ur.goal}</div>
                            {ur.activities.length ?
                                <div>
                                    <h3>Activities</h3>

                                    {ur.activities.map(a => {
                                        return (<form>
                                            <Link to='/routine-activity-edit'

                                                onMouseOver={() => {
                                                    console.log(a)
                                                    setActivityId(a.routineActivityId)
                                                    setActName(a.name)
                                                    setCount(a.count)
                                                    setDur(a.duration)
                                                }}
                                            >
                                                <div
                                                    className={UserRoutinesCss.activities}
                                                    key={crypto.randomUUID()}
                                                    value={a.id}
                                                > 
                                                    <div className={UserRoutinesCss.actInfo}>
                                                    <div>{a.name}</div>
                                                    <div>{a.description}</div>
                                                    <div>Duration {a.duration}</div>
                                                    <div>Count {a.count}</div>
                                                    </div>
                                                    <ActDeleteButton
                                                setChange={setChange}
                                                activityId={activityId}
                                                />
                                                </div>
                                            </Link>
                                        </form>)
                                    })
                                    }</div> : null}
                        </div>
                    )
                }) : <h2 className={UserRoutinesCss.container}>No Routines Yet</h2>
            }

            </div>
        </div>
    </div> : <Navigate to='/' />
    )
}

export default UserRoutines
                                                    
                                               