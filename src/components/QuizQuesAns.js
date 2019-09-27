import React from "react";
import getData from "../utils/getData";
import Shuffle from "./Shuffle";

const QuizQuesAns = ({ category, score, setScore }) => {
  const [data, setData] = React.useState(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(
    () => {
      getData(category).then(data => {
        setData(data);
      });
    },
    [category]
  );
  console.log("this is data", data);
  if (!data) return <div> Loading...</div>;
  let question = data.results[index].question;

  return (
    <div>
      <span className="currentQuestion">{question}</span>
      <Shuffle data={data} index={index} score={score} setScore={setScore} />
      <div className="button-container">
        <button
          className="next-button"
          onClick={() => {
            if (index < 15) {
              setIndex(index + 1);
            }
          }}
        >
          Next
        </button>
        <button
          className="skip-button"
          onClick={() => {
            if (index < 15) {
              setIndex(index + 1);
            }
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default QuizQuesAns;
