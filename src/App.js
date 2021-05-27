import React from 'react';
import { Route, Switch } from 'react-router';
import Countdown from './components/Countdown';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Menu/>
          <Countdown />
        </Route>
      </Switch>
    </>
  );
}

export default App;
