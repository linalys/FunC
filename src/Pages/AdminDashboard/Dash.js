import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import style from './vibe/scss/styles.scss'


 function Dash() {
    return (
        <BrowserRouter>
            <Switch>
                <div className={style}>
                    <Route component={DashboardLayout} />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default Dash;