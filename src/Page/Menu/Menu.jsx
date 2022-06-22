import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/user/user-slice";
import userSelectors from "../../redux/user/user-selectors";
import pressSound from "../../assets/sounds/start.mp3";
import Container from "../../components/Container/Container";
import { Wrapper, Button, Title } from "./Menu.styles";

const Menu = () => {
  const volume = useSelector(userSelectors.getVolume);

  const [playSound] = useSound(pressSound, { volume });

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (path) => {
    playSound();
    navigation(path);
  };

  const onClickLogout = () => {
    playSound();
    dispatch(logout());
  };
  return (
    <>
      <Helmet>
        <title>Clickstorm | Menu</title>
      </Helmet>
      <Container>
        <Wrapper>
          <Title>Menu</Title>
          <Button onClick={() => handleClick("/game")}>New game</Button>
          <Button onClick={() => handleClick("/market")}>Market</Button>
          <Button onClick={() => handleClick("/achievement")}>
            Achievement
          </Button>
          <Button onClick={() => handleClick("/Settings")}>Settings</Button>
          <Button onClick={onClickLogout}>Logout</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
