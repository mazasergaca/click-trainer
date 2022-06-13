import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import useSound from "use-sound";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from "../../redux/base-api";
import userSelectors from "../../redux/user/user-selectors";
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
import BluePoint from "../Points/BluePoint";
import PinkPoint from "../Points/PinkPoint";
import YellowPoint from "../Points/YellowPoint";
import { FieldGame, WrapperFieldGame } from "./Field.styles";

const Field = ({ addsPoint, addsTime, isNewGame, time }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [cdPinkstorm, setCdPinkstorm] = useState(0);
  const [cdBluestorm, setCdBluestorm] = useState(0);
  const [cdYellowstorm, setCdYellowstorm] = useState(0);
  const volume = useSelector(userSelectors.getVolume);
  const [playSkillSound] = useSound(skillSound, { volume });

  const { data: user } = useGetCurrentUserQuery();
  const [updateUser] = useUpdateUserMutation();

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
    }; // eslint-disable-next-line
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
      setCdPinkstorm(0);
      setCdBluestorm(0);
      setCdYellowstorm(0);
      dispatch(clearAllPoints());
    } // eslint-disable-next-line
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

  const activatePinkstormSkill = async () => {
    if (user?.skills.pinkstorm > 0) {
      playSkillSound();
      await updateUser({
        skills: { ...user.skills, pinkstorm: user.skills.pinkstorm - 1 },
      });
      setCdPinkstorm(30);
      startsCooldown(setCdPinkstorm);
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const id = nanoid();
          const newPoint = createPoint(id, width, height);
          dispatch(createPinkPoint(newPoint));
          deletePointLaterSomeTime(dispatch, deletePinkPoint, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  const activateBluestormSkill = async () => {
    if (user?.skills.bluestorm > 0) {
      playSkillSound();
      await updateUser({
        skills: { ...user.skills, bluestorm: user.skills.bluestorm - 1 },
      });
      setCdBluestorm(30);
      startsCooldown(setCdBluestorm);
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const id = nanoid();
          const newPoint = createPoint(id, width, height);
          dispatch(createBluePoint(newPoint));
          deletePointLaterSomeTime(dispatch, deleteBluePoint, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  const activateYellowstormSkill = async () => {
    if (user?.skills.yellowstorm > 0) {
      playSkillSound();
      await updateUser({
        skills: { ...user.skills, yellowstorm: user.skills.yellowstorm - 1 },
      });
      setCdYellowstorm(30);
      startsCooldown(setCdYellowstorm);
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const id = nanoid();
          const newPoint = createPoint(id, width, height);
          dispatch(createYellowPoint(newPoint));
          deletePointLaterSomeTime(dispatch, deleteYellowPoint, id, 10000);
        }, getRandomNumber(1100));
      }
    }
  };

  return (
    <WrapperFieldGame>
      <Skills
        user={user}
        cdPinkstorm={cdPinkstorm}
        cdBluestorm={cdBluestorm}
        cdYellowstorm={cdYellowstorm}
        activatePinkstormSkill={activatePinkstormSkill}
        activateBluestormSkill={activateBluestormSkill}
        activateYellowstormSkill={activateYellowstormSkill}
      />
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
