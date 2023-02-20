import React, { useState } from "react"
import { register } from "../Api.fetch"
import { Navigate } from "react-router-dom";
import RegCss from '../css/RegCss.module.css';
import LoginCss from '../css/LoginCss.module.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [resp, setResp] = useState('')
    const [goToLogin, setGoToLogin] = useState(false)

    return (goToLogin ? <Navigate to='/login' /> :
        <div className={LoginCss.container}>
<div>
            <form className={LoginCss.form} onSubmit={async (event) => {
                event.preventDefault()
                try {
                    const resp = await register(username, password)
                    console.log(resp);
                    setResp(resp)
                    setTimeout(() => {
                        if (resp.user) {
                            setGoToLogin(true)
                        }
                        setResp('')
                    }, 3000)
                } catch (error) {
                    console.error(error);
                }
            }}>
                <div className={LoginCss.cdInputs}>
                    <input className="username"
                        placeholder="username.."
                        value={username}
                        onChange={event => setUsername(event.target.value)}>

                    </input>
                </div>
                <div className={LoginCss.cdInputs}>
                    <input className="password"
                        value={password}
                        placeholder="password.."
                        onChange={event => setPassword(event.target.value)}>

                    </input>
                </div>
                <button className="register-button">register</button>
              
                {goToLogin ? <Navigate to="/login" /> : null}
            </form>
            {resp.error ? <div className={RegCss.notif}>
                    <p>{resp.error}</p>
                </div> : resp.user ? <div className={RegCss.notif}>
                    <p>{resp.message}</p>
                </div> : <div></div>}
</div>
        </div>


    )
};

export default RegisterPage