import useSound from "use-sound";
import bubbleSound from "../../assets/sounds/bubble-pink.mp3";

import { Point } from "./PinkPoint.styles";

const PinkPoint = ({ x, y, size, id, setPinkPoints, addsPoint }) => {
  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });

  const deletePinkPointOnClick = (id) => {
    setPinkPoints((prev) => prev.filter((point) => point.id !== id));
  };

  const handleClick = () => {
    playBubbleSound();
    addsPoint();
    deletePinkPointOnClick(id);
  };

  return <Point x={x} y={y} size={size} onClick={handleClick} />;
};

export default PinkPoint;
