import React from 'react';
import './styles.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {saveState, loadState} from "./localStorage";
import {BrowserRouter, Switch} from 'react-router-dom';
import Route from "react-router-dom/Route";

//Page Imports
import Home from './Pages/Home/Home';
import Pricing from "./Pages/Pricing/Pricing";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AccountSettings from "./Pages/AccountSettings/AccountSettings";
import cpp from "./Pages/Courses/cplusplus/cpp";
import java from "./Pages/Courses/java/java";
import sql from "./Pages/Courses/sql/sql";
import TestLayout from "./Pages/Courses/TestLayout";
import LessonStructure from "./Pages/Courses/LessonStructure";
import Admin from "./Pages/AdminDashboard/App";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import NotFound404 from "./Pages/NotFound404";

import ComingSoon from "./Pages/ComingSoon";

const persistedState = loadState();
const middleware = [thunk];
const store = createStore(
    reducers,
    persistedState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
);
store.subscribe(() => {
    saveState(store.getState());
});


class App extends React.Component {
    render() {
        return (
            <div className="AppContainer">{/*This className forces footer to stay at the bottom of the page*/}
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/pricing" component={Pricing}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/accountSettings" component={AccountSettings}/>
                            <Route exact path="/contactUs" component={ContactUs}/>
                            <Route exact path="/cpp/intro" component={cpp}/>
                            <Route exact path="/java/intro" component={java}/>
                            <Route exact path="/sql/intro" component={sql}/>
                            <Route path="/admin" component={Admin}/>
                            <Route exact path="/error404" component={NotFound404}/>
                            <Route exact path="/signIn" component={() => <SignIn checkForErrors={false}/>}/>
                            <Route exact path="/signIn/error" component={() => <SignIn checkForErrors={true}/>}/>
                            <Route exact path="/signUp" component={() => <SignUp checkForErrors={false}/>}/>
                            <Route exact path="/signUp/error" component={() => <SignUp checkForErrors={true}/>}/>
                            <Route exact path="/comingsoon" component={ComingSoon}/>

                            <Route path="/test" component={TestLayout}/>
                            <Route path="/lesson" component={LessonStructure}/>

                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App;