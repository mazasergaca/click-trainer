import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import pressSound from "../../assets/sounds/start.mp3";
import userSelectors from "../../redux/user/user-selectors";
import { Backdrop, ButtonMenu, ItemMenu, MenuNav } from "./ModalGame.styles";

const Menu = ({ score, startNewGame }) => {
  const volume = useSelector(userSelectors.getVolume);

  const [playSound] = useSound(pressSound, { volume });

  const navigation = useNavigate();

  const handleClickBackToMenu = () => {
    playSound();
    navigation("/menu");
  };

  return (
    <Backdrop>
      <MenuNav>
        <ItemMenu>Time is over</ItemMenu>
        <ItemMenu>You have {score} points </ItemMenu>
        <ButtonMenu onClick={startNewGame}>New game</ButtonMenu>
        <ButtonMenu onClick={handleClickBackToMenu}>Back to menu</ButtonMenu>
      </MenuNav>
    </Backdrop>
  );
};

export default Menu;
