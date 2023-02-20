import React from "react";
import { Link } from 'react-router-dom'
import HomeCss from '../css/Home.module.css'

const Home = ()=>{

    return(
        <div className={HomeCss.home}>
            <h2 className={HomeCss.title}>FitnessTrac.kr</h2>
            <Link to='/routines'>Routines</Link>
            <Link to='/activities'>Activities</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

            {/* make condition if user logged in have log out link instead of login */}
            {/* {token? <Link to='/logout'> Logout </Link> : <Link to='/login'>Login</Link>}
            {token? null : <Link to='/register'>Register</Link>} */}
        </div>
    )
};

export default Home;
