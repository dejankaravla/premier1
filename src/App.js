import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [reverse, setReverse] = useState("");
  const [reverseValue, setReverseValue] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [wordCountValue, setWordCountValue] = useState("");

  const inputReverse = () => {
    setReverseValue(reverse.split("").reverse().join(""));
  };

  const inputWordCount = () => {
    setWordCountValue(wordCount.split(" ").length);
  };

  class date {
    constructor() {
      this.days = 0;
    }
    addDays(newDays) {
      this.days = this.days + +newDays;
      return this.days;
    }
  }
  const newDays = new date();

  newDays.addDays(10);
  console.log(newDays.days);

  return (
    <div className="App">
      <div className="App__container">
        <form>
          <TextField
            onChange={(e) => setReverse(e.target.value)}
            id="filled-basic"
            label="Type text..."
            variant="filled"
          />
          <Button onClick={inputReverse} variant="contained">
            SUBMIT
          </Button>
        </form>
        <p>Reverse: {reverseValue}</p>
        <form>
          <TextField
            onChange={(e) => setWordCount(e.target.value)}
            id="filled-basic"
            label="Type text..."
            variant="filled"
          />
          <Button onClick={inputWordCount} variant="contained">
            SUBMIT
          </Button>
        </form>
        <p>Word Count: {wordCountValue}</p>
      </div>
      <div className="App__displayAnswers"></div>
    </div>
  );
}

export default App;
