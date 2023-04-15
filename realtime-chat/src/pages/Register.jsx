import React from "react"
import Add from "../assets/addAvatar.png"

function Register() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Realtime Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email" />
                <input type="password"  placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>You do not have a account? Login</p>
        </div>
    </div>
    
  )
}

export default Register