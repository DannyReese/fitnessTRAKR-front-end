import { useState } from "react"
import { createRoutine } from '../Api.fetch'
import { Link } from "react-router-dom";
import EditCss from "../css/Edit.module.css"
const CreateRoutine = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    console.log(isPublic)

    const handleChange = () => {
        setIsPublic(!isPublic);
    };


    return (<>
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
                <Link to='/routines-user'
                    className={EditCss.submit}
                    onMouseDown={async (event) => {
                        event.preventDefault()
                        try {
                            await createRoutine({ name, goal, isPublic })
                        } catch (e) {
                            console.error(e)
                        } finally {
                            setName('')
                            setGoal('')
                            setIsPublic(false)
                        }
                    }}>Create</Link>
                    </div>
            </form>
        </div>
    </>)
}

export default CreateRoutine