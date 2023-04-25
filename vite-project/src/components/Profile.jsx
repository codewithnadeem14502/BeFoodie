import React from 'react'
import { useState } from 'react'
const Profile = (props) => {
    const [count,setcount] = useState(0);
  return (
    <div>
      <h1>Profile component</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem quis? </p>
      <h3> name : {props.name}</h3>
      <h3> count  : {count}</h3>
      <button onClick={() =>{
        setcount(1);
      }}>count</button>
    </div>
  )
}

export default Profile
