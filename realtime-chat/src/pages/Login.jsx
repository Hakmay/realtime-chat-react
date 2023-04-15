import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try  {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }catch(error) {
      setError(true);
    } 
  } 

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Realtime Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" />
                <input type="password"  placeholder="Password"/>
                <button type="submit">Sign in</button>
                {error && <span style={{color:"red"}}>Something went wrong</span>}
            </form>
            <p>You don't have a account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login