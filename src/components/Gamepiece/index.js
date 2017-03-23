import React, { PropTypes } from 'react';
import './style.css';

import classNames from 'classnames';

const Gamepiece = (props) => {
  const piece = classNames(
    'piece_container',
    {flip: props.rotate}
  );
  return (
    <div className={piece} onClick={() => props.check(props.index)}>
      <div className='piece_front'></div>
      <div className='piece_back' data-id={props.id}></div>
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
