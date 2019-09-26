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
  console.log("this is data", data);
  if (!data) return <div> Loading...</div>;
  let question = data.results[index].question;
  let correctAnswer = data.results[index].correct_answer;
  let incorrectAnswers = data.results[index].incorrect_answers;
  let newAnswerArray = [...incorrectAnswers];
  newAnswerArray.push(correctAnswer);
  const randomise = array => {
    array.sort(() => Math.random() - 0.5);
  };
  randomise(newAnswerArray);
  console.log("this is correct", correctAnswer);

  return (
    <div>
      <span>{question}</span>
      {newAnswerArray.map(answer => (
        <button
          onClick={() => {
            if (correctAnswer === answer) {
              setScore(score + 1);
            }
          }}
          value={answer}
          className="answer-options"
          key={answer}
        >
          {answer}
        </button> // ternary here
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
