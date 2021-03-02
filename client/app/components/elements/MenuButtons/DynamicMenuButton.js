import React from 'react';

const DynamicMenuButton = props => {
  return (
    <button className='dynamic-menu-button'>
      <span className='button-text'>
        {props.children}
      </span>
    </button>
  )
}

export default DynamicMenuButton