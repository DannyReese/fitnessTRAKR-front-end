import { useEffect } from "react";
import UserRoutinesCss from '../css/UserRoutine.module.css'

const UserRoutines = ({ setUser }) => {

    const user = localStorage.getItem('user')
    useEffect(() => {setUser(user)});

    return (
        <div>
            <h1 className={UserRoutinesCss.title}>User Routines</h1>
        </div>
    )
}

export default UserRoutines