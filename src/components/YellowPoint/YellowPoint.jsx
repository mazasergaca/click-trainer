import useSound from "use-sound";
import bubbleSound from "../../assets/sounds/bubble-yellow.mp3";

import { Point } from "./YellowPoint.styles";

const YellowPoint = ({ size, x, y, id, setYellowPoints, addsTime }) => {
  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });

  const deleteYellowPointOnClick = (id) => {
    setYellowPoints((prev) => prev.filter((point) => point.id !== id));
  };

  const handleClick = () => {
    addsTime(1);
    playBubbleSound();
    deleteYellowPointOnClick(id);
  };

  return <Point size={size} y={y} x={x} onClick={handleClick} />;
};

export default YellowPoint;
