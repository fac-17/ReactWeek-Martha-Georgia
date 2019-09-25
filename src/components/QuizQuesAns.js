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
  return (
    <div>
      <span> {data.results[0].question} </span>
    </div>
  );
};

export default QuizQuesAns;
