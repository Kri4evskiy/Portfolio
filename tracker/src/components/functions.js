export const oneSecInterval = (dispFn, actionFn, object) => {
  return setInterval(() => {
    dispFn(actionFn(object));
  }, 1000);
};
