import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from "./components/Dropdown";
import UsernameScore from "./components/usernameScore";
import LetsGo from "./components/LetsGo";

// import './App.css';

function App() {
  const [username, setUsername] = React.useState("Username");
  const [score, setScore] = React.useState(0);
  const [category, setCategory] = React.useState(9);
  const [button, setButton] = React.useState("");
  return (
    <div>
      <header> Quiz </header>
      <Dropdown category={category} setCategory={setCategory} />


      <UsernameScore score={score} username={username}/>

      <LetsGo button={button} setButton={setButton} />
      <QuizQuesAns category={category} />

    </div>
  );
}

export default App;
