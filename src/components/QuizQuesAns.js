import React from 'react';
import getData from '../utils/getData';

const QuizQuesAns = props => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData().then(data => {
      setData(data);
    });
  }, []);
  console.log(data);
if(!data) return <div> Loading...</div>
  return(
    <div>
    <span> {data.results[1].question} </span>
    </div>
  )
}

export default QuizQuesAns;
