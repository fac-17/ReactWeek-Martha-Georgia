import React from "react";

const LetsGo = ({ page, setPage, username, setUsername }) => {
  React.useEffect(
    () => {
      const updatePage = event => setPage("gamePage");
      const letsGoButton = document.querySelector(".letsGoButton");
      letsGoButton.addEventListener("click", updatePage);
      return () => letsGoButton.removeEventListener("click", updatePage);
    },
    [setPage]
  );

  React.useEffect(
    () => {
      const updateUsername = event => setUsername(event.target.value);
      const usernameInput = document.querySelector(".usernameInput");
      usernameInput.addEventListener("change", updateUsername);
      return () => usernameInput.removeEventListener("change", updateUsername);
    },
    [setUsername]
  );

  return (
    <form className="lets-go-form">
      <input
        placeholder="Enter a username"
        className="usernameInput"
        type="text"
      />
      <button className="letsGoButton">Let's Go</button>
    </form>
  );
};

export default LetsGo;
