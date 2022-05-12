import { FieldGame, Point } from "./Field.styles";

const Field = ({ points, onClick }) => {
  return (
    <FieldGame>
      {points.map((point) => (
        <Point
          key={point.id}
          x={point.x}
          y={point.y}
          onClick={() => onClick(point.id)}
        />
      ))}
    </FieldGame>
  );
};
export default Field;
