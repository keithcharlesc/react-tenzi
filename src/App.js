import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i + 1,
      });
    }
    return newDice;
  }

  function holdDice(id) {
    setDices((prevDices) =>
      prevDices.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        } else {
          return die;
        }
      })
    );
  }

  const diceElements = dices.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
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
