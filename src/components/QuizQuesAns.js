import React from "react";
import getData from "../utils/getData";

const QuizQuesAns = ({ category }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(
    () => {
      getData(category).then(data => {
        setData(data);
      });
    },
    [category]
  );
  console.log(data);
  if (!data) return <div> Loading...</div>;
  let question = data.results[0].question;
  let correctAnswer = data.results[0].correct_answer;
  let incorrectAnswers = data.results[0].incorrect_answers;
  return (
    <div>
      <span>{question}</span>
        <button>{correctAnswer}</button>
        {incorrectAnswers.map(answer => (
          <button key={answer}>{answer}</button>
        ))}
      <button>Select answer</button>
      <button>Skip</button>
    </div>
  );
};

export default QuizQuesAns;
