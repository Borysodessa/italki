import { combineReducers } from "redux";
import { filtersReducer } from "./filtersReducer";
export const rootReducer = combineReducers({ filters: filtersReducer });
