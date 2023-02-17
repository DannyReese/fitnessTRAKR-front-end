import { useEffect, useRef, useState } from "react"
import { createRoutine } from '../Api.fetch'
import { Link } from "react-router-dom";
const CreateRoutine = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    console.log(isPublic)

  const handleChange = () => {
    setIsPublic(!isPublic);
  };
  
   
    return (<>
        <form>
            <div>
                <input
                    value={name}
                    placeholder='name..'
                    onChange={event => setName(event.target.value)}>

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
            <Link to='/routines-user' onMouseDown={async (event) => {
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
        </form>
    </>)
}

export default CreateRoutine