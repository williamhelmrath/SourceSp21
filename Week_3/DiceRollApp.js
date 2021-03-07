import React, { useState } from "react";
import side1 from "./images/side1.png";
import side2 from "./images/side2.png";
import side3 from "./images/side3.png";
import side4 from "./images/side4.png";
import side5 from "./images/side5.png";
import side6 from "./images/side6.png";

//Write an app that allows a user to roll a die. It should start empty, and then display which side the die landed on
export default function DiceRollApp() {
  const [result, setResult] = useState(null);

  const images = [side1, side2, side3, side4, side5, side6];

  const rollDie = () => {
    const value = Math.floor(Math.random() * 6 + 1);
    console.log(value);
    setResult(value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={rollDie}>Roll die</button>
      {result && (
        <>
          <p>You rolled a {result}</p>
          <img src={images[result - 1]} alt="side of die" />
        </>
      )}
    </div>
  );
}
