
import { Link } from 'react-router-dom'
import NavBarCss from '../css/NavBar.module.css'

const NavBar = ({me,username,setUsername })=>{

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token')
        setUsername(null);
    }

    return(
        <div className={NavBarCss.navBar}>
            <h2>FitnessTrac.kr</h2>
            <Link to='/'>Home</Link>
            <Link to='/routines'>Routines</Link>
            <Link to='/activities'>Activities</Link>
            {/* make contdition if user logged in have log out link instead of login */}
            {me ? <div className={NavBarCss.logout}onClick={()=>{logout()}}>logOut</div>:<Link to='/login'>Login</Link>}
            {me ? null : <Link to='/register'>Register</Link>}
        </div>
    )
};

export default NavBar;
