import React from 'react';

const CenteredTextContent = props => {
  return (
    <p className='centered-text-content'>
      {props.children}
    </p>
  )
}

export default CenteredTextContent;
