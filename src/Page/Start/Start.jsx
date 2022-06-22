import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import userSelectors from "../../redux/user/user-selectors";
import pressSound from "../../assets/sounds/start.mp3";
import Loader from "../../components/Loader/Loader";
import sprite from "../../assets/images/sprite.svg";
import {
  Backdrop,
  Wrapper,
  LinkStyled,
  Text,
  Title,
  Svg,
} from "./Start.styles";

const StartPage = () => {
  const token = useSelector(userSelectors.getToken);
  const username = useSelector(userSelectors.getUsername);
  const isFetchingCurrentUser = useSelector(
    userSelectors.getIsFetchingCurrentUser
  );

  const volume = useSelector(userSelectors.getVolume);

  const [playSound] = useSound(pressSound, { volume });

  return (
    <>
      <Helmet>
        <title>Clickstorm</title>
      </Helmet>
      <Backdrop>
        {!isFetchingCurrentUser ? (
          <Wrapper>
            <Title>
              <span>Cl</span>
              ck storm
              <Svg>
                <use href={sprite + "#lightning"}></use>
              </Svg>
            </Title>
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
        ) : (
          <Loader />
        )}
      </Backdrop>
    </>
  );
};

export default StartPage;
