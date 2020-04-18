import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';


 function Dash() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={DashboardLayout} />
            </Switch>
        </BrowserRouter>
    );
}

export default Dash;