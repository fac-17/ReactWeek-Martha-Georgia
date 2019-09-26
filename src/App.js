import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from "./components/Dropdown";
import UsernameScore from "./components/usernameScore";
// import './App.css';

function App() {
  const [username, setUsername] = React.useState("Username");
  const [score, setScore] = React.useState(0);
  const [category, setCategory] = React.useState(9);

  return (
    <div>
      <header> Quiz </header>

      <QuizQuesAns category={category} />
      <Dropdown category={category} setCategory={setCategory} />

      <UsernameScore score={score} username={username}/>
    </div>
  );
}

export default App;
