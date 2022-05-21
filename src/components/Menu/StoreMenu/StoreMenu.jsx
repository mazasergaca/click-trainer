import { useSelector, useDispatch } from "react-redux";
import useSound from "use-sound";
import infoSelectors from "../../../redux/info/info-selects";
import { decrementCoins } from "../../../redux/info/info-slice";
import shopSelectors from "../../../redux/shop/shop-selectors";
import {
  addPinkstorm,
  addBluestorm,
  addYellowstorm,
} from "../../../redux/shop/shop-slice";
import sprite from "../../../assets/images/sprite.svg";
import buySound from "../../../assets/sounds/buy.mp3";
import coin from "../../../assets/images/coin.svg";
import {
  ButtonMenu,
  ContainerStore,
  StoreItem,
  ButtonStore,
  WrapperStoreItem,
  StoreText,
  FlexWrapper,
  WrapperPrice,
} from "../Menu.styles";

const StoreMenu = ({ changePathMenu }) => {
  const volume = useSelector(infoSelectors.getVolume);
  const [playBuySound] = useSound(buySound, { volume });

  const shop = useSelector(shopSelectors.getShop);
  const coins = useSelector(infoSelectors.getCoins);

  const dispatch = useDispatch();

  const handleBuyPinkStorm = () => {
    if (coins >= shop.pinkstorm.price) {
      playBuySound();
      dispatch(decrementCoins(shop.pinkstorm.price));
      dispatch(addPinkstorm());
    }
  };

  const handleBuyBlueStorm = () => {
    if (coins >= shop.bluestorm.price) {
      playBuySound();
      dispatch(decrementCoins(shop.bluestorm.price));
      dispatch(addBluestorm());
    }
  };

  const handleBuyYellowStorm = () => {
    if (coins >= shop.yellowstorm.price) {
      playBuySound();
      dispatch(decrementCoins(shop.yellowstorm.price));
      dispatch(addYellowstorm());
    }
  };
  return (
    <ContainerStore>
      <ButtonMenu onClick={() => changePathMenu("menu")}>back</ButtonMenu>
      <StoreItem>
        <WrapperStoreItem>
          <svg fill="rgb(234, 72, 132)" width={40} height={40}>
            <use href={sprite + "#lightning"}></use>
          </svg>
          Pinkstorm
        </WrapperStoreItem>
        <FlexWrapper>
          <WrapperPrice>
            {shop.pinkstorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{shop.pinkstorm.amount}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < shop.pinkstorm.price}
              onClick={handleBuyPinkStorm}
            >
              buy
            </ButtonStore>
          </WrapperStoreItem>
        </FlexWrapper>
      </StoreItem>
      <StoreItem>
        <WrapperStoreItem>
          <svg fill="rgb(14, 180, 201)" width={40} height={40}>
            <use href={sprite + "#lightning"}></use>
          </svg>
          Bluestorm
        </WrapperStoreItem>
        <FlexWrapper>
          <WrapperPrice>
            {shop.bluestorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{shop.bluestorm.amount}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < shop.bluestorm.price}
              onClick={handleBuyBlueStorm}
            >
              buy
            </ButtonStore>
          </WrapperStoreItem>
        </FlexWrapper>
      </StoreItem>
      <StoreItem>
        <WrapperStoreItem>
          <svg fill="rgb(216, 250, 67)" width={40} height={40}>
            <use href={sprite + "#lightning"}></use>
          </svg>
          Yellowstorm
        </WrapperStoreItem>
        <FlexWrapper>
          <WrapperPrice>
            {shop.yellowstorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{shop.yellowstorm.amount}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < shop.yellowstorm.price}
              onClick={handleBuyYellowStorm}
            >
              buy
            </ButtonStore>
          </WrapperStoreItem>
        </FlexWrapper>
      </StoreItem>
    </ContainerStore>
  );
};
export default StoreMenu;
