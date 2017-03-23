import React, { Component } from 'react';
import './style.css';

import Gamepiece from '../Gamepiece';
import imageHelper from '../../utils/imageHelper';

export default class Gameboard extends Component {
  constructor () {
    super ()
    this.state = {
      config_array: imageHelper.setArray(20),
      clickTracker: 0,
      indexTracker: []

    }
    this.handleClick = this.handleClick.bind(this);
  }

  comparePieces (currentArray, index) {
    let prevIndex = this.state.indexTracker[this.state.indexTracker.length - 1];
    if (currentArray[index].num === currentArray[prevIndex].num) {
      this.state.indexTracker.push(index);
      return
    }
    else {
      currentArray[index].flip = false;
      currentArray[prevIndex].flip = false;
      this.state.indexTracker.push(index);
      this.setState({config_array: currentArray})
    }
  }

  alreadyFlipped (index) {
    if (this.state.config_array[index].flip === true) {
      return true
    }
    return false
  }

  handleClick (index) {
    if (this.alreadyFlipped(index)) {return}  // if flipped do nothing
    this.state.clickTracker += 1;
    let waitPromise = new Promise((res,rej) => {setTimeout(res, 400)})  // gives transform time
    let currentArray = this.state.config_array;  // make a copy
    currentArray[index].flip = true;  // modify copy
    this.setState({config_array: currentArray})  // rerender copy
    if (this.state.clickTracker === 2) {
      this.setState({clickTracker: 0});
      waitPromise.then(() => {this.comparePieces(currentArray, index)})
    }
    else if (this.state.clickTracker === 1) {
      this.state.indexTracker.push(index);
    }
  }

  render () {
    console.log("rendered")
    return (
      <main>
        {this.state.config_array
          .map((square, index) => {
            return (
              <Gamepiece
                id={square.num}
                rotate={square.flip}
                key={index}
                index={index}
                check={this.handleClick}
              />
            )
          })}
      </main>
    )
  }
}
