import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";

import { changeBestResult, incrementCoins } from "../../redux/info/info-slice";
import infoSelectors from "../../redux/info/info-selects";
import endSound from "../../assets/sounds/end.mp3";
import startSound from "../../assets/sounds/start.mp3";
import Field from "../../components/Field/Field";
import StartPage from "../../components/StartPage";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu";
import Volume from "../../components/Volume/Volume";
import { Container } from "./Game.styles";

const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isStart, setIsStart] = useState(false);
  const [isNewGame, setIsNewGame] = useState(false);
  const [pathMenu, setPathMenu] = useState("menu");
  const volume = useSelector(infoSelectors.getVolume);

  const dispatch = useDispatch();
  const bestResult = useSelector(infoSelectors.getBestResult);

  const [playStartSound] = useSound(startSound, { volume });
  const [playEndSound] = useSound(endSound, { volume });

  let timerIntervalId = useRef(null);

  useEffect(() => {
    if (time === 0) {
      dispatch(incrementCoins(score));
      clearInterval(timerIntervalId.current);
      if (bestResult < score) {
        dispatch(changeBestResult(score));
      }
      setIsNewGame(false);
      playEndSound();
    } // eslint-disable-next-line
  }, [time]);

  const timer = () => {
    timerIntervalId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const startGame = () => {
    setIsStart(true);
    setIsNewGame(true);
    timer();
    playStartSound();
  };

  const startNewGame = () => {
    setIsNewGame(true);
    setTime(10);
    setScore(0);
    timer();
    playStartSound();
  };

  const addsPoint = () => {
    setScore((prev) => prev + 1);
  };

  const addsTime = () => {
    setTime((prev) => prev + 1);
  };

  const changePathMenu = (name) => {
    playStartSound();
    setPathMenu(name);
  };

  return (
    <>
      {isStart ? (
        <Container>
          <Header time={time} score={score} />
          <Field
            time={time}
            addsPoint={addsPoint}
            isNewGame={isNewGame}
            addsTime={addsTime}
          />
          {!isNewGame && (
            <Menu
              pathMenu={pathMenu}
              changePathMenu={changePathMenu}
              score={score}
              startNewGame={startNewGame}
            />
          )}
        </Container>
      ) : (
        <StartPage startGame={startGame} />
      )}
      <Volume />
    </>
  );
};
export default Game;
