import React from 'react'
import UserOptions from './UserOptions'

const NavBar = ({ user }) => {
  return (
    <header>
      <h1>NotFaceBook</h1>
      <UserOptions user={ user }/>
    </header>
  )
}

export default NavBar