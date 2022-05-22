export const getCurrentLevelAchievement = (levels) => {
  let index = null;
  for (let i = 0; i < levels.length; i++) {
    if (!levels[i].reseived) return (index = i);
  }

  return index;
};
