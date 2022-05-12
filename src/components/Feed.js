import React from 'react'
import NewStatus from './NewStatus'
import Stories from './Stories'

const Feed = ({ user }) => {
  return (
    <div>
      <Stories user={ user }/>
      <NewStatus user={ user } />
    </div>
  )
}

export default Feed