import { getRandomNumber } from "./getRandomNumber";

export const createPoint = (id, x, y) => ({
  x: getRandomNumber(x),
  y: getRandomNumber(y),
  id,
  size: getRandomNumber(45, 20),
});
