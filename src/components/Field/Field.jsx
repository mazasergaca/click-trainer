import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import useSound from "use-sound";

import { deletePointLaterSomeTime } from "../../utils/deletePointLaterSomeTime";
import { createPoint } from "../../utils/createPoint";
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
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [pinkPoints, setPinkPoints] = useState([]);
  const [bluePoints, setBluePoints] = useState([]);
  const [yellowPoints, setYellowPoints] = useState([]);

  const [playSkillSound] = useSound(skillSound, { volume: 0.4 });

  let fieldComponent = useRef(null);
  let createPinkPointIntervalId = useRef(null);
  let createBluePointIntervalId = useRef(null);
  let createYellowPointIntervalId = useRef(null);

  useEffect(() => {
    if (fieldComponent?.current) {
      setHeight(
        Math.floor(fieldComponent.current.getBoundingClientRect().height) - 45
      );
      setWidth(
        Math.floor(fieldComponent.current.getBoundingClientRect().width) - 45
      );
    }
  }, [fieldComponent]);

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
    if (isNewGame && height && width) {
      console.log(height);
      console.log(width);
      createNewYellowPoint(1200, 300);
      createNewPinkPoint(1200, 300);
      createNewBluePoint(1200, 300);
    } // eslint-disable-next-line
  }, [isNewGame, width, height]);

  const createNewPinkPoint = (minDelay, maxDelay) => {
    createPinkPointIntervalId.current = setTimeout(() => {
      const id = nanoid();
      createPoint(setPinkPoints, id, width, height);
      deletePointLaterSomeTime(setPinkPoints, id, 3000);
      createNewPinkPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };
  const createNewYellowPoint = (minDelay, maxDelay) => {
    createYellowPointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(3, 0) === 2) {
        const id = nanoid();
        createPoint(setYellowPoints, id, width, height);
        deletePointLaterSomeTime(setYellowPoints, id, 3000);
      }
      createNewYellowPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const createNewBluePoint = (minDelay, maxDelay) => {
    createBluePointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(7, 0) === 3) {
        const id = nanoid();
        createPoint(setBluePoints, id, width, height);
        deletePointLaterSomeTime(setBluePoints, id, 3000);
      }
      createNewBluePoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const activatePinkstormSkill = () => {
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
          createPoint(setPinkPoints, id, width, height);
          deletePointLaterSomeTime(setPinkPoints, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  const activateBluestormSkill = () => {
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
          createPoint(setBluePoints, id, width, height);
          deletePointLaterSomeTime(setBluePoints, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  const activateYellowstormSkill = () => {
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
          createPoint(setYellowPoints, id, width, height);
          deletePointLaterSomeTime(setYellowPoints, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  return (
    <WrapperFieldGame>
      <WrapperSkills>
        <ItemSkills>
          <ButtonSkills
            color="rgb(234, 72, 132)"
            onClick={activatePinkstormSkill}
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
            onClick={activateBluestormSkill}
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
            onClick={activateYellowstormSkill}
          >
            <svg fill="rgb(216, 250, 67)" width="100%" height="100%">
              <use href={sprite + "#lightning"}></use>
            </svg>
          </ButtonSkills>
          <SkillsText>{store.yellowstorm}</SkillsText>
        </ItemSkills>
      </WrapperSkills>
      <FieldGame ref={fieldComponent}>
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
        {bluePoints?.map(({ id, x, y, size }) => (
          <BluePoint
            key={id}
            id={id}
            x={x}
            y={y}
            size={size}
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
    </WrapperFieldGame>
  );
};
export default Field;
