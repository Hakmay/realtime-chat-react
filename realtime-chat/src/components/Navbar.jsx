import React, { useContext } from 'react'
import AvatarImage from "../assets/avatarDefault.jpg"
import {auth} from "../firebase"
import {signOut} from "firebase/auth"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">Realtime Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>logout</button>
      </div>

    </div>
  )
}

export default Navbar