import React from 'react';
import { Link } from 'react-router-dom';
import TimePreset from './components/TimePreset';
import { MdInfoOutline } from 'react-icons/md';

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
          <h2>Padrões de tempo</h2>
          <div id="presets">
            <TimePreset label="Vamos rápido, já voltamos" />
            <TimePreset label="Voltamos em breve" />
            <TimePreset label="Só alegria" />
          </div>
          <h2>
            <MdInfoOutline />
            Aleatório
          </h2>
          <p>
            A opção de countdown aleatório cria um intervalo entre o seu mais curto
            e mais longo padrão, ou seja, seus padrões de &quot;Vamos rápido, já voltamos&quot; e
            &quot;Só alegria&quot;.
          </p>
        </main>
      </div>
    );
  }
}

export default Preferences;
