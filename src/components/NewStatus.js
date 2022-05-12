import React from 'react'

const NewStatus = ({ user }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <img className="round-profile" src={ user.profilePic } alt={ user.firstName }/>
      <input type="text" name="status" id="status" placeholder={`What's on your mind, ${ user.firstName }?`}/>
    </form>
  )
}

export default NewStatus