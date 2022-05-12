import React, { useState } from 'react'

const EditUser = ({ user, setUser }) => {
  const [userState, setUserState] = useState(user)

  const submitHandler = e => {
    e.preventDefault()

    setUser(userState)
  }

  const changeHandler = event => {
    setUserState({
      ...userState,
      [event.target.name] : event.target.value
    })
  }

  return (
    <form className="edit-user" onSubmit={ submitHandler }>
      <label htmlFor="firstName">
        First Name: 
        <input type="text" name="firstName" value={userState.firstName} onChange={changeHandler}/>
      </label>
      <label htmlFor="lastName">
        Last Name: 
        <input type="text" name="lastName" value={userState.lastName} onChange={changeHandler}/>
      </label>
      <label htmlFor="profilePic">
        Profile Picture:
        <input type="text" name="profilePic" value={userState.profilePic} onChange={changeHandler}/>
      </label>
      <input type="submit" value="Update User Info" />
    </form>
  )
}

export default EditUser