import React from 'react';

const GeneralLink = props => {
  return (
    <a className='general-link' href={props.link}>
      {props.children}
    </a>
  )
}

export default GeneralLink;
