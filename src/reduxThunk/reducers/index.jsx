import { combineReducers } from "redux";

import { user } from "./User";
import { friend } from "./Friend";

export const rootReducer = combineReducers({
  user,
  friend,
});
