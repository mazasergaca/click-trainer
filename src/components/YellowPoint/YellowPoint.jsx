import useSound from "use-sound";
import { useDispatch } from "react-redux";
import { deleteYellowPoint } from "../../redux/points/points-slice";
import bubbleSound from "../../assets/sounds/bubble-yellow.mp3";

import { Point } from "./YellowPoint.styles";

const YellowPoint = ({ size, x, y, id, addsTime }) => {
  const [playBubbleSound] = useSound(bubbleSound, { volume: 0.4 });

  const dispatch = useDispatch();

  const deleteYellowPointOnClick = (id) => {
    dispatch(deleteYellowPoint(id));
  };

  const handleClick = () => {
    addsTime(1);
    playBubbleSound();
    deleteYellowPointOnClick(id);
  };

  return <Point size={size} y={y} x={x} onClick={handleClick} />;
};

export default YellowPoint;
