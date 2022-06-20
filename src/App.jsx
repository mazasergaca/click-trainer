import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RoutesComponent from "./components/Routes/Routes";
import { useFetchCurrentUserMutation } from "./redux/base-api";
import userSelectors from "./redux/user/user-selectors";
import { GLobalStyles } from "./styles/global";
import ErrorWrapper from "./components/ErrorWrapper/ErrorWrapper";

const App = () => {
  const token = useSelector(userSelectors.getToken);

  const [fetchCurrentUser] = useFetchCurrentUserMutation();
  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    } //eslint-disable-next-line
  }, [token]);

  return (
    <>
      <GLobalStyles />
      <ErrorWrapper>
        <RoutesComponent />
      </ErrorWrapper>
    </>
  );
};

export default App;
