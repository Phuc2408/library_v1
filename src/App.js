// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
 }
