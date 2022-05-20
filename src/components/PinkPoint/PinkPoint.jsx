import { useDispatch } from "react-redux";
import useSound from "use-sound";
import { deletePinkPoint } from "../../redux/points/points-slice";
import bubbleSound from "../../assets/sounds/bubble-pink.mp3";

import { Point } from "./PinkPoint.styles";

const PinkPoint = ({ x, y, size, id, addsPoint }) => {
  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });

  const dispatch = useDispatch();

  const deletePinkPointOnClick = (id) => {
    dispatch(deletePinkPoint(id));
  };

  const handleClick = () => {
    playBubbleSound();
    addsPoint();
    deletePinkPointOnClick(id);
  };

  return <Point x={x} y={y} size={size} onClick={handleClick} />;
};

export default PinkPoint;
