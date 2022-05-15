import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import useSound from "use-sound";

import skillSound from "../../assets/sounds/skill.mp3";
import sprite from "../../assets/images/sprite.svg";
import { getRandomNumber } from "../../utils/getRandomNumber";
import BluePoint from "../BluePoint";
import PinkPoint from "../PinkPoint/PinkPoint";
import YellowPoint from "../YellowPoint/YellowPoint";
import {
  FieldGame,
  WrapperSkills,
  WrapperFieldGame,
  ButtonSkills,
  ItemSkills,
  SkillsText,
} from "./Field.styles";

const Field = ({ addsPoint, addsTime, isNewGame, time, store, setStore }) => {
  const [pinkPoints, setPinkPoints] = useState([]);
  const [bluePoints, setBluePoints] = useState([]);
  const [yellowPoints, setYellowPoints] = useState([]);

  const [playSkillSound] = useSound(skillSound, { volume: 0.4 });

  let createPinkPointIntervalId = useRef(null);
  let createBluePointIntervalId = useRef(null);
  let createYellowPointIntervalId = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(createPinkPointIntervalId.current);
      clearInterval(createBluePointIntervalId.current);
      clearInterval(createYellowPointIntervalId.current);
      setBluePoints([]);
      setPinkPoints([]);
      setYellowPoints([]);
    }
  }, [time]);

  useEffect(() => {
    if (isNewGame) {
      createNewYellowPoint(1200, 300);
      createNewPinkPoint(1200, 300);
      createNewBluePoint(1200, 300);
    } // eslint-disable-next-line
  }, [isNewGame]);

  const createNewPinkPoint = (minDelay, maxDelay) => {
    createPinkPointIntervalId.current = setTimeout(() => {
      const id = nanoid();
      setPinkPoints((prev) => [
        ...prev,
        {
          x: getRandomNumber(1150),
          y: getRandomNumber(600),
          id,
          size: getRandomNumber(45, 20),
        },
      ]);
      deletePointLaterSomeTime(setPinkPoints, id, 3000);
      createNewPinkPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };
  const createNewYellowPoint = (minDelay, maxDelay) => {
    createYellowPointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(3, 0) === 2) {
        const id = nanoid();
        setYellowPoints((prev) => [
          ...prev,
          {
            x: getRandomNumber(1150),
            y: getRandomNumber(600),
            id,
            size: getRandomNumber(45, 20),
          },
        ]);
        deletePointLaterSomeTime(setYellowPoints, id, 3000);
      }
      createNewYellowPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const createNewBluePoint = (minDelay, maxDelay) => {
    createBluePointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(7, 0) === 3) {
        const id = nanoid();
        setBluePoints((prev) => [
          ...prev,
          {
            x: getRandomNumber(1150),
            y: getRandomNumber(600),
            id,
          },
        ]);
        deletePointLaterSomeTime(setBluePoints, id, 3000);
      }
      createNewBluePoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };
  const deletePointLaterSomeTime = (setPoints, id, delay) => {
    setTimeout(() => {
      setPoints((prev) => prev.filter((point) => point.id !== id));
    }, delay);
  };

  return (
    <WrapperFieldGame>
      <WrapperSkills>
        <ItemSkills>
          <ButtonSkills
            color="rgb(234, 72, 132)"
            onClick={() => {
              if (store.pinkstorm > 0) {
                playSkillSound();
                setStore(({ pinkstorm, bluestorm, yellowstorm }) => ({
                  pinkstorm: pinkstorm - 1,
                  bluestorm,
                  yellowstorm,
                }));
                for (let i = 0; i < 30; i++) {
                  setTimeout(() => {
                    const id = nanoid();
                    setPinkPoints((prev) => [
                      ...prev,
                      {
                        x: getRandomNumber(1150),
                        y: getRandomNumber(600),
                        id,
                        size: getRandomNumber(45, 20),
                      },
                    ]);
                    deletePointLaterSomeTime(setPinkPoints, id, 10000);
                  }, getRandomNumber(1100));
                }
              }
            }}
          >
            <svg fill="rgb(234, 72, 132)" width="100%" height="100%">
              <use href={sprite + "#lightning"}></use>
            </svg>
          </ButtonSkills>
          <SkillsText>{store.pinkstorm}</SkillsText>
        </ItemSkills>
        <ItemSkills>
          <ButtonSkills
            color="rgb(14, 180, 201)"
            onClick={() => {
              if (store.bluestorm > 0) {
                playSkillSound();
                setStore(({ pinkstorm, bluestorm, yellowstorm }) => ({
                  pinkstorm,
                  bluestorm: bluestorm - 1,
                  yellowstorm,
                }));
                for (let i = 0; i < 30; i++) {
                  setTimeout(() => {
                    const id = nanoid();
                    setBluePoints((prev) => [
                      ...prev,
                      {
                        x: getRandomNumber(1150),
                        y: getRandomNumber(600),
                        id,
                      },
                    ]);
                    deletePointLaterSomeTime(setBluePoints, id, 10000);
                  }, getRandomNumber(1100));
                }
              }
            }}
          >
            <svg fill="rgb(14, 180, 201)" width="100%" height="100%">
              <use href={sprite + "#lightning"}></use>
            </svg>
          </ButtonSkills>
          <SkillsText>{store.bluestorm}</SkillsText>
        </ItemSkills>
        <ItemSkills>
          <ButtonSkills
            color="rgb(216, 250, 67)"
            onClick={() => {
              if (store.yellowstorm > 0) {
                playSkillSound();
                setStore(({ pinkstorm, bluestorm, yellowstorm }) => ({
                  pinkstorm,
                  bluestorm,
                  yellowstorm: yellowstorm - 1,
                }));
                for (let i = 0; i < 30; i++) {
                  setTimeout(() => {
                    const id = nanoid();
                    setYellowPoints((prev) => [
                      ...prev,
                      {
                        x: getRandomNumber(1150),
                        y: getRandomNumber(600),
                        id,
                        size: getRandomNumber(45, 20),
                      },
                    ]);
                    deletePointLaterSomeTime(setYellowPoints, id, 10000);
                  }, getRandomNumber(1100));
                }
              }
            }}
          >
            <svg fill="rgb(216, 250, 67)" width="100%" height="100%">
              <use href={sprite + "#lightning"}></use>
            </svg>
          </ButtonSkills>
          <SkillsText>{store.yellowstorm}</SkillsText>
        </ItemSkills>
      </WrapperSkills>
      <FieldGame>
        {pinkPoints?.map(({ id, x, y, size }) => (
          <PinkPoint
            key={id}
            id={id}
            x={x}
            y={y}
            size={size}
            addsPoint={addsPoint}
            setPinkPoints={setPinkPoints}
          />
        ))}
        {bluePoints?.map(({ id, x, y }) => (
          <BluePoint
            key={id}
            id={id}
            x={x}
            y={y}
            addsPoint={addsPoint}
            setBluePoints={setBluePoints}
          />
        ))}
        {yellowPoints?.map(({ id, x, y, size }) => (
          <YellowPoint
            key={id}
            id={id}
            x={x}
            y={y}
            size={size}
            addsTime={addsTime}
            setYellowPoints={setYellowPoints}
          />
        ))}
      </FieldGame>
      <WrapperSkills></WrapperSkills>
    </WrapperFieldGame>
  );
};
export default Field;
