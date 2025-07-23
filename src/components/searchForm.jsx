import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style.css'

export default function SearchForm(){
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    // Create a parameter in the URL
    const navigate = useNavigate();
    // we add the navigate() in handle submit, so for each time it is submitted, it will run
    const handleSubmit = (e)=>{
        // Forgot this will reload the page
        e.preventDefault();
        navigate(`/results?from=${from}&to=${to}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                From:
                <input type="text" value={from} onChange={(e) => {setFrom(e.target.value)}}></input>
            </label>
            <br/>
            <label>
                To:
                <input type="text" value={to} onChange={(e) => {setTo(e.target.value)}}></input>
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    );
}