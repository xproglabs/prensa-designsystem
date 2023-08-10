import React, { useState } from 'react'

import AccordionGroup from './group'
import AccordionItemGroup from './groupItem'
import { IAccordion, IAccordionItemGroup } from './types'

const Accordion: React.FC<IAccordion> = ({
  accordionContentAs,
  accordionTitleAs,
  accordionTitleVariant,
  customLink,
  css,
  items,
  innerSpace,
  icon,
  iconExpandedState,
  iconNotExpandedState,
  size,
}) => {
  const [state, setState] = useState(items || [])

  const handleClick = (id: string) => {
    let itk: number = 0

    const item = state.find((i, k) => {
      itk = k
      return i.id === id
    })

    const currentState = Object.assign({}, state)
    const updatedItem = { ...item, expanded: item ? !item.expanded : false }
    const updatedState = { ...currentState, [itk]: updatedItem }
    setState(Object.keys(updatedState).map(key => updatedState[key]))
  }

  let accordiongroup_css = {}
  let accordionitem_css = {}

  if (css) {
    if (css.accordionGroup) {
      accordiongroup_css = { ...css.accordionGroup }
    }
    if (css.accordionItemGroup) {
      accordionitem_css = { ...css.accordionItemGroup }
    }
  }

  return (
    <AccordionGroup
      size={size}
      css={accordiongroup_css}
    >
      {state.map(({ id, onClick, ...otherProps }: IAccordionItemGroup) => (
        <AccordionItemGroup
          accordionContentAs={otherProps.accordionContentAs ? otherProps.accordionContentAs : accordionContentAs}
          accordionTitleAs={otherProps.accordionTitleAs ? otherProps.accordionTitleAs : accordionTitleAs}
          accordionTitleVariant={otherProps.accordionTitleVariant ? otherProps.accordionTitleVariant : accordionTitleVariant}
          customLink={customLink}
          css={accordionitem_css}
          key={id}
          id={id}
          innerSpace={innerSpace}
          icon={otherProps.icon ? otherProps.icon : icon}
          iconExpandedState={otherProps.iconExpandedState ? otherProps.iconExpandedState : iconExpandedState}
          iconNotExpandedState={otherProps.iconNotExpandedState ? otherProps.iconNotExpandedState : iconNotExpandedState}
          onClick={onClick ? onClick : () => handleClick(id)}
          {...otherProps}
        />
      ))}
    </AccordionGroup>
  )
}

Accordion.defaultProps = {
  innerSpace: 'md',
  size: 'sm'
}

export default Accordion