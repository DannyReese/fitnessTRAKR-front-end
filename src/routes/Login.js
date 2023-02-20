import { useState } from 'react'
import { login } from "../Api.fetch"
import LoginCss from '../css/LoginCss.module.css'
import RegCss from '../css/RegCss.module.css'
import { Navigate } from 'react-router-dom'


const Login = ({ setUser, user }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [resp, setResp] = useState('')

    return (user ? <Navigate to='/user' /> :
        <div>
            <div className={LoginCss.container}>
                <div>
                    <form className={LoginCss.form} onSubmit={async (event) => {
                        event.preventDefault()
                        try {
                            const resp = await login(username, password)

                            console.log(resp);
                            setResp(resp)
                            setTimeout(() => {

                                setResp('')
                            }, 3000)
                            if (resp.token) {
                                localStorage.setItem('user', resp.user.username)
                                setUser(localStorage.getItem('user'))
                            } else {
                                setUser(false)
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    }}>
                        <div className={LoginCss.cdInputs}>
                            <input className="username"
                                placeholder="username.."
                                onChange={event => setUsername(event.target.value)}>

                            </input>
                        </div>

                        <div className={LoginCss.cdInputs}>
                            <input className="password"
                                type='password'
                                placeholder="password.."
                                onChange={event => setPassword(event.target.value)}>

                            </input>
                        </div>
                        <button className="register-button">login</button>

                    </form>
                  
                    {resp.error ? <div className={RegCss.notif}>
                    <p>{resp.error}</p>
                </div> : resp.user ? <div className={RegCss.notif}>
                    <p>{resp.message}</p>
                </div> : <div></div>}
                </div>
            </div>
        </div>

    )
}

export default Login