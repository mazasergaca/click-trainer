export const startsCooldown = (setCooldown) => {
  const intervalId = setInterval(() => {
    setCooldown((prev) => {
      if (prev === 0) {
        clearInterval(intervalId);
        return prev;
      }
      return prev - 1;
    });
  }, 1000);
};
