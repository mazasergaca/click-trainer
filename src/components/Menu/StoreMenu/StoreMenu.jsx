import sprite from "../../../assets/images/sprite.svg";
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

const StoreMenu = ({
  changePathMenu,
  priceStore,
  coins,
  store,
  handleBuyPinkStorm,
  handleBuyBlueStorm,
  handleBuyYellowStorm,
}) => {
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
            {priceStore.pricePinkstorm}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{store.pinkstorm}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < priceStore.pricePinkstorm}
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
            {priceStore.priceBluestorm}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{store.bluestorm}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < priceStore.priceBluestorm}
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
            {priceStore.priceYellowstorm}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperStoreItem>
            <StoreText>{store.yellowstorm}</StoreText>
            <ButtonStore
              type="button"
              disabled={coins < priceStore.priceYellowstorm}
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
