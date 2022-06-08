const getIsLoggedIn = (state) => state.user.isLoggedIn;

const getToken = (state) => state.user.token;

const getUser = (state) => state.user.user;

const getIsFetchingCurrentUser = (state) => state.user.isFetchingCurrentUser;

const userSelectors = {
  getIsLoggedIn,
  getToken,
  getIsFetchingCurrentUser,
  getUser,
};
export default userSelectors;
