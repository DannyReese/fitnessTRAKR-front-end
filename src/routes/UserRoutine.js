import { useEffect, useState } from "react";
import UserRoutinesCss from '../css/UserRoutine.module.css'
import { showUsersRoutines } from "../Api.fetch"

import { Link } from "react-router-dom";
const UserRoutines = ({ setUser,
    setRoutineId,
    setRoutineName,
    setGoal,
    setIsPublic,
    setActivityId
}) => {

    const user = localStorage.getItem('user')

    const [userRoutines, setUserRoutines] = useState([]);
    console.log(userRoutines)
    const getRoutines = async () => {
        setUser(user)
        console.log(user)
        const resp = await showUsersRoutines(user);
        setUserRoutines(resp);

        return resp
    }
    useEffect(() => { getRoutines() }, []);

    return (<div>
        <h1 className={UserRoutinesCss.title}>{`${user}'s Routines`}</h1>
        <div >
            <Link to='/routines-create' className={UserRoutinesCss.Link}>Create Routine</Link>
        </div>
        <div className={UserRoutinesCss.container}>

            <div>{
                userRoutines.length ? userRoutines.map(ur => {
                    return (
                        <div className={UserRoutinesCss.routine} key={ur.id}
                            onMouseOver={() => {
                                console.log(ur)
                                setRoutineId(ur.id)
                                setRoutineName(ur.name)
                                setGoal(ur.goal)
                                setIsPublic(ur.isPublic)
                            }}>
                            <div className={UserRoutinesCss.routineHead}><h2>{ur.name}</h2>
                                <div className={UserRoutinesCss.routineChangers}>
                                    <Link to="/edit-routine" className={UserRoutinesCss.Link}>edit</Link>
                                    <Link to='/routine-activities-add' className={UserRoutinesCss.Link}>Add Activity</Link>
                                </div>
                            </div>

                            <div>{ur.goal}</div>
                            <div><h3>Activities</h3>{ur.activities.map(a => {
                                return (
                                    <div className={UserRoutinesCss.activities} key={a.id}>
                                        <div>{a.name}</div>
                                        <div>{a.description}</div>
                                        <div>Duration {a.duration}</div>
                                        <div>Dount {a.count}</div>
                                    </div>
                                )
                            })}</div>
                        </div>
                    )
                }) : <h2 className={UserRoutinesCss.container}>No Routines Yet</h2>
            }

            </div>
        </div>
    </div>
    )
}

export default UserRoutines