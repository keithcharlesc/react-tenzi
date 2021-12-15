import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dices.map((die, index) => (
    <Die key={index} value={die} />
  ));

  function handleClick() {
    setDices(allNewDice());
  }

  return (
    <main className="app-border">
      <div className="container">{diceElements}</div>
      <button className="roll-button" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}
