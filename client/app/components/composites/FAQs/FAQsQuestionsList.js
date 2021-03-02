import React from 'react'
import Question from 'components/elements/FAQs/Question'

const FAQsQuestionsList = props => {

  const questions = props.questionsData.map((question, index) => {
    return (
      <Question id={index} question={question}/>
    )
  })

  return (
    <div className='infos-faqs-questions-list'>
      {questions}
    </div>
  )
}

export default FAQsQuestionsList