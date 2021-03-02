import React from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import SubSectionMenu from 'components/composites/Menus/SubSectionMenu'

const FAQsSection = props => {

  const sections = props.faqsData.map((section, index) => {
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
      <SubSectionMenu sections={sections}/>
    </section>
  )
}

export default FAQsSection;
