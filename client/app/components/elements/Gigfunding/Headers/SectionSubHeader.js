import React from 'react';

const SectionSubHeader = props => {
  return (
    <h2 className={props.classes}>
      {props.children}
    </h2>
  )
}

export default SectionSubHeader;
