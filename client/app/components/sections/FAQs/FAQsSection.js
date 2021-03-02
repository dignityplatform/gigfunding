import React, {Component} from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import SubSectionMenu from 'components/composites/Menus/SubSectionMenu'

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

    return (
      <section className='infos-faqs'>
        <SectionHeader classes={'section-header'}>
          GOT A QUESTION?
        </SectionHeader>
        <SubSectionMenu sections={sections} 
            updateSelectedSection={this.updateSelectedSection.bind(this)} 
            selectedSection={this.state.selectedSection}/>
      </section>
    )
  }
}

export default FAQsSection;
