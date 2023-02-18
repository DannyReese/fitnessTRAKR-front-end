import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateRoutine } from '../Api.fetch'
import EditCss from '../css/Edit.module.css'

const Edit = ({
    setUser,
    routineId,
    routineName,
    setRoutineName,
    goal,
    setGoal,
    isPublic,
    setIsPublic
}) => {


    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };

    const handleChange = () => {
        setIsPublic(!isPublic);
    };
    // eslint-disable-next-line
    useEffect(() => { nameTheUser() }, []);


    return (
        <>
            <div className={EditCss.title} >
                <h1>{routineName}</h1>
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
                        <Link to='/routines-user'
                            className={EditCss.submit}
                            onMouseDown={() => {
                                updateRoutine(
                                    routineId,
                                    routineName,
                                    goal,
                                    isPublic
                                )
                            }}> Submit Changes</Link>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Edit 