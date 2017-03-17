import React, { Component } from 'react';
import './style.css';

export default class Gamepiece extends Component {
  render () {

    return (
      <div className='piece_container'>
        <div className='piece_front'></div>
        <div className='piece_back'></div>
      </div>
    )
  }
}
