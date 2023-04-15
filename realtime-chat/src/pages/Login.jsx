import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Realtime Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password"  placeholder="Password"/>
                <button type="submit">Sign in</button>
            </form>
            <p>You don't have a account? Register</p>
        </div>
    </div>
  )
}

export default Login