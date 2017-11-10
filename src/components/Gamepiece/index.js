import React, { PropTypes } from 'react';
import './style.css';

import classNames from 'classnames';

const Gamepiece = (props) => {
  const piece = classNames(
    'cube',
    {flip: props.rotate},
    {winner: props.win}
  );
  return (
    <div className='wrapper'>
      <div className={piece} onClick={() => props.check(props.index)}>
        <div className='front' />
        <div className='back' data-id={props.id} />
        <div className='top' />
        <div className='bottom' />
        <div className='left' />
        <div className='right' />
      </div>
    </div>
  )
}
Gamepiece.propTypes = {
  id: PropTypes.number.isRequired,
  check: PropTypes.func.isRequired,
  rotate: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
}

export default Gamepiece
