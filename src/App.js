import React, { useState } from "react";
import { nanoid } from "nanoid";
import { GLobalStyles } from "./styles/global";

import Menu from "./Page/Menu";
import Game from "./Page/Game";

const App = () => {
  const [points, setPoints] = useState([]);
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const createNewPoint = () => {
    setInterval(
      () =>
        setPoints((prev) => [
          ...prev,
          { x: randomNumber(1400), y: randomNumber(600), id: nanoid() },
        ]),
      1000
    );
  };

  const startGame = () => {
    setIsStart(true);
    createNewPoint();
  };

  const deletePoint = (id) => {
    setPoints((prev) => prev.filter((point) => point.id !== id));
    setScore((prev) => prev + 1);
  };

  return (
    <>
      <GLobalStyles />

      {isStart ? (
        <Game points={points} onClick={deletePoint} score={score} />
      ) : (
        <Menu startGame={startGame} />
      )}
    </>
  );
};

export default App;
