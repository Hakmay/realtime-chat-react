import React from 'react'
import Avatar from "../assets/avatarDefault.jpg"

function Message() {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src={Avatar} alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src={Avatar} alt="" />
        </div>
    </div>
  )
}

export default Message