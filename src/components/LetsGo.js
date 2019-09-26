import React from "react";

const LetsGo = () => {
  // React.useEffect(() => {
  // //   const handleClick = event =>
  // //   const letsGoButton = document.querySelector(".letsGoButton");
  // //   letsGoButton.addEventListener("change", clickLetsGoButton);
  // // }, []);
  return (
    <div>
      <input type="text"/>
      <button className="letsGoButton" onClick="handleClick">
        Let's go!
      </button>
    </div>
  );
};

export default LetsGo;
