import React from "react";
import getData from "../utils/getData";
import Shuffle from "./Shuffle";

const QuizQuesAns = ({
  category,
  score,
  setScore,
  setPage,
  hasChosenAnswer,
  setHasChosenAnswer
}) => {
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
      <span
        dangerouslySetInnerHTML={{ __html: question }}
        className="currentQuestion"
      />
      <Shuffle
        data={data}
        index={index}
        score={score}
        setScore={setScore}
        hasChosenAnswer={hasChosenAnswer}
        setHasChosenAnswer={setHasChosenAnswer}
      />
      <div className="button-container">
        <button
          className="next-button"
          onClick={() => {
            setHasChosenAnswer("false");
            if (index < 14) {
              setIndex(index + 1);
            } else {
              setPage("endGamePage");
            }
          }}
        >
          Next
        </button>
        <button
          className="skip-button"
          onClick={() => {
            setHasChosenAnswer("false");
            if (index < 14) {
              setIndex(index + 1);
            } else {
              setPage("endGamePage");
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
