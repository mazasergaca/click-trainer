import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../../redux/user/user-slice";
import userSelectors from "../../redux/user/user-selectors";
import pressSound from "../../assets/sounds/start.mp3";
import Container from "../../components/Container/Container";
import { Wrapper, Button } from "./Menu.styles";

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
    dispatch(resetToken());
  };
  return (
    <Container>
      <Wrapper>
        <Button onClick={() => handleClick("/game")}>New game</Button>
        <Button onClick={() => handleClick("/market")}>Market</Button>
        <Button onClick={() => handleClick("/achievement")}>Achievement</Button>
        <Button onClick={onClickLogout}>Logout</Button>
      </Wrapper>
    </Container>
  );
};

export default Menu;
