import React from 'react';

const DynamicMenuButton = props => {

  const handleClick = () => {
    props.handleClick(props.id)
  }

  return (
    <button key={props.id}
        className={`dynamic-menu-button${props.isSelected ? ' highlight' : ''}`} 
        onClick={handleClick} 
        disabled={props.isSelected}>
      <span className='button-text'>
        {props.children}
      </span>
    </button>
  )
}

export default DynamicMenuButton