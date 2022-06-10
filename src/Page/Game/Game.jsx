import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import userSelectors from "../../redux/user/user-selectors";
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from "../../redux/base-api";
import endSound from "../../assets/sounds/end.mp3";
import startSound from "../../assets/sounds/start.mp3";
import Field from "../../components/Field/Field";
import Header from "../../components/Header/Header";
import Menu from "../../components/ModalGame";
import { Container } from "./Game.styles";

const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isNewGame, setIsNewGame] = useState(true);

  const volume = useSelector(userSelectors.getVolume);

  // const dispatch = useDispatch();
  // const bestResult = useSelector(achievementSelectors.getRecord);

  const [playStartSound] = useSound(startSound, { volume });
  const [playEndSound] = useSound(endSound, { volume });
  const { data: user } = useGetCurrentUserQuery();
  const [updateUser] = useUpdateUserMutation();

  let timerIntervalId = useRef(null);

  useEffect(() => {
    setIsNewGame(true);
    setTime(10);
    setScore(0);
    timer();
    return () => {
      clearInterval(timerIntervalId.current);
      setTime(0);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerIntervalId.current);
      updateUser({ coins: user.coins + score });
      // if (bestResult < score) {
      //changes record
      // }
      setIsNewGame(false);
      playEndSound();
    } // eslint-disable-next-line
  }, [time]);

  const timer = () => {
    timerIntervalId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
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

  return (
    <>
      <Container>
        <Header time={time} score={score} />
        <Field
          time={time}
          addsPoint={addsPoint}
          isNewGame={isNewGame}
          addsTime={addsTime}
        />
        {!isNewGame && <Menu score={score} startNewGame={startNewGame} />}
      </Container>
    </>
  );
};
export default Game;
