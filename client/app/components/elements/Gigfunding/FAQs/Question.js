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
      <div className={`infos-faqs-question-container${this.state.isOpen ? ' open' : ''}`}>
        <button className='question'
            onClick={this.handleQuestionClick.bind(this)} 
            aria-label={this.props.question.question}>
          <span className='button-text'>
            {this.props.question.question}
          </span>
          <i className='button-icon icon-chevron-down'></i>
        </button>
        <div className='answer-container' style={style}>
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