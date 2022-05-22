export const getAchievementPointsInPescent = (allPoints, inStock) => {
  return Math.round((100 / allPoints) * inStock) + "%";
};
