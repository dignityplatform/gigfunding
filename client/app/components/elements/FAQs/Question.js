import React from 'react'

const Question = props => {
  return (
    <div key={props.id} className='infos-faqs-question-container'>
      <div className='title'>
        {props.question.question}
      </div>
      <div className='answer' dangerouslySetInnerHTML={{__html:props.question.answer}}></div>
    </div>
  )
}

export default Question