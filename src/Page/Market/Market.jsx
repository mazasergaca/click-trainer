import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import shopSelectors from "../../redux/shop/shop-selectors";
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from "../../redux/base-api";
import useSound from "use-sound";
import sprite from "../../assets/images/sprite.svg";
import coin from "../../assets/images/coin.svg";
import buySound from "../../assets/sounds/buy.mp3";
import pressSound from "../../assets/sounds/start.mp3";
import Container from "../../components/Container/Container";
import {
  Wrapper,
  LinkStyled,
  ButtonStore,
  Item,
  Text,
  WrapperPrice,
  WrapperName,
  WrapperAmount,
} from "./Market.styles";

const Market = () => {
  const navigation = useNavigate();

  const volume = useSelector(userSelectors.getVolume);
  const [playBuySound] = useSound(buySound, { volume });
  const [playSound] = useSound(pressSound, { volume });

  const shop = useSelector(shopSelectors.getShop);
  const { data: user } = useGetCurrentUserQuery();

  const [updateUser] = useUpdateUserMutation();

  const handleBuyPinkStorm = async () => {
    if (user.coins >= shop.pinkstorm.price) {
      try {
        await updateUser({
          coins: user.coins - shop.pinkstorm.price,
          skills: { ...user.skills, pinkstorm: user.skills.pinkstorm + 1 },
        });
        playBuySound();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleBuyBlueStorm = async () => {
    if (user.coins >= shop.bluestorm.price) {
      try {
        await updateUser({
          coins: user.coins - shop.bluestorm.price,
          skills: { ...user.skills, bluestorm: user.skills.bluestorm + 1 },
        });
        playBuySound();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleBuyYellowStorm = async () => {
    if (user.coins >= shop.yellowstorm.price) {
      try {
        await updateUser({
          coins: user.coins - shop.yellowstorm.price,
          skills: { ...user.skills, yellowstorm: user.skills.yellowstorm + 1 },
        });
        playBuySound();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onCickGoBack = () => {
    navigation("/menu");
  };
  return (
    <Container>
      <Wrapper>
        <LinkStyled to="/menu" onClick={playSound}>
          ᐊ
        </LinkStyled>
        <Item>
          <WrapperName>
            <svg fill="rgb(234, 72, 132)" width={40} height={40}>
              <use href={sprite + "#lightning"}></use>
            </svg>
            Pinkstorm
          </WrapperName>
          <WrapperPrice>
            {shop.pinkstorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperAmount>
            <Text>{user?.skills.pinkstorm}</Text>
            <ButtonStore
              type="button"
              disabled={user?.coins < shop.pinkstorm.price}
              onClick={handleBuyPinkStorm}
            >
              buy
            </ButtonStore>
          </WrapperAmount>
        </Item>
        <Item>
          <WrapperName>
            <svg fill="rgb(14, 180, 201)" width={40} height={40}>
              <use href={sprite + "#lightning"}></use>
            </svg>
            Bluestorm
          </WrapperName>
          <WrapperPrice>
            {shop.bluestorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperAmount>
            <Text>{user?.skills.bluestorm}</Text>
            <ButtonStore
              type="button"
              disabled={user?.coins < shop.bluestorm.price}
              onClick={handleBuyBlueStorm}
            >
              buy
            </ButtonStore>
          </WrapperAmount>
        </Item>
        <Item>
          <WrapperName>
            <svg fill="rgb(216, 250, 67)" width={40} height={40}>
              <use href={sprite + "#lightning"}></use>
            </svg>
            Yellowstorm
          </WrapperName>
          <WrapperPrice>
            {shop.yellowstorm.price}
            <img src={coin} alt="coin" width="30px" />
          </WrapperPrice>
          <WrapperAmount>
            <Text>{user?.skills.yellowstorm}</Text>
            <ButtonStore
              type="button"
              disabled={user?.coins < shop.yellowstorm.price}
              onClick={handleBuyYellowStorm}
            >
              buy
            </ButtonStore>
          </WrapperAmount>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Market;
