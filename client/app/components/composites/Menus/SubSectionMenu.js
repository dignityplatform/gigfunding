import React from 'react'
import DynamicMenuButton from 'components/elements/MenuButtons/DynamicMenuButton'

const SubSectionMenu = props => {

  const menuButtons = props.sections.map(section => {
    return (
      <DynamicMenuButton key={section.id} 
          id={section.id} 
          handleClick={props.updateSelectedSection}
          isSelected={section.id === props.selectedSection}>
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