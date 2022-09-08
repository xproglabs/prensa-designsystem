import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { AccordionItemGroup } from './ItemGroup'
import { AccordionGroup } from './styles'
import { AccordionProps, AccordionItemGroupProps } from './types'

export const Accordion: React.FC<AccordionProps> = ({
  css,
  items,
  innerSpace,
  size,
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
    if (css.accordionItemGroup) {
      accordionitem_css = { ...css.accordionItemGroup }
    }
  }

  return (
    <AccordionGroup
      size={size}
      css={accordiongroup_css}
    >
      {state.map(({ id, onClick, ...otherProps }: AccordionItemGroupProps) => (
        <AccordionItemGroup
          key={id}
          id={id}
          innerSpace={innerSpace}
          onClick={onClick ? onClick : () => handleClick(id)}
          css={accordionitem_css}
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

Accordion.propTypes = {
  children: PropTypes.any,
  css: PropTypes.any,
  items: PropTypes.any,
  innerSpace: PropTypes.any,
  size: PropTypes.any
}