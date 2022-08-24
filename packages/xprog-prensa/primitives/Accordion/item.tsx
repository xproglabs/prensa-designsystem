import React from 'react'

import { Button } from '../Button'
import { ExpandLessIcon } from './ExpandLessIcon'
import { ExpandMoreIcon } from './ExpandMoreIcon'
import { Typography } from '../Typography'
import { AccordionItemProps } from './props'
import { AccordionContent } from './styles'

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  expanded,
  iconExpandedState,
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
    if (css.accordionButton) {
      button_css = {
        button: { ...button_css.button, ...css.accordionButton.button },
        label: { ...button_css.label, ...css.accordionButton.label }
      }
    }
    if (css.accordionContent) {
      content_css = {
        ...content_css,
        ...css.accordionContent
      }
    }
    if (css.accordionTitle) {
      title_css = {
        ...title_css,
        ...css.accordionTitle
      }
    }
  }

  const renderExpandedStateIcon = () => {
    if (iconExpandedState) {
      return iconExpandedState
    } else {
      return <ExpandLessIcon />
    }
  }

  const renderNotExpandedStateIcon = () => {
    if (iconNotExpandedState) {
      return iconNotExpandedState
    } else {
      return <ExpandMoreIcon />
    }
  }

  return (
    <>
      <Typography
        as='h3'
        css={title_css}
      >
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