import React from "react";
import Field from "../../components/Field/Field";
import {
  Container,
  WrapperInfo,
  Item,
  Menu,
  Backdrop,
  ItemMenu,
  ButtonStart,
} from "./Game.styles";

const Game = ({
  pinkPoints,
  bluePoints,
  time,
  score,
  bestResult,
  isNewGame,
  newGame,
  addsPoint,
  deleteOnClickPinkPoint,
  deleteOnClickBluePoint,
}) => {
  return (
    <Container>
      <WrapperInfo>
        <Item>My record {bestResult}</Item>
        <Item>{time}</Item>
        <Item>Score: {score}</Item>
      </WrapperInfo>
      <Field
        addsPoint={addsPoint}
        pinkPoints={pinkPoints}
        bluePoints={bluePoints}
        deleteOnClickPinkPoint={deleteOnClickPinkPoint}
        deleteOnClickBluePoint={deleteOnClickBluePoint}
      />
      <Backdrop isNewGame={isNewGame}>
        <Menu>
          <ItemMenu>Time is over</ItemMenu>
          <ItemMenu>You have {score} points </ItemMenu>
          <ButtonStart onClick={newGame}>New game</ButtonStart>
        </Menu>
      </Backdrop>
    </Container>
  );
};
export default Game;
