import React from 'react';
import SectionHeader from 'components/elements/Headers/SectionHeader'
import FAQsData from 'assets/json/faqs.json'

const FAQsSection = props => {

  console.log(FAQsData)

  return (
    <section className='infos-faqs'>
      <SectionHeader classes={'section-header'}>
        GOT A QUESTION?
      </SectionHeader>
    </section>
  )
}

export default FAQsSection;
