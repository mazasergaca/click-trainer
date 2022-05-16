import { useState } from "react";
import useSound from "use-sound";
import bubbleSound from "../../assets/sounds/bubble-blue.mp3";
import { Point } from "./BluePoint.styles";

const PointBlue = ({ addsPoint, id, x, y, size: sizeProps, setBluePoints }) => {
  const [size, setSize] = useState(sizeProps);
  const [hp, setHp] = useState(5);

  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });

  const deleteBluePointOnClick = (id) => {
    setBluePoints((prev) => prev.filter((point) => point.id !== id));
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
