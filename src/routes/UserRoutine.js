import { useEffect, useState } from "react";
import UserRoutinesCss from '../css/UserRoutine.module.css'
import { showUsersRoutines } from "../Api.fetch"
import { Navigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import ActDeleteButton from "../components/ActDeleteButton";
import { Link } from "react-router-dom";
const UserRoutines = ({ setUser,
    setRoutineId,
    setGoal,
    setIsPublic,
    routineId,
    setCount,
    setDur,
    setActivityId,
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

                        <div className={UserRoutinesCss.routine}
                            key={crypto.randomUUID()}
                            onMouseOver={() => {
                                setRoutineId(ur.id)
                                setGoal(ur.goal)
                                setIsPublic(ur.isPublic)
                                localStorage.setItem('routineName', ur.name)
                                localStorage.setItem('routineId', ur.id)
                            }}>

                            <div
                                className={UserRoutinesCss.routineHead}
                                key={crypto.randomUUID()}
                            >

                                <h2
                                    key={crypto.randomUUID()}
                                >
                                    {ur.name}
                                </h2>

                                <div
                                    className={UserRoutinesCss.routineChangers}
                                    key={crypto.randomUUID()}
                                >
                                    <DeleteButton
                                        key={crypto.randomUUID()}
                                        routineId={routineId}
                                        setChange={setChange}
                                        change={change}
                                    />

                                    <Link
                                        to="/edit-routine"
                                        key={crypto.randomUUID()}
                                        className={UserRoutinesCss.Link}>edit
                                    </Link>

                                    <Link
                                        to='/routine-activities-add'
                                        key={crypto.randomUUID()}
                                        className={UserRoutinesCss.Link}>Add Activity
                                    </Link>

                                </div>
                            </div>

                            <div
                                key={crypto.randomUUID()}
                            >
                                {ur.goal}
                            </div>
                            {ur.activities.length ?
                                <div
                                    key={crypto.randomUUID()}
                                >
                                    <h3>Activities</h3>

                                    {ur.activities.map(a => {
                                        return (
                                            <form
                                                key={crypto.randomUUID()}
                                            >
                                                <Link
                                                    to='/routine-activity-edit'
                                                    key={crypto.randomUUID()}
                                                    onMouseOver={() => {
                                                        setActivityId(a.routineActivityId)
                                                        setCount(a.count)
                                                        setDur(a.duration)
                                                        localStorage.setItem('actName', a.name)
                                                        localStorage.setItem('actId', a.routineActivityId)
                                                    }}
                                                >
                                                    <div
                                                        className={UserRoutinesCss.activities}
                                                        key={crypto.randomUUID()}
                                                        value={a.id}
                                                    >
                                                        <div
                                                            className={UserRoutinesCss.actInfo}
                                                            key={crypto.randomUUID()}>
                                                            <div
                                                                key={crypto.randomUUID()}
                                                            >
                                                                {a.name}
                                                            </div>

                                                            <div
                                                                key={crypto.randomUUID()}
                                                            >
                                                                {a.description}
                                                            </div>

                                                            <div
                                                                key={crypto.randomUUID()}
                                                            >
                                                                Duration {a.duration}
                                                            </div>

                                                            <div
                                                                key={crypto.randomUUID()}
                                                            Í>
                                                                Count {a.count}
                                                            </div>

                                                        </div>
                                                        <ActDeleteButton
                                                            key={crypto.randomUUID}
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

