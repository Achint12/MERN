import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './User/Pages/User';
import NewPlace from './Places/Pages/Newplace';
const App= () => {
  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/places/new" exact>
        <NewPlace/>
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
  );
};

export default App;
