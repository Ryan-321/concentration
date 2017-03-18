import React from 'react';
import './style.css';

const Gamepiece = (props) => {
  return (
    <div className='piece_container'>
      <div className='piece_front'></div>
      <div className='piece_back'></div>
    </div>
  )
}

export default Gamepiece
