import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from "./components/Dropdown";
import UsernameScore from "./components/usernameScore";
import LetsGo from "./components/LetsGo";
import app from "./App.css";
import EndofGame from './components/EndofGame';
function App() {
  const [hasChosenAnswer, setHasChosenAnswer] = React.useState('false');
  const [username, setUsername] = React.useState("Username");
  const [score, setScore] = React.useState(0);
  const [category, setCategory] = React.useState(9);
  const [button, setButton] = React.useState("");
  const [page, setPage] = React.useState("landingPage");

  return (
    <div>
      <UsernameScore score={score} username={username} />

      <header className="heading"> K o o l Q u i z </header>
      {page === "landingPage" && (
        <div>
          <Dropdown category={category} setCategory={setCategory} />

          <LetsGo
            button={button}
            setButton={setButton}
            page={page}
            setPage={setPage}
            username={username}
            setUsername={setUsername}
          />
        </div>
      )}
      {page === "gamePage" && (
        <div>
          <QuizQuesAns category={category} score={score} setScore={setScore} setPage={setPage} hasChosenAnswer={hasChosenAnswer} setHasChosenAnswer={setHasChosenAnswer} />
          <UsernameScore score={score} username={username} />
        </div>
      )}
      {page === "endGamePage" && (
        <div>
        <EndofGame score={score} page={page} setPage={setPage}/>
        </div>
      )}
    </div>
  );
}

export default App;
