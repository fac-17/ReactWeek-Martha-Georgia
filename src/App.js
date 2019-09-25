import React from "react";
import QuizQuesAns from "./components/QuizQuesAns";
import Dropdown from './components/Dropdown'
// import './App.css';

function App() {
  return (
    <div>
      <header> Quiz </header>

      <QuizQuesAns category="20" /><Dropdown/>
    </div>
  );
}

export default App;
