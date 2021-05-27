import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  }

  render() {
    const { menu } = this.state;
    return (
      <>
        <button onClick={this.toggleMenu}>
          { menu ? (
            <MdClose />
          ) : (
            <MdMenu />
          ) }
        </button>
        { menu && (
          <nav id="menu">
            <ul>
              <li>Preferências</li>
              <li>Sobre</li>
            </ul>
          </nav>
        ) }
      </>
    );
  }
}

export default Menu;
