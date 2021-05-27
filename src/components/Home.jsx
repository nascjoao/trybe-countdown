import React, { Component } from 'react';
import Countdown from './Countdown';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <>
        <Menu />
        <Countdown />
      </>
    );
  }
}

