export const addTitleName = (text) => ({
  type: "ADD_TITLE",
  payload: text,
});

export const clearInput = () => ({
  type: "CLEAR_INPUT",
});

export const addNewTracker = (text) => ({
  type: "ADD_NEW_TRACKER",
  payload: text,
});

export const deleteTracker = (index) => ({
  type: "DELETE_TRACKER",
  payload: index,
});

export const playPauseToggle = (index) => ({
  type: "PLAY_PAUSE",
  payload: index,
});
