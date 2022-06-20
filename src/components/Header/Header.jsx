import React from "react";
import { useGetCurrentUserQuery } from "../../redux/base-api";
import { GiTwoCoins } from "react-icons/gi";
import {
  Container,
  Wrapper,
  WrapperRecord,
  WrapperItems,
  Item,
  Time,
  Coins,
} from "./Header.styles";

const Header = ({ time, score }) => {
  const { data: user } = useGetCurrentUserQuery();

  return (
    <Container>
      <WrapperRecord>
        <Item>My record: </Item>
        <Item>{user?.achievements.recordScore.value}</Item>
      </WrapperRecord>
      <Time>{time}</Time>
      <Wrapper>
        <WrapperItems>
          <Coins>{user?.coins}</Coins>
          <GiTwoCoins size={32} color="#ffdf44" />
        </WrapperItems>
        <WrapperItems>Score: {score}</WrapperItems>
      </Wrapper>
    </Container>
  );
};

export default Header;
