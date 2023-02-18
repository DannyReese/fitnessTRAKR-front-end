import {Link} from "react-router-dom"
import { useState } from "react";
import EditCss from '../css/Edit.module.css'
import { createActiviy } from "../Api.fetch";
const CreateAct =()=>{
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    return (<>
        <div className={EditCss.title} >
                    <h1>Create Activity</h1>
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
                        <h3 className={EditCss.title}>Description</h3>
                        <input
                            value={desc}
                            placeholder='description..'
                            onChange={event => setDesc(event.target.value)}>
    
                        </input>
                    </div>

                    <div  className={EditCss.subDiv}>
                <Link to='/routines-user'
                    className={EditCss.submit}
                    onMouseDown={async (event) => {
                        event.preventDefault()
                        try {
                            await createActiviy( name, desc )
                        } catch (e) {
                            console.error(e)
                        } finally {
                            setName('')
                            setDesc('')
                         
                        }
                    }}>Create</Link>
                    </div>
            </form>
        </div>
    </>)
}

export default CreateAct