import React from 'react'

const Question = props => {
  return (
    <div className='infos-faqs-question-container'>
      <button className='question'>
        <span className='button-text'>
          {props.question.question}
        </span>
        <span className='button-icon icon-chevron-down'></span>
      </button>
      <div className='answer' dangerouslySetInnerHTML={{__html:props.question.answer}}></div>
    </div>
  )
}

export default Question