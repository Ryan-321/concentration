import React, { Component } from 'react';
import './style.css';

import Header from '../Header';
import Gameboard from '../Gameboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gameboard />
      </div>
    );
  }
}
