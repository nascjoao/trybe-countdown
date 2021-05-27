import React from 'react';
import { Route, Switch } from 'react-router';
import Countdown from './components/Countdown';
import Menu from './components/Menu';
import About from './components/About';
import Preferences from './components/Preferences';

function App() {
  return (
    <>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/settings" component={Preferences} />
        <Route path="/">
          <Menu/>
          <Countdown />
        </Route>
      </Switch>
    </>
  );
}

export default App;
