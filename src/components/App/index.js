import React, { Component } from 'react';
import Header from '../Header';
import Board from '../Board';
import './style.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}
