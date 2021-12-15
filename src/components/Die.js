import React from "react";
import "./Die.css";

export default function Die(props) {
  return (
    <div
      className={props.isHeld ? "die die-held" : "die"}
      onClick={props.holdDice}
    >
      <p className="die-number">{props.value}</p>
    </div>
  );
}
