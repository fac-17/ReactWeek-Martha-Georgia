import React from "react";


const UsernameScore = ({username, score}) => {
  return (
    <div>
    <span>{username}</span>
    <span>{score}/15</span>
    </div>
  )
}

export default UsernameScore;
