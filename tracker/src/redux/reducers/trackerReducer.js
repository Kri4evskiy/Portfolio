import { _timer } from "./utils";

const initialState = {
  id: 4,
  title: "",
  intervalRefs: [],
  trackers: [
    { id: 1, title: "Стартовый трекер", isOn: true, h: "00", m: "00", s: "00" },
    { id: 2, title: "Трекер #2", isOn: false, h: "12", m: "16", s: "43" },
    { id: 3, title: "Трекер #3", isOn: false, h: "01", m: "14", s: "44" },
  ],
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CHANGE_TITLE": {
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

    case "INCREASE_ID": {
      return {
        ...state,
        id: state.id + 1,
      };
    }

    case "ADD_NEW_TRACKER": {
      const trackers = [...state.trackers];

      trackers.unshift(action.payload);

      return {
        ...state,
        trackers,
      };
    }

    case "REMOVE_TRACKER": {
      const trackers = [...state.trackers].filter(
        (track) => track.id !== action.payload
      );
      return {
        ...state,
        trackers,
      };
    }

    case "PLAY_PAUSE": {
      const trackers = [...state.trackers];

      const tracker = trackers.filter((track) => track.id === action.payload);

      tracker[0].isOn = !tracker[0].isOn;

      return {
        ...state,
        trackers,
      };
    }

    case "ADD_INTERVAL_REF": {
      const newRef = action.interval;
      const id = action.id;

      const obj = {
        intID: id,
        intRef: newRef,
      };

      const intervalRefs = [...state.intervalRefs];
      intervalRefs.push(obj);

      return {
        ...state,
        intervalRefs,
      };
    }

    case "INTERVAL_TICKING": {
      const tracker = action.payload;

      const newTracker = _timer(tracker);

      const trackers = [...state.trackers].filter(
        (obj) => obj.id !== tracker.id
      );
      const index = [...state.trackers].findIndex(
        (obj) => obj.id === tracker.id
      );

      trackers.splice(index, 0, newTracker);

      return {
        ...state,
        trackers,
      };
    }

    case "CLEAR_INTERVAL": {
      const intervalRefs = [...state.intervalRefs];

      const interval = intervalRefs.filter(
        (obj) => obj.intID === action.payload
      );
      clearInterval(interval[0].intRef);

      const index = intervalRefs.findIndex(
        (el) => el.intID === interval[0].intID
      );
      intervalRefs.splice(index, 1);

      return {
        ...state,
        intervalRefs,
      };
    }

    default:
      return state;
  }
};

export default trackerReducer;
