import { useState } from 'react'
import {login} from "../Api.fetch"
import {NavBar} from '../components/NavBar'

const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


return(<div>
        {<NavBar/>}
        <div>
    <form className="login-form" onSubmit={async (event) => {
        event.preventDefault()
        try {
            const resp = await login(username, password)
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
    </div>
)
}

export default Login