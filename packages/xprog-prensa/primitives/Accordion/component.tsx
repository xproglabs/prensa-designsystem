import React, { useState } from 'react'

import { AccordionItem } from './item'
import { AccordionProps } from './props'
import { AccordionGroup } from './styles'

export const Accordion: React.FC<AccordionProps> = ({
  css,
  items,
  iconExpandedState,
  iconNotExpandedState,
  size
}) => {
  const [state, setState] = useState(items)

  const handleClick = (id: string) => {
    let itk = null
    const item = state.find((i, k) => {
      itk = k
      return i.id === id
    })

    const currentState = Object.assign({}, state)
    const updatedItem = { ...item, expanded: !item.expanded }
    const updatedState = { ...currentState, [itk]: updatedItem }
    setState(Object.keys(updatedState).map(key => updatedState[key]))
  }

  let accordiongroup_css = {}
  let accordionitem_css = {}

  if (css) {
    if (css.accordionGroup) {
      accordiongroup_css = { ...css.accordionGroup }
    }
    if (css.accordionItem) {
      accordionitem_css = { ...css.accordionItem }
    }
  }

  return (
    <AccordionGroup
      size={size}
      css={accordiongroup_css}
    >
      {state.map((accordionItem) => (
        <AccordionItem
          {...accordionItem}
          key={accordionItem.id}
          onClick={() => handleClick(accordionItem.id)}
          iconExpandedState={iconExpandedState}
          iconNotExpandedState={iconNotExpandedState}
          css={accordionitem_css}
        />
      ))}
    </AccordionGroup>
  )
}

Accordion.defaultProps = {
  size: 'sm'
}