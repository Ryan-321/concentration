import React, { PropTypes } from 'react';
import './style.css';

const Gamepiece = (props) => {
  return (
    <div className='piece_container' onClick={() => props.rotate()}>
      <div className='piece_front'></div>
      <div className='piece_back' data-id={props.id}></div>
    </div>
  )
}

Gamepiece.propTypes = {
  id: PropTypes.number.isRequired,
  rotate: PropTypes.func.isRequired
}

export default Gamepiece
