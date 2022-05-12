import React from 'react'

const StoryCard = ({ profile, image, name }) => {
  return (
    <div className="story" style={{backgroundImage: `url('${image}')`  }}>
      <img className="round-profile" src={ profile } alt={ name } />
      <span>{ name }</span>
    </div>
  )
}

export default StoryCard