import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login({onAuth, setMessage}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const res = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        const data = await res.json();
        
        if(res.ok){
            onAuth(data.user);
            setMessage('Login Successful!');
            navigate('/');
        }else{
            alert(data.error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2 className = "auth-heading">Login</h2>
            <input placeholder='Username' value={username} onChange={e=>setUsername(e.target.value)} />
            <input placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
            <button type='Submit'>Login</button>
        </form>
    )
}

export default Login;