import React from 'react';
import { Route, Switch } from 'react-router';
import About from './components/About';
import Preferences from './components/Preferences';
import Home from './components/Home';
import { MdBrightness2, MdBrightness5 } from 'react-icons/md';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: '',
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount() {
    this.loadTheme();
    this.watchPreferColorSchemeChange();
  }

  watchPreferColorSchemeChange() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      this.setState({ theme: event.matches ? 'dark' : 'light' });
    });
  }

  loadTheme() {
    const themePreference = localStorage.getItem('theme-preference');
    if (themePreference) {
      this.setState({ theme: themePreference });
    } else {
      const matchMediaDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setState({ theme: matchMediaDark ? 'dark' : 'light' });
    }
  }

  changeTheme() {
    const { theme } = this.state;
    const toggleTheme = theme === 'dark' && 'light' || 'dark';
    this.setState({ theme: toggleTheme });
    localStorage.setItem('theme-preference', toggleTheme);
  }

  render() {
    const { theme } = this.state;
    return (
      <div data-theme={theme}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/settings" component={Preferences} />
          <Route path="/" component={Home}/>
        </Switch>
        <button id="toggleTheme" onClick={this.changeTheme}>
          { theme === 'dark' ? (
            <MdBrightness2 />
          ) : (
            <MdBrightness5 />
          ) }
        </button>
      </div>
    );
  }
}

export default App;
