import React, { Component } from 'react';
import './style.css';

import Gamepiece from '../Gamepiece';

export default class Gameboard extends Component {
  render () {
    return (
      <main>
        <div id="gamepiece_wrapper">
          <Gamepiece />
        </div>
      </main>
    )
  }
}
