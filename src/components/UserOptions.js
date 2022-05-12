import React from 'react'

const UserOptions = ({ user }) => {
  return (
    <nav id="user-option">
      <div>
        <img className="round-profile" src={user.profilePic} alt={user.firstName}/>
        <span>{ user.firstName }</span>
      </div>
      <a href="#">Options</a>
      <a href="#">Messages</a>
      <a href="#">Notifications</a>
    </nav>
  )
}

export default UserOptions