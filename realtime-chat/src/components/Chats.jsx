import React from 'react'
import AvatarImage from "../assets/avatarDefault.jpg"

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={AvatarImage} alt="" />
        <div className="userChatInfo">
          <span>John</span>
          <p>Hello</p>
        </div>
       </div>
       <div className="userChat">
        <img src={AvatarImage} alt="" />
        <div className="userChatInfo">
          <span>John</span>
          <p>Hello</p>
        </div>
       </div>
       <div className="userChat">
        <img src={AvatarImage} alt="" />
        <div className="userChatInfo">
          <span>John</span>
          <p>Hello</p>
        </div>
       </div>
    </div>
  )
}

export default Chats