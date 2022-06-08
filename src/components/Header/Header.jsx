import { useSelector } from "react-redux";
import infoSelectors from "../../redux/info/info-selectors";
import { useGetUserByIdQuery } from "../../redux/info/info-api";
import achievementSelectors from "../../redux/achievement/achivement-selectors";
import coin from "../../assets/images/coin.svg";
import {
  Container,
  Wrapper,
  WrapperItems,
  Item,
  Time,
  CoinImage,
} from "./Header.styles";

const Header = ({ time, score }) => {
  // const coins = useSelector(infoSelectors.getCoins);
  const bestResult = useSelector(achievementSelectors.getRecord);

  const { data } = useGetUserByIdQuery("629e04c2691be3ea75c53ecd");
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
          {data?.coins}
          <CoinImage src={coin} alt="coin" />
        </WrapperItems>
        <WrapperItems>Score:{score}</WrapperItems>
      </Wrapper>
    </Container>
  );
};

export default Header;
