import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

import { getMaxDelay } from "../../utils/getMaxDelay";
import { getMinDelay } from "../../utils/getMinDelay";
import { getRandomNumber } from "../../utils/getRandomNumber";
import BluePoint from "../BluePoint";
import PinkPoint from "../PinkPoint/PinkPoint";
import YellowPoint from "../YellowPoint/YellowPoint";
import { FieldGame } from "./Field.styles";

const Field = ({ addsPoint, addsTime, isNewGame, time }) => {
  const [pinkPoints, setPinkPoints] = useState([]);
  const [bluePoints, setBluePoints] = useState([]);
  const [yellowPoints, setYellowPoints] = useState([]);

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
      createNewYellowPoint();
      createNewPinkPoint();
      createNewBluePoint();
    } // eslint-disable-next-line
  }, [isNewGame]);

  const createNewPinkPoint = () => {
    createPinkPointIntervalId.current = setTimeout(() => {
      const id = nanoid();
      setPinkPoints((prev) => [
        ...prev,
        {
          x: getRandomNumber(1400),
          y: getRandomNumber(600),
          id,
          size: getRandomNumber(45, 14),
        },
      ]);
      deletePointLaterSomeTime(setPinkPoints, id);
      createNewPinkPoint();
    }, getRandomNumber(1200, 300));
  };
  const createNewYellowPoint = () => {
    createYellowPointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(3, 0) === 2) {
        const id = nanoid();
        setYellowPoints((prev) => [
          ...prev,
          {
            x: getRandomNumber(1400),
            y: getRandomNumber(600),
            id,
            size: getRandomNumber(45, 14),
          },
        ]);
        deletePointLaterSomeTime(setYellowPoints, id);
      }
      createNewYellowPoint();
    }, getRandomNumber(1200, 300));
  };

  const createNewBluePoint = () => {
    createBluePointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(7, 0) === 3) {
        const id = nanoid();
        setBluePoints((prev) => [
          ...prev,
          {
            x: getRandomNumber(1400),
            y: getRandomNumber(600),
            id,
          },
        ]);
        deletePointLaterSomeTime(setBluePoints, id);
      }
      createNewBluePoint();
    }, getRandomNumber(getMaxDelay(), getMinDelay()));
  };
  const deletePointLaterSomeTime = (setPoints, id) => {
    setTimeout(() => {
      setPoints((prev) => prev.filter((point) => point.id !== id));
    }, 3000);
  };

  return (
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
  );
};
export default Field;
