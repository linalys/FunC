import React from 'react';
import './styles.css';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from "./reducers";
import {BrowserRouter, Switch} from 'react-router-dom';
import Route from "react-router-dom/Route";

//Page Imports
import Home from './Pages/Home/Home';
import Pricing from "./Pages/Pricing/Pricing";
import Courses from "./Pages/Courses/Courses";
import Profile from "./Pages/Profile/Profile";

const store = createStore(reducers);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            costumers: []
        }
    }

    componentDidMount() {
        fetch('/api/costumers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('Customers fetched!', customers)));
    }

    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <Switch>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
                </Switch>
            </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
