import React, { useState } from 'react'

import { AccordionItemGroup } from './itemGroup'
import { AccordionProps } from './props'
import { AccordionGroup } from './styles'

export const Accordion: React.FC<AccordionProps> = ({
  css,
  items,
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
    
    //global accordion css
    if (css.accordionGroup) {
      accordiongroup_css = { ...css.accordionGroup }
    }

    //global accordionItem css
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
        <AccordionItemGroup
          key={accordionItem.id}
          onClick={() => handleClick(accordionItem.id)}
          css={accordionitem_css}
          {...accordionItem}
        />
      ))}
    </AccordionGroup>
  )
}

Accordion.defaultProps = {
  size: 'sm'
}