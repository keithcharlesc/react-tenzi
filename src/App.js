import React from "react";
import Die from "./components/Die";
import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    const allIsHeld = dice.every((die) => die.isHeld);
    const firstDieValue = dice[0].value;
    const allIsEqualValue = dice.every((die) => die.value === firstDieValue);
    if (allIsHeld && allIsEqualValue) {
      setTenzies(true);
    }
  }, [dice]);

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
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice((prevDice) =>
        prevDice.map((die) => {
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
  }

  return (
    <div>
      {tenzies && <Confetti width={width} height={height} />}
      <main className="app-border">
        <h1 className="game-title">Tenzies</h1>
        <p className="game-description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          {tenzies ? "Start New Game" : "Roll"}
        </button>
      </main>
    </div>
  );
}
