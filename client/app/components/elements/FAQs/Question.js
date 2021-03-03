import React from 'react'

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleQuestionClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {

    let style
    if (this.state.isOpen) {
      style = {maxHeight: this.answerTextRef.offsetHeight + 1}
    }

    return (
      <div className='infos-faqs-question-container'>
        <button className='question' onClick={this.handleQuestionClick.bind(this)}>
          <span className='button-text'>
            {this.props.question.question}
          </span>
          <span className='button-icon icon-chevron-down'></span>
        </button>
        <div className={`answer-container${this.state.isOpen ? ' open' : ''}`} style={style}>
          <div className='answer-text'
              ref={node => this.answerTextRef = node}
              dangerouslySetInnerHTML={{__html:this.props.question.answer}}>
          </div>
        </div>
      </div>
    )
  }
}

export default Question