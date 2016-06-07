import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import Main from 'layouts/main';

// Components
import Home from 'ui/home'
import Dbayarea from 'ui/dbayarea'

render((
    <Router history={browserHistory}>

        <Route component={Main}>

            <Route path="/" component={Home} />
            <Route path="/dbayarea" component={Dbayarea} />

        </Route>

    </Router>
), document.getElementById('app'));