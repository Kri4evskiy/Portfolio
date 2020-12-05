import { combineReducers } from "redux";

import trackerReducer from "./trackerReducer";

const rootReducer = combineReducers({
  tracker: trackerReducer,
});

export default rootReducer;
