import React from "react";

const EndofGame = ({score, page, setPage}) => {
  return (
    <div>
    <h1>Game over. Your score is {score}</h1>
    <button className="Back-start-button" onClick={()=>{setPage("landingPage")}}>Back to start</button>
    </div>
  )
}

export default EndofGame;
