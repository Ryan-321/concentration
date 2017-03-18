import React, { Component } from 'react';
import './style.css';

import Gamepiece from '../Gamepiece';
import image from '../utils/imageHelper';

export default class Gameboard extends Component {
  constructor () {
    super ()
    this.state = {
      config_array: image.set_array(20)
    }
  }

  render () {
    return (
      <main>
        <Gamepiece dataId={} />
      </main>
    )
  }
}
