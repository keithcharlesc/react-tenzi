import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  function randomDieNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  return (
    <main className="app-border">
      <div className="container">
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
        <Die value={randomDieNumber()} />
      </div>
    </main>
  );
}
