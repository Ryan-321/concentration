import React, { Component } from 'react';
import './style.css';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Gameboard from '../Gameboard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gameboard />
      </div>
    );
  }
}

export default App;
