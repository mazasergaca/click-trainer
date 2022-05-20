export const deletePointLaterSomeTime = (dispatch, deletePoint, id, delay) => {
  setTimeout(() => {
    dispatch(deletePoint(id));
  }, delay);
};
