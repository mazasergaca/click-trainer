import { getRandomNumber } from "./getRandomNumber";

export const createPoint = (setState, id, x, y) => {
  setState((prev) => [
    ...prev,
    {
      x: getRandomNumber(x),
      y: getRandomNumber(y),
      id,
      size: getRandomNumber(45, 20),
    },
  ]);
};
