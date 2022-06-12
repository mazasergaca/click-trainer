import React from "react";
import { useSelector } from "react-redux/es/exports";
import useSound from "use-sound";
import pressSound from "../../assets/sounds/start.mp3";
import Container from "../../components/Container/Container";
import userSelectors from "../../redux/user/user-selectors";
import Volume from "../../components/Volume/Volume";
import { LinkStyled, Wrapper, Item, Name } from "./Settings.style";

const Settings = () => {
  const volume = useSelector(userSelectors.getVolume);
  const [playSound] = useSound(pressSound, { volume });
  return (
    <Container>
      <Wrapper>
        <LinkStyled to="/menu" onClick={playSound}>
          ᐊ
        </LinkStyled>
        <Item>
          <Name>Volume</Name>
          <Volume />
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Settings;
