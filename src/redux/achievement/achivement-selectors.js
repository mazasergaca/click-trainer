const getAchievement = (state) => state.achievement.type;
const getTotalGames = (state) => state.achievement.type.totalGames.value;
const getTotalCoins = (state) => state.achievement.type.totalCoins.value;
const getRecord = (state) => state.achievement.type.record.value;

const achievementSelectors = {
  getAchievement,
  getTotalGames,
  getTotalCoins,
  getRecord,
};

export default achievementSelectors;
