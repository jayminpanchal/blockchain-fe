import { combineReducers } from "redux";

import block from "./block";
import loader from "./loader";

export const rootReducers = combineReducers({
  blockReducer: block,
  loaderReducer: loader,
});
