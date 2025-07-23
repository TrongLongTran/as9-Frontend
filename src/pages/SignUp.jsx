import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Signup({onAuth, setMessage}){
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            onAuth(data.token);
            setMessage('Signup succesfully');
            navigate('/');
        }else{
            alert(data.error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input placeholder="Username" value = {username} onChange={e=>setUserName(e.target.value)} />
            <input placeholder="Email" value = {email} onChange={e=>setEmail(e.target.value)} />
            <input placeholder="Password" value = {password} onChange={e=>setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    )
};

export default Signup;

