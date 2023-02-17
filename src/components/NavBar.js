import { Link } from 'react-router-dom'
import NavBarCss from '../css/NavBar.module.css'
export const NavBar = ({ user, setUser }) => {
    console.log(user)

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        setUser(null);
    }
    return (
        <div className={NavBarCss.navBar}>
            <h2>FitnessTrac.kr</h2>

            {user ? <Link to='/user'>Home</Link>
                : <Link to='/'>Home</Link>}

            {user ? <Link to={'routines-user'}>My Routines</Link> : null}

            <Link to='/routines'>Routines</Link>
            
            <Link to='/activities'>Activities</Link>

            {user ? <div
                className={NavBarCss.logout}
                onClick={() => {
                    logout()
                }}>logOut</div> :
                <Link to='/login'>Login</Link>}

            {user ? null
                : <Link to='/register'>Register</Link>}
        </div>
    )
};


