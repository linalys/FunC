import {combineReducers} from "redux";
import languageReducer from "./languageReducer";
import loggedInReducer from "./loggedInReducer";
import codeReducer from "./codeReducer";

const reducers = combineReducers({
    language: languageReducer,
    loggedIn: loggedInReducer,
    code: codeReducer
});

export default reducers;