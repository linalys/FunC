import React from 'react';
import './styles.css';

import {BrowserRouter} from 'react-router-dom';
import Route from "react-router-dom/Route";

//Pages
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
