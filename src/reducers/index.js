import languageReducer from "./languageReducer";
import loggedInReducer from "./loggedInReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
    language: languageReducer,
    loggedIn: loggedInReducer
});

export default reducers;