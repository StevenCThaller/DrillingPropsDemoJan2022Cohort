import React from 'react'
import EditUser from '../components/EditUser'
import Feed from '../components/Feed'
import SideBarOptions from '../components/SideBarOptions'

const HomePage = ({ user, setUser }) => {
  return (
    <main>
      <SideBarOptions user={ user }/>
      <Feed user={ user }/>
      <EditUser user={ user} setUser={ setUser }/>
    </main>
  )
}

export default HomePage