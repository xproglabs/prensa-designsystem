import React from 'react'

import { Button } from '../Button'
import { ExpandLessIcon } from './ExpandLessIcon'
import { ExpandMoreIcon } from './ExpandMoreIcon'
import { Typography } from '../Typography'
import { AccordionItemGroupProps } from './props'
import { AccordionContent } from './styles'

export const AccordionItemGroup: React.FC<AccordionItemGroupProps> = ({
  children,
  expanded,
  iconExpandedState,
  iconFixed,
  iconNotExpandedState,
  id,
  onClick,
  title,
  css
}) => {

  const button_initial_css = {
    button: { align: ['row', 'between', 'middle'], width: '100%' },
    label: {}
  }

  let button_css: any = { ...button_initial_css }
  let content_css: any = {}
  let title_css: any = {}

  const button_id = `pds-accordion-button-${id}`
  const section_id = `pds-accordion-section-${id}`

  if (css) {
    if (css.accordionTitle) {
      button_css = {
        button: { ...button_css.button, ...css.accordionTitle.button },
        label: { ...button_css.label, ...css.accordionTitle.label }
      }
    }
    if (css.accordionContent) {
      content_css = { ...content_css, ...css.accordionContent }
    }
    if (css.accordionTitle) {
      title_css = { ...title_css, ...css.accordionTitle }
    }
  }

  const renderExpandedStateIcon = () => {
    if (iconFixed) {
      return iconFixed
    }
    if (iconExpandedState) {
      return iconExpandedState
    }
    return <ExpandLessIcon />
  }

  const renderNotExpandedStateIcon = () => {
    if (iconFixed) {
      return iconFixed
    }
    if (iconNotExpandedState) {
      return iconNotExpandedState
    }
    return <ExpandMoreIcon />
  }

  return (
    <>
      <Typography css={title_css}>
        <Button
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
        id={section_id}
        aria-labelledby={button_id}
        hidden={!expanded}
        css={content_css}
      >
        {children}
      </AccordionContent>
    </>
  )
}

AccordionItemGroup.defaultProps = {
  titleAs: 'h3'
}