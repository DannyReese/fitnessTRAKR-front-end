import { useState } from "react"
import { createRoutine } from '../Api.fetch'
import { Navigate} from "react-router-dom";
import EditCss from "../css/Edit.module.css"
const CreateRoutine = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [resp, setResp] = useState('');
    const [success, setSuccess] = useState(false)

    const handleChange = () => {
        setIsPublic(!isPublic);
    };


    return (success ? <Navigate to="/routines-user" /> :<>
    <div className={EditCss.title} >
                <h1>Create Routine</h1>
            </div>
        <div className={EditCss.container}>

            <form className={EditCss.form}>
                <div className={EditCss.cdInputs}>
                    <h3 className={EditCss.title}>Name</h3>
                    <input
                        value={name}
                        placeholder='name..'
                        onChange={event => setName(event.target.value)}>

                    </input>
                </div>


                <div className={EditCss.cdInputs}>
                    <h3 className={EditCss.title}>Goal</h3>
                    <input
                        value={goal}
                        placeholder='goal..'
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
                <div  className={EditCss.subDiv}>
                <div 
                    className={EditCss.submit}
                    onMouseDown={async (event) => {
                        event.preventDefault()
                        try {
                           const resp = await createRoutine({ name, goal, isPublic })
                           setResp(resp)
                                        setTimeout(() => {
                                            if (resp.id) {
                                                setSuccess(true)
                                            }
                                            setResp('')
                                        }, 3000)
                        } catch (e) {
                            console.error(e)
                        } finally {
                            setName('')
                            setGoal('')
                            setIsPublic(false)
                        }
                    }}>Create</div>
                    </div>
            </form>
            {resp.error ? <div className={EditCss.notif}>
                <p>a routine with that name already exists</p>
            </div> : resp.id ? <div className={EditCss.notif}>
                <p>{`routine ${resp.name} has been created`}</p>
            </div> : <div></div>}
        </div>
    </>)
}

export default CreateRoutine