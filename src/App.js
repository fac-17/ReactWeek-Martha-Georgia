import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from "./components/Dropdown";
import UsernameScore from "./components/usernameScore";
import LetsGo from "./components/LetsGo";


function App() {
  const [username, setUsername] = React.useState("Username");
  const [score, setScore] = React.useState(0);
  const [category, setCategory] = React.useState(9);
  const [button, setButton] = React.useState("");
  const [page, setPage] = React.useState("landingPage");

  return (
    <div>
      <header> Quiz </header>
      {page === "landingPage" && (
        <div>
          <Dropdown category={category} setCategory={setCategory} />

          <UsernameScore score={score} username={username} />

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
          <QuizQuesAns category={category} score={score} setScore={setScore} />
          <UsernameScore score={score} username={username} />
        </div>
      )}
    </div>
  );
}

export default App;
