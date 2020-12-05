const initialState = {
  trackers: [{ title: "name", h: 5, m: 13, s: 42 }],
  title: "",
  h: 0,
  m: 0,
  s: 0,
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST": {
      return {
        ...state,
        h: 1,
        m: 1,
        s: 1,
      };
    }
    default:
      return state;
  }
};

export default trackerReducer;
