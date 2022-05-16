import React, { useState, useRef, useEffect } from "react";
import useSound from "use-sound";

import buySound from "../../assets/sounds/buy.mp3";
import endSound from "../../assets/sounds/end.mp3";
import startSound from "../../assets/sounds/start.mp3";
import Field from "../../components/Field/Field";
import StartPage from "../../components/StartPage";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu";
import { Container } from "./Game.styles";

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
  const [isNewGame, setIsNewGame] = useState(false);
  const [pathMenu, setPathMenu] = useState("menu");
  const [store, setStore] = useState(
    JSON.parse(window.localStorage.getItem("store")) || {
      pinkstorm: 0,
      bluestorm: 0,
      yellowstorm: 0,
    }
  );

  const [priceStore, setPriceStore] = useState({
    pricePinkstorm: 20,
    priceBluestorm: 35,
    priceYellowstorm: 45,
  });

  const [playBuySound] = useSound(buySound, { volume: 0.4 });
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

  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(store));
    window.localStorage.setItem("coins", JSON.stringify(coins));
  }, [store, coins]);

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

  const handleBuyPinkStorm = () => {
    if (coins >= priceStore.pricePinkstorm) {
      playBuySound();
      setCoins((prev) => prev - priceStore.pricePinkstorm);
      setStore(({ bluestorm, yellowstorm, pinkstorm }) => ({
        bluestorm,
        yellowstorm,
        pinkstorm: pinkstorm + 1,
      }));
    }
  };

  const handleBuyBlueStorm = () => {
    if (coins >= priceStore.priceBluestorm) {
      playBuySound();
      setCoins((prev) => prev - priceStore.priceBluestorm);
      setStore(({ bluestorm, yellowstorm, pinkstorm }) => ({
        bluestorm: bluestorm + 1,
        yellowstorm,
        pinkstorm,
      }));
    }
  };

  const handleBuyYellowStorm = () => {
    if (coins >= priceStore.priceYellowstorm) {
      playBuySound();
      setCoins((prev) => prev - priceStore.priceYellowstorm);
      setStore(({ bluestorm, yellowstorm, pinkstorm }) => ({
        bluestorm,
        yellowstorm: yellowstorm + 1,
        pinkstorm,
      }));
    }
  };

  return (
    <>
      {isStart ? (
        <Container>
          <Header
            bestResult={bestResult}
            time={time}
            score={score}
            coins={coins}
          />
          <Field
            time={time}
            addsPoint={addsPoint}
            isNewGame={isNewGame}
            addsTime={addsTime}
            store={store}
            setStore={setStore}
          />
          {!isNewGame && (
            <Menu
              pathMenu={pathMenu}
              changePathMenu={changePathMenu}
              score={score}
              startNewGame={startNewGame}
              priceStore={priceStore}
              coins={coins}
              handleBuyPinkStorm={handleBuyPinkStorm}
              handleBuyBlueStorm={handleBuyBlueStorm}
              handleBuyYellowStorm={handleBuyYellowStorm}
              store={store}
            />
          )}
        </Container>
      ) : (
        <StartPage startGame={startGame} />
      )}
    </>
  );
};
export default Game;
