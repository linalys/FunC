import {combineReducers} from "redux";
import languageReducer from "./languageReducer";
import loggedInReducer from "./loggedInReducer";
import codeReducer from "./codeReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
    language: languageReducer,
    loggedIn: loggedInReducer,
    code: codeReducer,
    auth: authReducer,
    credentialErrors: errorReducer
});

export default reducers;