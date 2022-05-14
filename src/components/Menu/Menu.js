import { Backdrop, WrapperNav, ButtonMenu } from "./Menu.styles";

const GameMenu = ({ startGame }) => {
  return (
    <Backdrop>
      <WrapperNav>
        <ButtonMenu onClick={startGame}>Start</ButtonMenu>
      </WrapperNav>
    </Backdrop>
  );
};

export default GameMenu;
