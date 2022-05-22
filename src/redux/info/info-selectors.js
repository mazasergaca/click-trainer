const getName = (state) => state.info.name;
const getCoins = (state) => state.info.coins;
const getAchievementPoints = (state) => state.info.achievementPoints;
const getVolume = (state) => state.info.volume;

const infoSelectors = {
  getName,
  getCoins,
  getAchievementPoints,
  getVolume,
};
export default infoSelectors;
