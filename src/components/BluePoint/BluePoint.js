import { useState } from "react";
import { Point } from "./BluePoint.styles";

const PointBlue = ({ addsPoint, deleteOnClickBluePoint, id, x, y }) => {
  const [size, setSize] = useState(25);
  const [hp, setHp] = useState(5);

  const handleClick = () => {
    if (hp) {
      setHp((prev) => prev - 1);
      setSize((prev) => prev + 2);
    } else {
      deleteOnClickBluePoint(id);
    }

    addsPoint();
  };
  return <Point size={size} x={x} y={y} onClick={handleClick} />;
};
export default PointBlue;
