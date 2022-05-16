import { MenuNav, ItemMenu, ButtonMenu } from "../Menu.styles";

const MainMenu = ({ score, startNewGame, changePathMenu }) => {
  return (
    <MenuNav>
      <ItemMenu>Time is over</ItemMenu>
      <ItemMenu>You have {score} points </ItemMenu>
      <ButtonMenu onClick={startNewGame}>New game</ButtonMenu>
      <ButtonMenu onClick={() => changePathMenu("store")}>Store</ButtonMenu>
    </MenuNav>
  );
};

export default MainMenu;
