import React from "react";

const LetsGo = ({ page, setPage }) => {
  React.useEffect(() => {
    const updatePage = event => setPage("gamePage");
    const letsGoButton = document.querySelector(".letsGoButton");
    letsGoButton.addEventListener("click", updatePage);
    return () => letsGoButton.removeEventListener("click", updatePage);
  }, []);
  return (
    <div>
      <input type="text" />
      <button className="letsGoButton">Let's Go</button>
    </div>
  );
};

export default LetsGo;
