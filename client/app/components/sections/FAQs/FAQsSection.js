import React, {Component} from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import SubSectionMenu from 'components/composites/Menus/SubSectionMenu'
import FAQsQuestionsList from 'components/composites/FAQs/FAQsQuestionsList'

class FAQsSection extends Component {
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

    const questionsData = this.props.faqsData[this.state.selectedSection].faqs

    return (
      <section className='infos-faqs'>
        <SectionHeader classes={'section-header'}>
          GOT A QUESTION?
        </SectionHeader>
        <SubSectionMenu sections={sections}
            updateSelectedSection={this.updateSelectedSection.bind(this)} 
            selectedSection={this.state.selectedSection}/>
        <FAQsQuestionsList questionsData={questionsData}/>
      </section>
    )
  }
}

export default FAQsSection;
