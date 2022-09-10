import PropTypes from 'prop-types'
import React from 'react'

import { Block } from '../Block'
import { Button } from '../Button'
import { ExpandLessIcon } from './ExpandLessIcon'
import { ExpandMoreIcon } from './ExpandMoreIcon'
import { Typography } from '../Typography'
import { AccordionContent } from './styles'
import { AccordionItemGroupProps } from './types'

export const AccordionItemGroup: React.FC<AccordionItemGroupProps> = ({
  accordionContentAs,
  accordionTitleAs,
  children,
  css,
  expanded,
  iconExpandedState,
  icon,
  iconNotExpandedState,
  id,
  innerSpace,
  onClick,
  title
}) => {

  let container_css: any = {}
  let button_css: any = { button: { align: ['row', 'between', 'middle'], width: '100%' }, label: {} }
  let content_css: any = {}
  let title_css: any = {}

  const button_id = `pds-accordion-button-${id}`
  const section_id = `pds-accordion-section-${id}`

  if (css && css.accordionItemGroupContainer) {
    container_css = { ...css.accordionItemGroupContainer }
  }

  if (css && css.accordionTitle) {
    if (css.accordionTitle.title) {
      title_css = { ...css.accordionTitle.title }
    }
    if (css.accordionTitle.button) {
      button_css = { button: { ...button_css.button, ...css.accordionTitle.button }, label: { ...button_css.label } }
    }
    if (css.accordionTitle.label) {
      button_css = { button: { ...button_css.button }, label: { ...css.accordionTitle.label } }
    }
  }

  if (css && css.accordionContent) {
    content_css = { ...content_css, ...css.accordionContent }
  } 

  const renderExpandedStateIcon = () => {
    if (icon) {
      return icon
    }
    if (iconExpandedState) {
      return iconExpandedState
    }
    return <ExpandLessIcon />
  }

  const renderNotExpandedStateIcon = () => {
    if (icon) {
      return icon
    }
    if (iconNotExpandedState) {
      return iconNotExpandedState
    }
    return <ExpandMoreIcon />
  }

  return (
    <Block
      className='pds-Accordion-ItemGroup-container'
      css={container_css}
    >
      <Typography
        className='pds-Accordion-ItemGroup-title'
        as={accordionTitleAs}
        css={title_css}
      > 
        <Button
          className='pds-Accordion-ItemGroup-button'
          id={button_id}
          aria-controls={section_id}
          variant='ghost'
          onClick={onClick}
          iconRight={expanded ? renderExpandedStateIcon() : renderNotExpandedStateIcon()}
          css={button_css}
        >
          {title}
        </Button>
      </Typography>
      <AccordionContent
        className='pds-Accordion-ItemGroup-content'
        as={accordionContentAs}
        id={section_id}
        innerSpace={innerSpace}
        aria-labelledby={button_id}
        hidden={!expanded}
        css={content_css}
      >
        {children}
      </AccordionContent>
    </Block>
  )
}

AccordionItemGroup.defaultProps = {
  accordionTitleAs: 'h3',
  accordionContentAs: 'section'
}

AccordionItemGroup.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  accordionTitleAs: PropTypes.any,
  accordionContentAs: PropTypes.any,
  children: PropTypes.any,
  css: PropTypes.any,
  expanded: PropTypes.any,
  icon: PropTypes.any,
  iconExpandedState: PropTypes.any,
  iconNotExpandedState: PropTypes.any,
  innerSpace: PropTypes.any,
  onClick: PropTypes.any,
}
