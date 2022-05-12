import React from "react";
import Field from "../../components/Field/Field";
import { Container, WrapperInfo, Score } from "./Game.styles";

const Game = ({ points, onClick, score }) => {
  return (
    <Container>
      <WrapperInfo>
        <Score>Score: {score}</Score>
      </WrapperInfo>
      <Field points={points} onClick={onClick} />
    </Container>
  );
};
export default Game;
