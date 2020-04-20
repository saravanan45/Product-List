import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Items from './Items';
import PrivateRoute from './PrivateRoute';
import AuthenticateRoute from './AuthenticateRoute';

function Routes() {
  return (
    <Router>
      <AuthenticateRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/items" component={Items} />
      <PrivateRoute path="/items/:name/:price/:tax/:id" component={Items} />
      <PrivateRoute path="/home" component={Home} />
    </Router>
  );
}

export default Routes;
