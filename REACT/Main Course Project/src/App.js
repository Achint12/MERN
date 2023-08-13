import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import UserPlaces from './Places/Pages/UserPlaces';
import MainHeader from './Shared/Components/Navigation/Mainheader';
import Users from './User/Pages/User';
import NewPlace from './Places/Pages/Newplace';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
const App= () => {
  return (
  <Router>
    <MainNavigation/>
    <main>
    <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/:userID/places" exact>
        <UserPlaces/>
      </Route>
      <Route path="/places/new" exact>
        <NewPlace/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </main>
  </Router>
  );
};

export default App;
