import PropTypes from 'prop-types'
import React from 'react'

import { useLink } from '../../hooks/useLink'
import { Block } from '../Block'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { ExpandLessIcon } from './ExpandLessIcon'
import { ExpandMoreIcon } from './ExpandMoreIcon'
import { AccordionContent } from './styles'
import { AccordionItemGroupProps } from './types'

export const AccordionItemGroup: React.FC<AccordionItemGroupProps> = ({
  accordionContentAs,
  accordionTitleAs,
  accordionTitleVariant,
  children,
  css,
  expanded,
  href,
  iconExpandedState,
  icon,
  iconNotExpandedState,
  id,
  innerSpace,
  linkProps,
  onClick,
  title
}) => {

  let container_css: any = {}
  let content_css: any = {}
  let title_css: any = { align: ['row', 'between', 'middle'] }
  let icon_button_css: any = {}
  let icon_css: any = {}

  const button_id = `pds-accordion-button-${id}`
  const section_id = `pds-accordion-section-${id}`

  if (css && css.accordionItemGroupContainer) {
    container_css = { ...css.accordionItemGroupContainer }
  }

  if (css && css.accordionTitle) {
    if (css.accordionTitle.title) {
      title_css = { ...title_css, ...css.accordionTitle.title }
    }
    if (css.accordionTitle.iconButton) {
      icon_button_css = { ...css.accordionTitle.iconButton } 
    }
    if (css.accordionTitle.icon) {
      icon_css = { ...css.accordionTitle.icon } 
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

  const handleClick = (e) => {
    if (onClick) {
      onClick && onClick(e)
    }
  }

  const itemIcon = expanded ? renderExpandedStateIcon() : renderNotExpandedStateIcon()

  return (
    <Block
      className='pds-Accordion-ItemGroup-container'
      css={container_css}
    >
      <Typography
        as={accordionTitleAs}
        aria-controls={section_id}
        className='pds-Accordion-ItemGroup-title'
        id={button_id}
        variant={accordionTitleVariant}
        css={title_css}
      >
        {useLink({ bypass: !href ? true : false, href, ...linkProps }, title)}
        {useLink({ bypass: children ? true : false, href, ...linkProps }, (
          <IconButton
            className='pds-Accordion-ItemGroup-IconButton'
            variant='ghost'
            onClick={handleClick}
            icon={itemIcon}
            css={{ button: icon_button_css, icon: icon_css }}
          />
        ))}
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
  accordionTitleVariant: 'buttonLabel-default',
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
