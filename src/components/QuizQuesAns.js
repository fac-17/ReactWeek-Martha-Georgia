import React from "react";
import getData from "../utils/getData";

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

  if (!data) return <div> Loading...</div>;
  let question = data.results[index].question;
  let correctAnswer = data.results[index].correct_answer;
  let incorrectAnswers = data.results[index].incorrect_answers;
  return (
    <div>
      <span>{question}</span>
      <button
        value={correctAnswer}
        onClick={() => {
          setScore(score + 1);
        }}
        className="answer-options"
      >
        {correctAnswer}
      </button>
      {incorrectAnswers.map(answer => (
        <button value={answer} className="answer-options" key={answer}>
          {answer}
        </button>
      ))}
      <button
        onClick={() => {
          if (index < 15) {
            setIndex(index + 1);
          }
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          if (index < 15) {
            setIndex(index + 1);
          }
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default QuizQuesAns;
