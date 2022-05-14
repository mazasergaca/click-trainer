let maxDelay = 1200;

export const getMaxDelay = () => {
  const newMaxDelay = maxDelay;
  if (maxDelay > 600) maxDelay -= 4;
  return newMaxDelay;
};
