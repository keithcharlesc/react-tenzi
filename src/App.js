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
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
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

  function rollDice() {
    setDices((prevDices) =>
      prevDices.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: die.id,
            };
      })
    );
  }

  return (
    <main className="app-border">
      <h1 className="game-title">Tenzies</h1>
      <p className="game-description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container">{diceElements}</div>
      <button className="roll-button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
