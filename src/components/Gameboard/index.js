import React, { Component } from 'react';
import './style.css';

import Gamepiece from '../Gamepiece';
import imageHelper from '../../utils/imageHelper';

export default class Gameboard extends Component {
  constructor () {
    super ()
    this.state = {
      config_array: imageHelper.setArray(20)
    }
  }
  render () {
    return (
      <main>
        {this.state.config_array
          .map((num, index) => {
            return (
              <Gamepiece dataId={num} key={index}/>
            )
          })}
      </main>
    )
  }
}
