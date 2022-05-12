import React, { useState } from 'react'
import StoryCard from './StoryCard'

const initialState = [
  {
    profile: "https://static.wikia.nocookie.net/lotr/images/d/da/Bilbo_Baggins_from_The_Hobbit_Wallpaper.jpg",
    image: "https://foreignpolicy.com/wp-content/uploads/2019/10/Lord-of-the-rings-sauron-mordor-foreign-policy.jpg?w=1500",
    name: "Bilbo Baggins"
  },
  {
    profile: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Oscar_Isaac_by_Gage_Skidmore.jpg",
    image: "https://cdn.mos.cms.futurecdn.net/4hpgkSw2LZq79XrSFSwA5A.jpg",
    name: "Marc Spector"
  }
]

const Stories = ({ user }) => {
  const [stories, setStories] = useState(initialState)
  return (
    <div className="stories-list">
      <div className="story" style={{ backgroundImage: `url('${user.profilePic}')`}}>
        + Create Story
      </div>
      {
        stories.map((story, i) => <StoryCard key={i} {...story} />)
      }
    </div>
  )
}

export default Stories