import React from 'react';
import './styles.css';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from "./reducers";
import {BrowserRouter} from 'react-router-dom';
import Route from "react-router-dom/Route";

//Page Imports
import Home from './Pages/Home/Home';
import Pricing from "./Pages/Pricing/Pricing";
import Courses from "./Pages/Courses/Courses";
import Profile from "./Pages/Profile/Profile";

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/pricing" exact component={Pricing}/>
                    <Route path="/courses" exact component={Courses}/>
                    <Route path="/profile" exact component={Profile}/>
                </div>
            </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
