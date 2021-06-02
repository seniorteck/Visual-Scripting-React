import { combineReducers } from "redux";
import { memberReducer } from "./memberState";
import { applicationAction } from "./appAction";

export default combineReducers({ memberState: memberReducer, appState: applicationAction });