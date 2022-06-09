import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import useSound from "use-sound";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteBluestorm,
  deletePinkstorm,
  deleteYellowstorm,
} from "../../redux/shop/shop-slice";
import infoSelectors from "../../redux/info/info-selectors";
import shopSelectors from "../../redux/shop/shop-selectors";
import pointsSelectors from "../../redux/points/points-selectors";
import {
  createPinkPoint,
  deletePinkPoint,
  createBluePoint,
  deleteBluePoint,
  createYellowPoint,
  deleteYellowPoint,
  clearAllPoints,
} from "../../redux/points/points-slice";
import { deletePointLaterSomeTime } from "../../utils/deletePointLaterSomeTime";
import { createPoint } from "../../utils/createPoint";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { startsCooldown } from "../../utils/startsCooldown";
import skillSound from "../../assets/sounds/skill.mp3";
import Skills from "../Skills/Skills";
import BluePoint from "../BluePoint";
import PinkPoint from "../PinkPoint/PinkPoint";
import YellowPoint from "../YellowPoint/YellowPoint";
import { FieldGame, WrapperFieldGame } from "./Field.styles";

const Field = ({ addsPoint, addsTime, isNewGame, time }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  // const [cdPinkstorm, setCdPinkstorm] = useState(0);
  // const [cdBluestorm, setCdBluestorm] = useState(0);
  // const [cdYellowstorm, setCdYellowstorm] = useState(0);
  // const volume = useSelector(infoSelectors.getVolume);
  // const [playSkillSound] = useSound(skillSound, { volume });

  // const shop = useSelector(shopSelectors.getShop);
  const pinkPoints = useSelector(pointsSelectors.getPinkPoints);
  const bluePoints = useSelector(pointsSelectors.getBluePoints);
  const yellowPoints = useSelector(pointsSelectors.getYellowPoints);

  const dispatch = useDispatch();

  let fieldComponent = useRef(null);
  let createPinkPointIntervalId = useRef(null);
  let createBluePointIntervalId = useRef(null);
  let createYellowPointIntervalId = useRef(null);

  useEffect(() => {
    return () => {
      dispatch(clearAllPoints());
      clearInterval(createPinkPointIntervalId.current);
      clearInterval(createBluePointIntervalId.current);
      clearInterval(createYellowPointIntervalId.current);
    };
  }, []);

  useEffect(() => {
    if (fieldComponent?.current) {
      setHeight(
        Math.floor(fieldComponent.current.getBoundingClientRect().height) - 45
      );
      setWidth(
        Math.floor(fieldComponent.current.getBoundingClientRect().width) - 65
      );
    }
  }, [fieldComponent]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(createPinkPointIntervalId.current);
      clearInterval(createBluePointIntervalId.current);
      clearInterval(createYellowPointIntervalId.current);
      // setCdPinkstorm(0);
      // setCdBluestorm(0);
      // setCdYellowstorm(0);
      dispatch(clearAllPoints());
    }
  }, [time]);

  useEffect(() => {
    if (isNewGame && height && width) {
      createNewPinkPoint(1200, 300);
      createNewBluePoint(1200, 300);
      createNewYellowPoint(1200, 300);
    } // eslint-disable-next-line
  }, [isNewGame, width, height]);

  const createNewPinkPoint = (minDelay, maxDelay) => {
    createPinkPointIntervalId.current = setTimeout(() => {
      const id = nanoid();
      const newPoint = createPoint(id, width, height);
      dispatch(createPinkPoint(newPoint));

      deletePointLaterSomeTime(dispatch, deletePinkPoint, id, 3000);
      createNewPinkPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const createNewBluePoint = (minDelay, maxDelay) => {
    createBluePointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(7, 0) === 3) {
        const id = nanoid();
        const newPoint = createPoint(id, width, height);
        dispatch(createBluePoint(newPoint));
        deletePointLaterSomeTime(dispatch, deleteBluePoint, id, 3000);
      }
      createNewBluePoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const createNewYellowPoint = (minDelay, maxDelay) => {
    createYellowPointIntervalId.current = setTimeout(() => {
      if (getRandomNumber(3, 0) === 2) {
        const id = nanoid();
        const newPoint = createPoint(id, width, height);
        dispatch(createYellowPoint(newPoint));
        deletePointLaterSomeTime(dispatch, deleteYellowPoint, id, 3000);
      }
      createNewYellowPoint(maxDelay, minDelay);
    }, getRandomNumber(maxDelay, minDelay));
  };

  const activatePinkstormSkill = () => {
    // if (shop.pinkstorm.amount > 0) {
    //   // playSkillSound();
    //   dispatch(deletePinkstorm());
    //   setCdPinkstorm(30);
    //   startsCooldown(setCdPinkstorm);
    //   for (let i = 0; i < 30; i++) {
    //     setTimeout(() => {
    //       const id = nanoid();
    //       const newPoint = createPoint(id, width, height);
    //       dispatch(createPinkPoint(newPoint));
    //       deletePointLaterSomeTime(dispatch, deletePinkPoint, id, 10000);
    //     }, getRandomNumber(1100));
    //   }
    // }
  };

  const activateBluestormSkill = () => {
    // if (shop.bluestorm.amount > 0) {
    //   // playSkillSound();
    //   dispatch(deleteBluestorm());
    //   setCdBluestorm(30);
    //   startsCooldown(setCdBluestorm);
    //   for (let i = 0; i < 30; i++) {
    //     setTimeout(() => {
    //       const id = nanoid();
    //       const newPoint = createPoint(id, width, height);
    //       dispatch(createBluePoint(newPoint));
    //       deletePointLaterSomeTime(dispatch, deleteBluePoint, id, 10000);
    //     }, getRandomNumber(1100));
    //   }
    // }
  };

  const activateYellowstormSkill = () => {
    // if (shop.yellowstorm.amount > 0) {
    //   // playSkillSound();
    //   dispatch(deleteYellowstorm());
    //   setCdYellowstorm(30);
    //   startsCooldown(setCdYellowstorm);
    //   for (let i = 0; i < 30; i++) {
    //     setTimeout(() => {
    //       const id = nanoid();
    //       const newPoint = createPoint(id, width, height);
    //       dispatch(createYellowPoint(newPoint));
    //       deletePointLaterSomeTime(dispatch, deleteYellowPoint, id, 10000);
    //     }, getRandomNumber(1100));
    //   }
    // }
  };

  return (
    <WrapperFieldGame>
      {/* <Skills
        shop={shop}
        cdPinkstorm={cdPinkstorm}
        cdBluestorm={cdBluestorm}
        cdYellowstorm={cdYellowstorm}
        activatePinkstormSkill={activatePinkstormSkill}
        activateBluestormSkill={activateBluestormSkill}
        activateYellowstormSkill={activateYellowstormSkill}
      /> */}
      <FieldGame ref={fieldComponent}>
        {pinkPoints?.map(({ id, x, y, size }) => (
          <PinkPoint
            key={id}
            id={id}
            x={x}
            y={y}
            size={size}
            addsPoint={addsPoint}
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
          />
        ))}
      </FieldGame>
    </WrapperFieldGame>
  );
};
export default Field;
