import React from 'react';

const SectionHeader = props => {
  return (
    <h1 className={props.classes}>
      {props.children}
    </h1>
  )
}

export default SectionHeader;
