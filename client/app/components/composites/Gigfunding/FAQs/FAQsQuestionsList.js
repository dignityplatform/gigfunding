import React from 'react'
import Question from 'components/elements/Gigfunding/FAQs/Question'
import { parametizeString } from 'utils/strings'

const FAQsQuestionsList = props => {

  const parametizedTitle = parametizeString(props.questionsSection.title)

  const questions = props.questionsSection.faqs.map((question, index) => {
    return (
      <li className='item' key={`${parametizedTitle}-${index}`}>
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