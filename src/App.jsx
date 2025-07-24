import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Result from './pages/Result.jsx'
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import FlightDetail from './pages/FlightDetail';
import NavBar from './NavBar.jsx'
import { useState, useEffect } from 'react'

// import './App.css'

function App() {
  const api = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [message, setMessage] = useState('');
  const handleLogin = (user)=>{
  setUser(user);
  setMessage('Logged in successfully');
};

useEffect(()=>{
  fetch(`${api}/api/auth/me`, {
    credentials: 'include'
  })
  .then(res=>res.ok ? res.json() : null)
  .then(data => setUser(data))
}, [])

const handleLogout = async () =>{
  await fetch(`${api}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  })
  setUser(null);
  setMessage('Logged out...');
}

return (
  <>
  <NavBar token={user} onLogout={handleLogout} />

  {message && (
    <div>
      {message}
    </div>
  )}

  <Routes>
    <Route path='/signup' element={<Signup onAuth={handleLogin} setMessage={setMessage} />} />
    <Route path='/login' element={<Login onAuth={handleLogin} setMessage={setMessage} />} />
    <Route path='/' element={<Home />} />
    <Route path="/results" element={<Result />}/>
    <Route path="/flights/:id" element={user ? <FlightDetail token={user} /> : <Navigate to="/login" />}/>
    <Route path="/profile" element={user ? <Profile token={user} /> : <Navigate to="/login"/>}/>
  </Routes>
  </>
)
}

export default App
