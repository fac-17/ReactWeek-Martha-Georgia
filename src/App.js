import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from "./components/Dropdown";
import LetsGo from "./components/LetsGo";
// import './App.css';

function App() {
  const [category, setCategory] = React.useState(9);
  const [button, setButton] = React.useState(button);
  return (
    <div>
      <header> Quiz </header>
      <Dropdown category={category} setCategory={setCategory} />
      <LetsGo button={button} setButton={setButton} />
      <QuizQuesAns category={category} />
    </div>
  );
}

export default App;
