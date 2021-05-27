import React from 'react';
import { Link } from 'react-router-dom';

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
        <h1>Preferências</h1>
        <h3>Padrões de tempo</h3>
      </div>
    );
  }
}

export default Preferences;
