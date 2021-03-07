import React, { useState } from "react";

//Write an app that allows a user to flip a coin. It should start empty, and then display which side the coin landed on
function App() {
  const [result, setResult] = useState("");

  const flipCoin = () => {
    const prob = Math.random();
    if (prob > 0.5) setResult("Heads");
    else setResult("Tails");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={flipCoin}>Flip coin</button>
      <p>It landed on: {result}</p>

      <BusinessCard
        name="William"
        occupation="Source PL"
        email="william@hackcville.com"
        phoneNumber="703-853-5873"
      />
    </div>
  );
}

const BusinessCard = ({ name, occupation, email, phoneNumber }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        marginBottom: "100px",
      }}
    >
      <TopHalf name={name} occupation={occupation} />
      <BottomHalf email={email} phoneNumber={phoneNumber} />
    </div>
  );
};

const TopHalf = ({ name, occupation }) => (
  <div>
    <h1 style={{ paddingBottom: "10px" }}>{name}</h1>
    <h4>{occupation}</h4>
  </div>
);

const BottomHalf = ({ email, phoneNumber }) => (
  <div>
    <h5>{email}</h5>
    <h5>{phoneNumber}</h5>
  </div>
);

export default App;
