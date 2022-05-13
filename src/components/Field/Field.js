import BluePoint from "../BluePoint";
import { FieldGame, PinkPoint } from "./Field.styles";

const Field = ({
  pinkPoints,
  bluePoints,
  deleteOnClickPinkPoint,
  deleteOnClickBluePoint,
  addsPoint,
}) => {
  const handleClick = (id) => {
    deleteOnClickPinkPoint(id);
    addsPoint();
  };
  return (
    <FieldGame>
      {pinkPoints?.map(({ id, x, y, size }) => (
        <PinkPoint
          key={id}
          x={x}
          y={y}
          size={size}
          onClick={() => handleClick(id)}
        />
      ))}
      {bluePoints?.map(({ id, x, y }) => (
        <BluePoint
          key={id}
          addsPoint={addsPoint}
          deleteOnClickBluePoint={deleteOnClickBluePoint}
          id={id}
          x={x}
          y={y}
        />
      ))}
    </FieldGame>
  );
};
export default Field;
