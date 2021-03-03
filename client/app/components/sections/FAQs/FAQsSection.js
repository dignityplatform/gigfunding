import React from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import SubSectionMenu from 'components/composites/Menus/SubSectionMenu'
import FAQsQuestionsList from 'components/composites/FAQs/FAQsQuestionsList'
import SectionSubHeader from 'components/elements/Headers/SectionSubHeader'
import GeneralLink from 'components/elements/Link/GeneralLink'
import CenteredTextContent from 'components/elements/Text/CenteredTextContent'
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

    const selectedQuestionsSection = this.props.faqsData[this.state.selectedSection]

    return (
      <section className='infos-faqs'>
        <SectionHeader classes={'section-header'}>
          GOT A QUESTION?
        </SectionHeader>
        <SubSectionMenu sections={sections}
            updateSelectedSection={this.updateSelectedSection.bind(this)} 
            selectedSection={this.state.selectedSection}/>
        <FAQsQuestionsList questionsSection={selectedQuestionsSection}/>
        <SectionSubHeader classes='section-sub-header'>
          What if my question wasn't answered here?
        </SectionSubHeader>
        <CenteredTextContent>
          Where always happy to answer queries and requests. Email <GeneralLink link='mailto:team@gigfunding.org'>team@gigfunding.org</GeneralLink> and we will get back to you, and if it's a particularly brilliant question we'll add it to this very page.
        </CenteredTextContent>
      </section>
    )
  }
}

export default FAQsSection;
