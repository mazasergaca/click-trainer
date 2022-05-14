let minDelay = 200;

export const getMinDelay = () => {
  const newMinDelay = minDelay;
  if (minDelay > 50) minDelay -= 4;
  return newMinDelay;
};
