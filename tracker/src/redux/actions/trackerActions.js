export const onChangeTitle = (text) => ({
  type: "ON_CHANGE_TITLE",
  payload: text,
});

export const clearInput = () => ({
  type: "CLEAR_INPUT",
});
export const increaseIdValue = () => ({
  type: "INCREASE_ID",
});

export const addNewTracker = (obj) => ({
  type: "ADD_NEW_TRACKER",
  payload: obj,
});

export const removeTracker = (index) => ({
  type: "REMOVE_TRACKER",
  payload: index,
});

export const playPauseToggle = (id) => ({
  type: "PLAY_PAUSE",
  payload: id,
});

export const addIntervalToRefs = (interval, id) => ({
  type: "ADD_INTERVAL_REF",
  interval,
  id,
});
export const intervalTicking = (obj) => ({
  type: "INTERVAL_TICKING",
  payload: obj,
});
export const clearIntervalRef = (id) => ({
  type: "CLEAR_INTERVAL",
  payload: id,
});
