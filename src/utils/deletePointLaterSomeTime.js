export const deletePointLaterSomeTime = (setPoints, id, delay) => {
  setTimeout(() => {
    setPoints((prev) => prev.filter((point) => point.id !== id));
  }, delay);
};
