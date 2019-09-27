import React from "react";
import QuizQuesAns from "./QuizQuesAns";

const Shuffle = ({ data, index, score, setScore }) => {
  let correctAnswer = data.results[index].correct_answer;
  let incorrectAnswers = data.results[index].incorrect_answers;
  let newAnswerArray = [...incorrectAnswers];
  newAnswerArray.push(correctAnswer);
  const randomise = array => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledArray = React.useMemo(
    () => {
      return randomise(newAnswerArray);
    },
    [correctAnswer]
  );

  return (
    <div className="answer-options-container">
      {shuffledArray.map(answer => (
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
    </div>
  );
};

export default Shuffle;