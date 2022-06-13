import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSelectors from "../../../redux/user/user-selectors";
import useSound from "use-sound";
import { deleteBluePoint } from "../../../redux/points/points-slice";
import bubbleSound from "../../../assets/sounds/bubble-blue.mp3";
import { Point } from "./BluePoint.styles";

const PointBlue = ({ addsPoint, id, x, y, size: sizeProps }) => {
  const [size, setSize] = useState(sizeProps);
  const [hp, setHp] = useState(5);
  const volume = useSelector(userSelectors.getVolume);

  const [playBubbleSound] = useSound(bubbleSound, { volume });

  const dispatch = useDispatch();

  const deleteBluePointOnClick = (id) => {
    dispatch(deleteBluePoint(id));
  };

  const handleClick = () => {
    if (hp) {
      setHp((prev) => prev - 1);
      setSize((prev) => prev + 2);
    } else {
      deleteBluePointOnClick(id);
    }
    playBubbleSound();
    addsPoint();
  };
  return <Point size={size} x={x} y={y} onClick={handleClick} />;
};
export default PointBlue;
