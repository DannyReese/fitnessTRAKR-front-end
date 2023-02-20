import {  Navigate } from "react-router-dom"
import { useState } from "react";
import EditCss from '../css/Edit.module.css'
import { createActiviy } from "../Api.fetch";
const CreateAct = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [resp, setResp] = useState('');

    const [success, setSuccess] = useState(false)
    return (success ? <Navigate to="/activities" /> :
            <><div className={EditCss.title}>
                <h1>Create Activity</h1>
            </div><div className={EditCss.container}>

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

                        <div className={EditCss.subDiv}>
                            <div
                                className={EditCss.submit}
                                onMouseDown={async (event) => {
                                    event.preventDefault();
                                    try {
                                        const resp = await createActiviy(name, desc);
                                        setResp(resp)
                                        setTimeout(() => {
                                            if (resp.id) {
                                                setSuccess(true)
                                            }
                                            setResp('')
                                        }, 3000)
                                    } catch (e) {
                                        console.error(e);
                                    } finally {
                                        setName('');
                                        setDesc('');
                                    }
                                }}>Create</div>
                        </div>
                    </form>
                    {resp.error ? <div className={EditCss.notif}>
                <p>{resp.error}</p>
            </div> : resp.id ? <div className={EditCss.notif}>
                <p>{`activity ${resp.name} has been created`}</p>
            </div> : <div></div>}
                </div></>
    )
}

export default CreateAct