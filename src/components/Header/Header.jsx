import React from "react";
import { useGetCurrentUserQuery } from "../../redux/base-api";
import coin from "../../assets/images/coin.svg";
import {
  Container,
  Wrapper,
  WrapperRecord,
  WrapperItems,
  Item,
  Time,
  CoinImage,
} from "./Header.styles";

const Header = ({ time, score }) => {
  const { data: user } = useGetCurrentUserQuery();

  return (
    <Container>
      <WrapperRecord>
        <Item>My record:</Item>
        <Item>{user?.achievements.recordScore.value}</Item>
      </WrapperRecord>
      <Time>{time}</Time>
      <Wrapper>
        <WrapperItems>
          <Item>Coins: {user?.coins}</Item>
          <CoinImage src={coin} alt="coin" />
        </WrapperItems>
        <WrapperItems>Score:{score}</WrapperItems>
      </Wrapper>
    </Container>
  );
};

export default Header;
