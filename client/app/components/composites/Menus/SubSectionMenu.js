import React from 'react'
import DynamicMenuButton from 'components/elements/MenuButtons/DynamicMenuButton'

const SubSectionMenu = props => {

  const menuButtons = props.sections.map(section => {
    return (
      <DynamicMenuButton key={section.index}>
        {section.title}
      </DynamicMenuButton>
    )
  })

  return (
    <div className='sub-section-menu'>
      {menuButtons}
    </div>
  )
}

export default SubSectionMenu