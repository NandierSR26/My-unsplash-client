import { combineReducers } from "redux";
import { imgReducer } from "./imgReducer.js";
import { searchReducer } from "./searchReducer.js";
import { uiReducer } from "./uiReducer.js";

export const rootReducer = combineReducers({
    ui: uiReducer,
    images: imgReducer,
    search: searchReducer,
})