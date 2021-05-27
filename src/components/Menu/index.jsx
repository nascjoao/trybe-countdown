import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './styles.scss';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: false,
      menuOut: true,
    };

    this.menuTimeout = null;

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { menu, menuOut } = this.state;
    this.setState({ menuOut: !menuOut });
    this.menuTimeout = setTimeout(() => {
      this.setState({ menu: !menu });
    }, 200);
  }

  componentWillUnmount() {
    clearTimeout(this.menuTimeout);
  }

  render() {
    const { menu, menuOut } = this.state;
    return (
      <>
        <button id="toggleMenu" onClick={this.toggleMenu}>
          { menu ? (
            <MdClose />
          ) : (
            <MdMenu />
          ) }
        </button>
        { menu && (
          <nav id="menu" className={`menuOut-${menuOut}`}>
            <ul>
              <li>
                <Link to="/settings">Preferências</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
            </ul>
          </nav>
        ) }
      </>
    );
  }
}

export default Menu;
