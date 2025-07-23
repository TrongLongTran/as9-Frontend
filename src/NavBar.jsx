import {Link, useNavigate} from 'react-router-dom';
export default function NavBar({token, onLogout}){
    const navigate = useNavigate();
    const handleLogout = ()=>{
        onLogout();
        navigate('/');
    };
    return(
        <nav className = 'navbar'>
            <Link to="/" className='nav-link'>Home</Link>
            <br/>
            {!token ? (
                <>
                    <Link to='/login' className='nav-link'>Login</Link>
                    <br/>
                    <Link to='/signup' className='nav-link'>Signup</Link>
                </>
            ) : (
                <>
                    <Link to='/profile' className='nav-link' >Profile</Link>
                    <button onClick={handleLogout} className='nav-button'>Logout</button>
                </>
            )}
        </nav>
    )
}