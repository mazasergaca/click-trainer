import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RoutesComponent from "./components/Routes/Routes";
import { useFetchCurrentUserMutation } from "./redux/base-api";
import userSelectors from "./redux/user/user-selectors";
import { GLobalStyles } from "./styles/global";
import Volume from "./components/Volume/Volume";

const App = () => {
  const token = useSelector(userSelectors.getToken);

  const [fetchCurrentUser] = useFetchCurrentUserMutation();
  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    }
  }, [token]);

  return (
    <>
      <GLobalStyles />
      <RoutesComponent />
      <Volume />
    </>
  );
};

export default App;
