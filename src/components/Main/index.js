import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const Main = props => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Series} />
            <Route path='/series/:id' component={SingleSeries} />
        </Switch>
    </HashRouter>
);

export default Main;