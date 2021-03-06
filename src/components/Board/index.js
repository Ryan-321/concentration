import React, { Component } from 'react';
import Gamepiece from '../Gamepiece';
import imageHelper from '../../utils/imageHelper';
import './style.css';


export default class Board extends Component {
  state = {
    config_array: imageHelper.setArray(20),
    clickTracker: 0,
    indexTracker: [],
    winner: false
  }

  comparePieces(currentArray, index) {
    let prevIndex = this.state.indexTracker[this.state.indexTracker.length - 1];
    if (currentArray[index].num === currentArray[prevIndex].num) {
      this.state.indexTracker.push(index);
      this.checkWinner(currentArray);
    }
    else {
      currentArray[index].flip = false;
      currentArray[prevIndex].flip = false;
      this.state.indexTracker.push(index);
      this.setState({config_array: currentArray})
    }
  }

  handleClick = (index) => {
    if (this.state.config_array[index].flip) {return}
      this.state.clickTracker += 1;
      let waitPromise = new Promise((res,rej) => {setTimeout(res, 400)})
      let currentArray = this.state.config_array;
      currentArray[index].flip = true;
      this.setState({config_array: currentArray})
    if (this.state.clickTracker === 2) {
      this.setState({clickTracker: 0});
      waitPromise.then(() => {this.comparePieces(currentArray, index)})
    }
    else if (this.state.clickTracker === 1) {
      this.state.indexTracker.push(index);
    }
  }

  checkWinner(currentArray) {
    let check = currentArray.every((square) => {
      return square.flip === true
    })
    if (check) {this.setState({winner: true})};
  }

  render () {
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
                win={this.state.winner}
              />
            )
          })
        }
      </main>
    )
  }
}
