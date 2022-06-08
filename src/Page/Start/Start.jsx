import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import { useFetchCurrentUserMutation } from "../../redux/base-api";
import { Backdrop, Wrapper, LinkStyled, Text } from "./Start.styles";

const StartPage = () => {
  const token = useSelector(userSelectors.getToken);
  const user = useSelector(userSelectors.getUser);
  const [fetchCurrentUser, { isLoading }] = useFetchCurrentUserMutation();
  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    }
  }, [token]);

  return (
    <Backdrop>
      <Wrapper>
        {token ? (
          <>
            {!isLoading && (
              <>
                <Text>Hello, {user?.username}</Text>
                <LinkStyled to="menu">Start</LinkStyled>
              </>
            )}
          </>
        ) : (
          <>
            <LinkStyled to="/login">Login</LinkStyled>
            <LinkStyled to="/registration">Registration</LinkStyled>
          </>
        )}
      </Wrapper>
    </Backdrop>
  );
};

export default StartPage;
