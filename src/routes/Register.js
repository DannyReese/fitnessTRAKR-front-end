import React, { useState } from "react"
import { register } from "../Api.fetch"


 const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (<div className="body">
      
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
};

export default RegisterPage