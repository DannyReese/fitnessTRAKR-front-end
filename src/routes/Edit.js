import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { updateRoutine } from '../Api.fetch'

import EditCss from '../css/Edit.module.css'

const Edit = ({
    setUser,
    routineName,
    setRoutineName,
    goal,
    setGoal,
    isPublic,
    setIsPublic
}) => {

    const [resp, setResp] = useState('');
    const [success, setSuccess] = useState(false)

    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };

    const handleChange = () => {
        setIsPublic(!isPublic);
    };
    // eslint-disable-next-line
    useEffect(() => { nameTheUser() }, []);


    return (success ? <Navigate to="/routines-user" /> : <>
        <div className={EditCss.title} >
            <h1>{localStorage.getItem('routineName')}</h1>
        </div>

        <div className={EditCss.container}>

            <form className={EditCss.form}>

                <div className={EditCss.cdInputs}>
                    <h3 className={EditCss.title}>Name</h3>
                    <input
                        value={routineName}
                        placeholder={`${routineName}`}
                        onChange={event => setRoutineName(event.target.value)}>
                    </input>
                </div>

                <div className={EditCss.cdInputs}>
                    <h3 className={EditCss.title}>Goal</h3>
                    <input
                        value={goal}
                        placeholder={`${goal}`}
                        onChange={event => setGoal(event.target.value)}>
                    </input>
                </div>

                <div>
                    <label>
                        public
                        <input type="checkbox"
                            checked={isPublic}
                            onChange={handleChange} />
                    </label>
                </div>

                <div className={EditCss.subDiv}>
                    <div
                        className={EditCss.submit}
                        onMouseDown={async (event) => {
                            event.preventDefault()

                            const respo = await updateRoutine(
                                localStorage.getItem('routineId'),
                                routineName,
                                goal,
                                isPublic
                            )
                            
                                setResp(respo)
                            
                           
                            console.log(resp)
                            
                            setTimeout(() => {
                                if (respo.id) {
                                    setSuccess(true)
                                }
                                setResp('')
                            }, 3000)
                        }}> Submit Changes</div>
                </div>

            </form>
            {resp.error ? <div className={EditCss.notif}>
                <p>a routine with that name already exists</p>
            </div> : resp.id ? <div className={EditCss.notif}>
                <p>{`routine ${resp.name} has been created`}</p>
            </div> : <div></div>}
        </div>
    </>
    )
}

export default Edit 