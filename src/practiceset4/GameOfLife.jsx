import React, { useState } from "react";

const GameOfLife = () => {
  const [lives, setLives] = useState(Math.floor(Math.random() * 10));
  return (
    <div>
      <h1>Current Lives: {lives}</h1>
      <button
        onClick={() => {
          setLives(lives - 1);
        }}
        disabled={lives === 0}
      >
        Lose a life
      </button>
      {lives === 0 ? <h2>Game Over</h2> : " "}
    </div>
  );
};

export default GameOfLife;
