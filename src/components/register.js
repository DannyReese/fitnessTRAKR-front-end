import React, { useState } from "react"
import { register } from "../Api.fetch"
import { Link } from "react-router-dom"

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (<div className="body">
        <div className="title-bar">
            <div>
                <span className="title-words">Fitness Trackr</span>
            </div>
            <div id='login-container'>
                <Link to="/">login</Link>
            </div>
        </div>
        <form className="create-account form" onSubmit={async (event) => {
            event.preventDefault()
            try {
                const resp = await register(username, password)
                console.log(resp);
            } catch (error) {
                console.error(error);
            }
        }}>
            <input className="username"
                placeholder="username.."
                onChange={event => setUsername(event.target.value)}>

            </input>

            <input className="password"
                placeholder="password.."
                onChange={event => setPassword(event.target.value)}>

            </input>
            <button className="register-button">submit</button>

        </form>
    </div>
    )

}

export default Register