import { Link } from 'react-router-dom'
import NavBarCss from '../css/NavBar.module.css'
export const NavBar = ({ user, setUser }) => {
  

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        setUser(null);
    }
    return (
        <div className={NavBarCss.navBar}>
            <h2 className={NavBarCss.title}>FitnessTrac.kr</h2>

            {user ? <Link to='/user'>Home</Link>
                : <Link to='/'>Home</Link>}

            {user ? <Link to={'routines-user'}>My Routines</Link> : null}

            <Link to='/routines'>Routines</Link>
            
            <Link to='/activities'>Activities</Link>

            {user ? <Link to='/login'
                className={NavBarCss.logout}
                onMouseDown={() => {
                    logout()
                }}>logOut</Link> :
                <Link to='/login'>Login</Link>}

            {user ? null
                : <Link to='/register'>Register</Link>}
        </div>
    )
};


