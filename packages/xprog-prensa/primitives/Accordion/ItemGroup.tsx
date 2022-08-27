import PropTypes from 'prop-types'
import React from 'react'

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
    <>
      <Typography
        as={accordionTitleAs}
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
        as={accordionContentAs}
        id={section_id}
        innerSpace={innerSpace}
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
  onClick: PropTypes.any,
}
