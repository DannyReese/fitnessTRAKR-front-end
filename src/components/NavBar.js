import { Link } from 'react-router-dom'
import NavBarCss from '../css/NavBar.module.css'
export const NavBar = ({user,setUser})=>{
    console.log(user)
    const logout =()=>{
        localStorage.setItem('token','notToken');
        setUser(false);
    }
    return(
        <div className={NavBarCss.navBar}>
            <h2>FitnessTrac.kr</h2>
            <Link to='/'>Home</Link>
            <Link to='/routines'>Routines</Link>
            <Link to='/activities'>Activities</Link>
            {/* make contdition if user logged in have log out link instead of login */}
            {user ? <div className={NavBarCss.logout}onClick={()=>{logout()}}>logOut</div>:<Link to='/login'>Login</Link>}
            {user ? null : <Link to='/register'>Register</Link>}
        </div>
    )
};


