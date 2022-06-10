import React from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import userSelectors from "../../redux/user/user-selectors";
import pressSound from "../../assets/sounds/start.mp3";
import { Backdrop, Wrapper, LinkStyled, Text } from "./Start.styles";

const StartPage = () => {
  const token = useSelector(userSelectors.getToken);
  const username = useSelector(userSelectors.getUsername);
  const isFetchingCurrentUser = useSelector(
    userSelectors.getIsFetchingCurrentUser
  );

  const volume = useSelector(userSelectors.getVolume);

  const [playSound] = useSound(pressSound, { volume });

  return (
    <Backdrop>
      {!isFetchingCurrentUser && (
        <Wrapper>
          {token ? (
            <>
              <Text>Hello, {username}</Text>
              <LinkStyled to="menu" onClick={playSound}>
                Start
              </LinkStyled>
            </>
          ) : (
            <>
              <LinkStyled to="/login" onClick={playSound}>
                Login
              </LinkStyled>
              <LinkStyled to="/registration" onClick={playSound}>
                Registration
              </LinkStyled>
            </>
          )}
        </Wrapper>
      )}
    </Backdrop>
  );
};

export default StartPage;
