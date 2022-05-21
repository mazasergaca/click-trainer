const getName = (state) => state.info.name;
const getCoins = (state) => state.info.coins;
const getBestResult = (state) => state.info.bestResult;
const getVolume = (state) => state.info.volume;

const infoSelectors = {
  getName,
  getCoins,
  getBestResult,
  getVolume,
};
export default infoSelectors;
