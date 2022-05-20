import StoreMenu from "./StoreMenu/StoreMenu";
import MainMenu from "./MainMenu/MainMenu";
import { Backdrop } from "./Menu.styles";

const Menu = ({ pathMenu, score, changePathMenu, startNewGame }) => {
  return (
    <Backdrop>
      {pathMenu === "menu" && (
        <MainMenu
          score={score}
          startNewGame={startNewGame}
          changePathMenu={changePathMenu}
        />
      )}
      {pathMenu === "store" && <StoreMenu changePathMenu={changePathMenu} />}
    </Backdrop>
  );
};

export default Menu;
