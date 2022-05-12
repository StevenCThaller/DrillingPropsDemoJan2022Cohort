import React from 'react'

const SideBarOptions = ({ user }) => {
  return (
    <aside>
      <div>
        <img className="round-profile" src={ user.profilePic } alt={ user.firstName } />
        <span>{ user.firstName } { user.lastName }</span>
      </div>
      <a href="#">Friends</a>
      <a href="#">Groups</a>
      <a href="#">Marketplace</a>
      <a href="#">Watch</a>
    </aside>
  )
}

export default SideBarOptions