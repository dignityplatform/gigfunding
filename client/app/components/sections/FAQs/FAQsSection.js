import React from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import SubSectionMenu from 'components/composites/Menus/SubSectionMenu'
import FAQsQuestionsList from 'components/composites/FAQs/FAQsQuestionsList'

class FAQsSection extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSection: 0,
    };
  }

  updateSelectedSection (newSection) {
    this.setState({
      selectedSection: newSection,
    })
  }

  render() {
    const sections = this.props.faqsData.map((section, index) => {
      return {
        id: index,
        title: section.title
      }
    })

    const selectedQuestionsData = this.props.faqsData[this.state.selectedSection].faqs

    return (
      <section className='infos-faqs'>
        <SectionHeader classes={'section-header'}>
          GOT A QUESTION?
        </SectionHeader>
        <SubSectionMenu sections={sections}
            updateSelectedSection={this.updateSelectedSection.bind(this)} 
            selectedSection={this.state.selectedSection}/>
        <FAQsQuestionsList questionsData={selectedQuestionsData}/>
      </section>
    )
  }
}

export default FAQsSection;
