const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUsername = (state) => state.user.username;
const getToken = (state) => state.user.token;
const getIsFetchingCurrentUser = (state) => state.user.isFetchingCurrentUser;
const getVolume = (state) => state.user.volume;

const userSelectors = {
  getIsLoggedIn,
  getToken,
  getIsFetchingCurrentUser,
  getVolume,
  getUsername,
};
export default userSelectors;
