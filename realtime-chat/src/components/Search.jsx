import React from 'react'
import AvatarImage from "../assets/avatarDefault.jpg"

function Search() {
  return (
    <div className="search">
       <div className="searchForm">
            <input type="text" name="" id="" placeholder="Find a user"/>
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

export default Search