import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { GLobalStyles } from "./styles/global";
import useSound from "use-sound";

import endSound from "./assets/sounds/end.mp3";
import bubbleSound from "./assets/sounds/bubble.mp3";
import startSound from "./assets/sounds/start.mp3";
import Menu from "./Page/Menu";
import Game from "./Page/Game";

const App = () => {
  const [bestResult, setBestResult] = useState(
    JSON.parse(window.localStorage.getItem("best result")) || 0
  );
  const [pinkPoints, setPinkPoints] = useState([]);
  const [bluePoints, setBluePoints] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isStart, setIsStart] = useState(false);
  const [isNewGame, setIsNewGame] = useState(true);

  const [playStartSound] = useSound(startSound, { volume: 0.4 });
  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });
  const [playEndSound] = useSound(endSound, { volume: 0.4 });

  let createPinkPointIntervalId = useRef(null);
  let createBluePointIntervalId = useRef(null);
  let timerIntervalId = useRef(null);
  let maxDelay = useRef(1200);
  let minDelay = useRef(200);

  const getMaxDelay = () => {
    const newMaxDelay = maxDelay.current;
    if (maxDelay.current > 600) maxDelay.current -= 4;
    return newMaxDelay;
  };

  const getMinDelay = () => {
    const newMinDelay = minDelay.current;
    if (minDelay.current > 50) minDelay.current -= 4;
    return newMinDelay;
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(createPinkPointIntervalId.current);
      clearInterval(createBluePointIntervalId.current);
      clearInterval(timerIntervalId.current);
      if (pinkPoints.length) setPinkPoints([]);
      if (bestResult < score) {
        window.localStorage.setItem("best result", JSON.stringify(score));
        setBestResult(score);
      }
      setIsNewGame(false);
      playEndSound();
    }
  }, [time, bestResult]);

  const randomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const timer = () => {
    timerIntervalId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const createNewPinkPoint = () => {
    createPinkPointIntervalId.current = setTimeout(() => {
      const id = nanoid();
      setPinkPoints((prev) => [
        ...prev,
        {
          x: randomNumber(1400),
          y: randomNumber(600),
          id,
          size: randomNumber(45, 14),
        },
      ]);
      deletePinkPointLaterSomeTime(id);
      createNewPinkPoint();
    }, randomNumber(getMaxDelay(), getMinDelay()));
  };
  const createNewBluePoint = () => {
    createBluePointIntervalId.current = setTimeout(() => {
      if (randomNumber(7, 0) === 3) {
        const id = nanoid();
        setBluePoints((prev) => [
          ...prev,
          {
            x: randomNumber(1400),
            y: randomNumber(600),
            id,
          },
        ]);
        deleteBluePointLaterSomeTime(id);
      }
      createNewBluePoint();
    }, randomNumber(getMaxDelay(), getMinDelay()));
  };

  const startGame = () => {
    setIsStart(true);
    createNewPinkPoint();
    createNewBluePoint();
    timer();
    playStartSound();
  };

  const newGame = () => {
    setIsNewGame(true);
    setTime(10);
    setScore(0);
    createNewPinkPoint();
    timer();
    playStartSound();
  };

  const addsPoint = () => {
    setScore((prev) => prev + 1);
    playBubbleSound();
  };

  const deletePinkPointLaterSomeTime = (id) => {
    setTimeout(() => {
      setPinkPoints((prev) => prev.filter((point) => point.id !== id));
    }, 3000);
  };
  const deleteBluePointLaterSomeTime = (id) => {
    setTimeout(() => {
      setBluePoints((prev) => prev.filter((point) => point.id !== id));
    }, 3000);
  };

  const deleteOnClickPinkPoint = (id) => {
    setPinkPoints((prev) => prev.filter((point) => point.id !== id));
  };

  const deleteOnClickBluePoint = (id) => {
    setBluePoints((prev) => prev.filter((point) => point.id !== id));
  };

  return (
    <>
      <GLobalStyles />

      {isStart ? (
        <Game
          isNewGame={isNewGame}
          bestResult={bestResult}
          pinkPoints={pinkPoints}
          bluePoints={bluePoints}
          deleteOnClickPinkPoint={deleteOnClickPinkPoint}
          time={time}
          score={score}
          newGame={newGame}
          addsPoint={addsPoint}
          deleteOnClickBluePoint={deleteOnClickBluePoint}
        />
      ) : (
        <Menu startGame={startGame} />
      )}
    </>
  );
};

export default App;
