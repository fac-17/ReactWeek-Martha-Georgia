import React from "react";


const UsernameScore = ({username, score}) => {
  return (
    <div>
    <span>{username}</span>
    <span>{score}</span>
    </div>
  )
}

export default UsernameScore;
