const getName = (state) => state.info.name;
const getCoins = (state) => state.info.coins;
const getBestResult = (state) => state.info.bestResult;

const infoSelectors = {
  getName,
  getCoins,
  getBestResult,
};
export default infoSelectors;
