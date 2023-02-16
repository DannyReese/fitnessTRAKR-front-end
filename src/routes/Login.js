import { useState } from 'react'
import { login } from "../Api.fetch"

import { Navigate } from 'react-router-dom'


const Login = ({ setUser,setToken,user }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(user)
  
    return (user?<Navigate to='/user'/>:
        <div>

        <div>
            <form className="login-form" onSubmit={async (event) => {
                event.preventDefault()
                try {
                    const resp = await login(username, password)
                    console.log(resp)
                    setToken(resp.token)
                    if (resp.token) {
                        localStorage.setItem('user',resp.user.username)
                        setUser(localStorage.getItem('user'))
                    } else {
                        setUser(false)
                    }
                } catch (error) {
                    console.error(error);
                }
            }}>
                <input className="username"
                    placeholder="username.."
                    onChange={event => setUsername(event.target.value)}>

                </input>

                <input className="password"
                    type='password'
                    placeholder="password.."
                    onChange={event => setPassword(event.target.value)}>

                </input>
                <button className="register-button">submit</button>

            </form>
        </div>

    </div>

    )
}

export default Login