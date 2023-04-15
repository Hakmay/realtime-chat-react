import React from 'react'
import AvatarImage from "../assets/avatarDefault.jpg"

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Realtime Chat</span>
      <div className="user">
        <img src={AvatarImage} alt="" />
        <span>John</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar