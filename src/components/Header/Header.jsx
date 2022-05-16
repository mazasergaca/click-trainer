import coin from "../../assets/images/coin.svg";
import {
  Container,
  Wrapper,
  WrapperItems,
  Item,
  Time,
  Coins,
  CoinImage,
} from "./Header.styles";

const Header = ({ bestResult, time, coins, score }) => {
  return (
    <Container>
      <WrapperItems>
        <Item>My record:</Item>
        <Item>{bestResult}</Item>
      </WrapperItems>
      <Time>{time}</Time>
      <Wrapper>
        <WrapperItems>
          <Item>Coins:</Item>
          {coins}
          <CoinImage src={coin} alt="coin" />
        </WrapperItems>
        <WrapperItems>Score:{score}</WrapperItems>
      </Wrapper>
    </Container>
  );
};

export default Header;
