import React, { useState, useRef, useEffect } from "react";
import useSound from "use-sound";

import sprite from "../../assets/images/sprite.svg";
import coin from "../../assets/images/coin.svg";
import buySound from "../../assets/sounds/buy.mp3";
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
  ButtonMenu,
  ContainerStore,
  StoreItem,
  ButtonStore,
  WrapperStoreItem,
  StoreText,
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

  const [playStartSound] = useSound(startSound, { volume: 0.4 });
  const [playEndSound] = useSound(endSound, { volume: 0.4 });
  const [playBuySound] = useSound(buySound, { volume: 0.4 });

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

  const addsTime = () => {
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
            store={store}
            setStore={setStore}
          />
          {!isNewGame && (
            <Backdrop>
              {pathMenu === "menu" && (
                <MenuNav>
                  <ItemMenu>Time is over</ItemMenu>
                  <ItemMenu>You have {score} points </ItemMenu>
                  <ButtonMenu onClick={newGame}>New game</ButtonMenu>
                  <ButtonMenu
                    onClick={() => {
                      playStartSound();
                      setPathMenu("store");
                    }}
                  >
                    Store
                  </ButtonMenu>
                </MenuNav>
              )}
              {pathMenu === "store" && (
                <ContainerStore>
                  <ButtonMenu
                    onClick={() => {
                      playStartSound();
                      setPathMenu("menu");
                    }}
                  >
                    back
                  </ButtonMenu>
                  <StoreItem>
                    <WrapperStoreItem>
                      <svg fill="rgb(234, 72, 132)" width={40} height={40}>
                        <use href={sprite + "#lightning"}></use>
                      </svg>
                      Pinkstorm
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      {priceStore.pricePinkstorm}
                      <img src={coin} alt="coin" width="30px" />
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      <StoreText>{store.pinkstorm}</StoreText>
                      <ButtonStore
                        type="button"
                        disabled={coins < priceStore.pricePinkstorm}
                        onClick={() => {
                          if (coins >= priceStore.pricePinkstorm) {
                            playBuySound();
                            setCoins(
                              (prev) => prev - priceStore.pricePinkstorm
                            );
                            setStore(
                              ({ bluestorm, yellowstorm, pinkstorm }) => ({
                                bluestorm,
                                yellowstorm,
                                pinkstorm: pinkstorm + 1,
                              })
                            );
                          }
                        }}
                      >
                        buy
                      </ButtonStore>
                    </WrapperStoreItem>
                  </StoreItem>
                  <StoreItem>
                    <WrapperStoreItem>
                      <svg fill="rgb(14, 180, 201)" width={40} height={40}>
                        <use href={sprite + "#lightning"}></use>
                      </svg>
                      Bluestorm
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      {priceStore.priceBluestorm}
                      <img src={coin} alt="coin" width="30px" />
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      <StoreText>{store.bluestorm}</StoreText>
                      <ButtonStore
                        type="button"
                        disabled={coins < priceStore.priceBluestorm}
                        onClick={() => {
                          if (coins >= priceStore.priceBluestorm) {
                            playBuySound();
                            setCoins(
                              (prev) => prev - priceStore.priceBluestorm
                            );
                            setStore(
                              ({ bluestorm, yellowstorm, pinkstorm }) => ({
                                bluestorm: bluestorm + 1,
                                yellowstorm,
                                pinkstorm,
                              })
                            );
                          }
                        }}
                      >
                        buy
                      </ButtonStore>
                    </WrapperStoreItem>
                  </StoreItem>
                  <StoreItem>
                    <WrapperStoreItem>
                      <svg fill="rgb(216, 250, 67)" width={40} height={40}>
                        <use href={sprite + "#lightning"}></use>
                      </svg>
                      Yellowstorm
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      {priceStore.priceYellowstorm}
                      <img src={coin} alt="coin" width="30px" />
                    </WrapperStoreItem>
                    <WrapperStoreItem>
                      <StoreText>{store.yellowstorm}</StoreText>
                      <ButtonStore
                        type="button"
                        disabled={coins < priceStore.priceYellowstorm}
                        onClick={() => {
                          if (coins >= priceStore.priceYellowstorm) {
                            playBuySound();
                            setCoins(
                              (prev) => prev - priceStore.priceYellowstorm
                            );
                            setStore(
                              ({ bluestorm, yellowstorm, pinkstorm }) => ({
                                bluestorm,
                                yellowstorm: yellowstorm + 1,
                                pinkstorm,
                              })
                            );
                          }
                        }}
                      >
                        buy
                      </ButtonStore>
                    </WrapperStoreItem>
                  </StoreItem>
                </ContainerStore>
              )}
            </Backdrop>
          )}
        </Container>
      ) : (
        <Menu startGame={startGame} />
      )}
    </>
  );
};
export default Game;
