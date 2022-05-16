import StoreMenu from "./StoreMenu/StoreMenu";
import MainMenu from "./MainMenu/MainMenu";
import { Backdrop } from "./Menu.styles";

const Menu = ({
  pathMenu,
  score,
  coins,
  store,
  changePathMenu,
  startNewGame,
  priceStore,
  handleBuyPinkStorm,
  handleBuyBlueStorm,
  handleBuyYellowStorm,
}) => {
  return (
    <Backdrop>
      {pathMenu === "menu" && (
        <MainMenu
          score={score}
          startNewGame={startNewGame}
          changePathMenu={changePathMenu}
        />
      )}
      {pathMenu === "store" && (
        <StoreMenu
          changePathMenu={changePathMenu}
          priceStore={priceStore}
          coins={coins}
          handleBuyPinkStorm={handleBuyPinkStorm}
          handleBuyBlueStorm={handleBuyBlueStorm}
          handleBuyYellowStorm={handleBuyYellowStorm}
          store={store}
        />
      )}
    </Backdrop>
  );
};

export default Menu;
