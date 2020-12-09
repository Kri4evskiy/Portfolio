export const _timer = (object) => {
  object.s = Number(object.s) + 1;
  object.m = Number(object.m);
  object.h = Number(object.h);

  if (object.s >= 60) {
    object.m++;
    object.s = 0;
  }
  if (object.m >= 60) {
    object.h++;
    object.m = 0;
  }
  if (object.s < 10) {
    object.s = "0" + object.s;
  }
  if (object.m < 10) {
    object.m = "0" + object.m;
  }
  if (object.h < 10) {
    object.h = "0" + object.h;
  }
  return object;
};

export const _createNewTrackerObject = (id, title) => {
  const newTracker = {
    id,
    title,
    isOn: true,
    h: "00",
    m: "00",
    s: "00",
  };
  return newTracker;
};
