import { Link } from 'react-router-dom'
import NavBarCss from '../css/NavBar.module.css'
export const NavBar = ()=>{

    return(
        <div className={NavBarCss.navBar}>
            <h2>FitnessTrac.kr</h2>
            <Link to='/'>Home</Link>
            <Link to='/routines'>Routines</Link>
            <Link to='/activities'>Activities</Link>
            {/* make contdition if user logged in have log out link instead of login */}
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
};


