import React from 'react';
import { Link } from 'react-router-dom';
import TimePreset from './components/TimePreset';

import './styles.scss';

class Preferences extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  render() {
    return (
      <div>
        <header>
          <Link to='/'>Voltar para a Home</Link>
        </header>
        <main>
          <h1>Preferências</h1>
          <h3>Padrões de tempo</h3>
          <form>
            <TimePreset label="Vamos rápido, já voltamos" />
            <TimePreset label="Voltamos em breve" />
            <TimePreset label="Só alegria" />
          </form>
        </main>
      </div>
    );
  }
}

export default Preferences;
