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
      removeAlertOldDomain: false,
      understoodOldDomain: false,
    };

    this.oldDomain = window.location.hostname.match(/(\D+\.)?localhost/g);

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
    const { theme, understoodOldDomain, removeAlertOldDomain } = this.state;
    return (
      <div id="App" data-theme={theme}>
        { (this.oldDomain && !removeAlertOldDomain) && (
          <div className={`alertOldDomain ${understoodOldDomain ? 'hide' : 'show'}`}>
            <div className="alertOldDomainContainer">
              <p>
                Parece que você veio pelo domínio <strong>joaonasc.dev</strong>. Em breve esse domínio deixará de existir!
                <br />
                A boa notícia é que você ainda terá acesso ao site pelo domínio <strong>nasc.dev</strong> (que é muito mais legal 😄).
                Por isso, da próxima vez, acesse <a href={`https://${window.location.hostname.replace(/joaonasc/g, 'nasc')}`}><strong>{window.location.hostname.replace(/joaonasc/g, 'nasc')}</strong></a> para garantir que continuará tendo acesso.
              </p>
              <div className="alertOldDomainOptions">
                <a href={`https://${window.location.hostname.replace(/joaonasc/g, 'nasc')}`}>Me leve para lá! 🚀</a>
                <label htmlFor="understood-old-domain" className="understood-old-domain">
                  <input
                    type="checkbox"
                    id="understood-old-domain"
                    onChange={({ target: { checked } }) => {
                      this.setState({ ...this.state, understoodOldDomain: checked });
                      setTimeout(() => {
                        this.setState({ ...this.state, removeAlertOldDomain: true });
                      }, 1000);
                    }}
                  />
                  Entendi, vou ficar por aqui.
                </label>
              </div>
            </div>
          </div>
        ) }
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
