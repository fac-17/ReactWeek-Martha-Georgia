import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from './components/Dropdown'
// import './App.css';

function App() {
  const [category, setCategory] = React.useState(9);

  return (
    <div>
      <header> Quiz </header>

      <QuizQuesAns category={category}/><Dropdown category={category} setCategory={setCategory}/>
    </div>
  );
}

export default App;
