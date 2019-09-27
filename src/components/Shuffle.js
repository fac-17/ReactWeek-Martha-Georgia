import React from "react";
import QuizQuesAns from "./QuizQuesAns";

const Shuffle = ({
  data,
  index,
  score,
  setScore,
  hasChosenAnswer,
  setHasChosenAnswer
}) => {
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
          dangerouslySetInnerHTML={{ __html: answer }}
          onClick={() => {
            setHasChosenAnswer("true");
            if (correctAnswer === answer) {
              setScore(score + 1);
            }
          }}
          disabled={hasChosenAnswer === "true" ? true : false}
          value={answer}
          className={
            answer === correctAnswer
              ? "answer-options-correct"
              : "answer-options-incorrect"
          }
          key={answer}
        /> // ternary here
      ))}
    </div>
  );
};

export default Shuffle;
