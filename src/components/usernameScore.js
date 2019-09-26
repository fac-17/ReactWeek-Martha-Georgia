import React from "react";


const UsernameScore = ({username, score}) => {
  return (
    <div className="username-score-container">
    <span className="username">{username}</span>
    <span className="score">{score}/15</span>
    </div>
  )
}

export default UsernameScore;
