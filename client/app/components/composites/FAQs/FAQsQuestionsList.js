import React from 'react'
import Question from 'components/elements/FAQs/Question'

const FAQsQuestionsList = props => {

  const questions = props.questionsData.map((question, index) => {
    return (
      <li className='item' key={index}>
        <Question id={index} question={question}/>
      </li>
    )
  })

  return (
    <ul className='infos-faqs-questions-list'>
      {questions}
    </ul>
  )
}

export default FAQsQuestionsList