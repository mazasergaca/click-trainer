const getPinkPoints = (state) => state.points.pinkPoints;
const getBluePoints = (state) => state.points.bluePoints;
const getYellowPoints = (state) => state.points.yellowPoints;

const pointsSelectors = {
  getPinkPoints,
  getBluePoints,
  getYellowPoints,
};

export default pointsSelectors;
