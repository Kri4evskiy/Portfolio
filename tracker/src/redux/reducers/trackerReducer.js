const initialState = {
  title: "",
  h: "00",
  m: "00",
  s: "00",
  trackers: [
    { title: "Стартовый трекер", isOn: true, h: "00", m: "00", s: "00" },
    { title: "Трекер #2", isOn: false, h: "12", m: "16", s: "43" },
    { title: "Трекер #3", isOn: false, h: "01", m: "14", s: "44" },
  ],
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITLE": {
      return {
        ...state,
        title: action.payload,
      };
    }
    case "CLEAR_INPUT": {
      return {
        ...state,
        title: "",
      };
    }
    case "ADD_NEW_TRACKER": {
      const trackers = [...state.trackers];
      const newTracker = {
        title: action.payload,
        isOn: true,
        h: "00",
        m: "00",
        s: "00",
      };
      trackers.unshift(newTracker);

      return {
        ...state,
        trackers,
      };
    }
    case "DELETE_TRACKER": {
      const trackers = [...state.trackers].filter(
        (_, index, trackers) => trackers[index] !== trackers[action.payload]
      );

      return {
        ...state,
        trackers,
      };
    }
    case "PLAY_PAUSE": {
      const trackers = [...state.trackers];
      trackers[action.payload].isOn = !trackers[action.payload].isOn;

      return {
        ...state,
        trackers,
      };
    }
    default:
      return state;
  }
};

export default trackerReducer;
