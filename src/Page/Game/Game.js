import React, { useState, useRef, useEffect } from "react";
import useSound from "use-sound";

import coin from "../../assets/images/coin.svg";
import endSound from "../../assets/sounds/end.mp3";
import startSound from "../../assets/sounds/start.mp3";
import Field from "../../components/Field/Field";
import Menu from "../../components/Menu";
import {
  Container,
  WrapperInfo,
  Item,
  Time,
  WrapperItem,
  MenuNav,
  Backdrop,
  ItemMenu,
  ButtonStart,
} from "./Game.styles";

const Game = () => {
  const [bestResult, setBestResult] = useState(
    JSON.parse(window.localStorage.getItem("best result")) || 0
  );
  const [coins, setCoins] = useState(
    JSON.parse(window.localStorage.getItem("coins")) || 0
  );
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isStart, setIsStart] = useState(false);
  const [isNewGame, setIsNewGame] = useState(true);

  const [playStartSound] = useSound(startSound, { volume: 0.4 });
  const [playEndSound] = useSound(endSound, { volume: 0.4 });

  let timerIntervalId = useRef(null);

  useEffect(() => {
    if (time === 0) {
      setCoins((prev) => prev + score);
      window.localStorage.setItem("coins", JSON.stringify(coins + score));
      clearInterval(timerIntervalId.current);
      if (bestResult < score) {
        window.localStorage.setItem("best result", JSON.stringify(score));
        setBestResult(score);
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

  const newGame = () => {
    setIsNewGame(true);
    setTime(10);
    setScore(0);
    timer();
    playStartSound();
  };

  const addsPoint = () => {
    setScore((prev) => prev + 1);
  };

  const addsTime = (seconds) => {
    setTime((prev) => prev + 1);
  };

  return (
    <>
      {isStart ? (
        <Container>
          <WrapperInfo>
            <Item>My record {bestResult}</Item>
            <Time>{time}</Time>
            <WrapperItem>
              <Item
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Coins:{coins}
                <img src={coin} alt="coin" width="30px" />
              </Item>
              <Item>Score:{score}</Item>
            </WrapperItem>
          </WrapperInfo>
          <Field
            time={time}
            addsPoint={addsPoint}
            isNewGame={isNewGame}
            addsTime={addsTime}
          />
          <Backdrop isNewGame={isNewGame}>
            <MenuNav>
              <ItemMenu>Time is over</ItemMenu>
              <ItemMenu>You have {score} points </ItemMenu>
              <ButtonStart onClick={newGame}>New game</ButtonStart>
            </MenuNav>
          </Backdrop>
        </Container>
      ) : (
        <Menu startGame={startGame} />
      )}
    </>
  );
};
export default Game;
